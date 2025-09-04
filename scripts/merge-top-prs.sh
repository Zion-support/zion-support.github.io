#!/usr/bin/env bash
set -euo pipefail

# Merge only the most recent 100 PRs for efficiency

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Starting top PR merge process..."

current_branch="$(git rev-parse --abbrev-ref HEAD)"
trap 'git merge --abort >/dev/null 2>&1 || true; git checkout -f "$current_branch" >/dev/null 2>&1 || true' EXIT

# Ensure we're on main and up to date
git fetch origin main >/dev/null 2>&1 || true
git checkout -f main >/dev/null 2>&1
git reset --hard origin/main >/dev/null 2>&1

merged_count=0
skipped_count=0

# Get only the most recent 100 PRs (highest numbers)
mapfile -t pr_refs < <(git for-each-ref --format='%(refname)' 'refs/remotes/origin/pr/*' | sed 's#refs/remotes/origin/##' | sort -t/ -k3,3nr | head -n 100)

echo "Processing top ${#pr_refs[@]} most recent PRs"

for pr_ref in "${pr_refs[@]}"; do
    echo "\n=== Processing ${pr_ref} ==="
    
    # Reset to clean main state
    git checkout -f main >/dev/null 2>&1
    git reset --hard origin/main >/dev/null 2>&1
    
    # Try to merge the PR
    if git merge --no-edit "origin/${pr_ref}" >/dev/null 2>&1; then
        echo "✓ Clean merge for ${pr_ref}"
        ((merged_count++))
        
        # Push immediately
        if git push origin main >/dev/null 2>&1; then
            echo "✓ Pushed ${pr_ref} to main"
        else
            echo "⚠ Push failed for ${pr_ref}"
        fi
    else
        echo "⚠ Conflict in ${pr_ref}, auto-resolving..."
        
        # Auto-resolve conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
            if [[ -f "$file" ]]; then
                git checkout --theirs "$file" >/dev/null 2>&1 || true
                git add "$file" >/dev/null 2>&1 || true
            fi
        done
        
        if git commit --no-edit >/dev/null 2>&1; then
            echo "✓ Conflicts resolved for ${pr_ref}"
            ((merged_count++))
            
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
    fi
done

git checkout -f "$current_branch" >/dev/null 2>&1 || true

echo "\nTop PR merge process completed:"
echo "- Merged: ${merged_count}"
echo "- Skipped: ${skipped_count}"