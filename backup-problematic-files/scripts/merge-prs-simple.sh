#!/usr/bin/env bash
set -euo pipefail

# Simple PR merger that processes PRs one by one with better error handling

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Starting simple PR merge process..."

current_branch="$(git rev-parse --abbrev-ref HEAD)"
trap 'git merge --abort >/dev/null 2>&1 || true; git checkout -f "$current_branch" >/dev/null 2>&1 || true' EXIT

# Ensure we're on main and up to date
git fetch origin main >/dev/null 2>&1 || true
git checkout -f main >/dev/null 2>&1
git reset --hard origin/main >/dev/null 2>&1

merged_count=0
skipped_count=0

# Get PR refs, starting with higher numbers (more recent)
mapfile -t pr_refs < <(git for-each-ref --format='%(refname)' 'refs/remotes/origin/pr/*' | sed 's#refs/remotes/origin/##' | sort -t/ -k3,3nr)

echo "Found ${#pr_refs[@]} PRs to process"

for pr_ref in "${pr_refs[@]}"; do
    echo "\n=== Processing ${pr_ref} ==="
    
    # Reset to clean main state
    git checkout -f main >/dev/null 2>&1
    git reset --hard origin/main >/dev/null 2>&1
    
    # Try to merge the PR
    if git merge --no-edit "origin/${pr_ref}" >/dev/null 2>&1; then
        echo "✓ Clean merge for ${pr_ref}"
        ((merged_count++))
        
        # Push immediately after each successful merge
        if git push origin main >/dev/null 2>&1; then
            echo "✓ Pushed ${pr_ref} to main"
        else
            echo "⚠ Push failed for ${pr_ref}, but merge succeeded locally"
        fi
    else
        echo "⚠ Conflict in ${pr_ref}, attempting auto-resolution..."
        
        # Check for conflicts and resolve them
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in ${pr_ref}..."
            
            # Auto-resolve by preferring PR version
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
                if [[ -f "$file" ]]; then
                    echo "  Resolving conflict in $file"
                    git checkout --theirs "$file" >/dev/null 2>&1 || true
                    git add "$file" >/dev/null 2>&1 || true
                fi
            done
            
            # Complete the merge
            if git commit --no-edit >/dev/null 2>&1; then
                echo "✓ Conflicts resolved for ${pr_ref}"
                ((merged_count++))
                
                # Push the resolved merge
                if git push origin main >/dev/null 2>&1; then
                    echo "✓ Pushed resolved ${pr_ref} to main"
                else
                    echo "⚠ Push failed for resolved ${pr_ref}"
                fi
            else
                echo "✗ Failed to resolve conflicts for ${pr_ref}, skipping"
                git merge --abort >/dev/null 2>&1 || true
                ((skipped_count++))
            fi
        else
            echo "✗ No conflicts found but merge failed for ${pr_ref}, skipping"
            git merge --abort >/dev/null 2>&1 || true
            ((skipped_count++))
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.5
done

git checkout -f "$current_branch" >/dev/null 2>&1 || true

echo "\nSimple merge process completed:"
echo "- Merged: ${merged_count}"
echo "- Skipped: ${skipped_count}"