#!/usr/bin/env bash
set -euo pipefail

# Merge recent PRs in batches, prioritizing newer ones

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Starting targeted PR merge process..."

current_branch="$(git rev-parse --abbrev-ref HEAD)"
trap 'git merge --abort >/dev/null 2>&1 || true; git checkout -f "$current_branch" >/dev/null 2>&1 || true' EXIT

git fetch origin main >/dev/null 2>&1 || true
git checkout -f main >/dev/null 2>&1
git reset --hard origin/main >/dev/null 2>&1

merged_count=0
skipped_count=0
batch_size=50

# Get recent PR refs (last 1000 by PR number)
mapfile -t pr_refs < <(git for-each-ref --format='%(refname)' 'refs/remotes/origin/pr/*' | sed 's#refs/remotes/origin/##' | sort -t/ -k3,3n | tail -n 1000)

echo "Processing ${#pr_refs[@]} recent PRs in batches of ${batch_size}"

for ((i=0; i<${#pr_refs[@]}; i+=batch_size)); do
    batch=("${pr_refs[@]:i:batch_size}")
    echo "\n=== Processing batch $((i/batch_size + 1)): PRs ${pr_refs[i]##*/} to ${pr_refs[$((i+${#batch[@]}-1))]##*/} ==="
    
    for pr_ref in "${batch[@]}"; do
        echo "Processing ${pr_ref}..."
        
        # Create a temporary branch for this merge
        git checkout -f -B merge-tmp origin/main >/dev/null 2>&1
        
        # Attempt merge
        if git merge --no-edit "origin/${pr_ref}" >/dev/null 2>&1; then
            echo "  ✓ Clean merge for ${pr_ref}"
        else
            echo "  ⚠ Conflict in ${pr_ref}, auto-resolving..."
            
            # Auto-resolve conflicts by preferring PR version
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
                if [[ -f "$file" ]]; then
                    git checkout --theirs "$file" >/dev/null 2>&1 || true
                    git add "$file" >/dev/null 2>&1 || true
                fi
            done
            
            if git commit --no-edit >/dev/null 2>&1; then
                echo "  ✓ Conflicts resolved for ${pr_ref}"
            else
                echo "  ✗ Failed to resolve conflicts for ${pr_ref}, skipping"
                git merge --abort >/dev/null 2>&1 || true
                ((skipped_count++))
                continue
            fi
        fi
        
        # Merge into main
        git checkout -f main >/dev/null 2>&1
        if git merge --no-ff merge-tmp -m "Merge ${pr_ref} into main" >/dev/null 2>&1; then
            echo "  ✓ Merged ${pr_ref} into main"
            ((merged_count++))
        else
            echo "  ✗ Failed to merge ${pr_ref} into main"
            ((skipped_count++))
        fi
    done
    
    # Push batch
    echo "Pushing batch..."
    if git push origin main >/dev/null 2>&1; then
        echo "  ✓ Batch pushed successfully"
    else
        echo "  ⚠ Push failed, continuing..."
    fi
    
    # Small delay between batches
    sleep 2
done

git checkout -f "$current_branch" >/dev/null 2>&1 || true

echo "\nTargeted merge process completed:"
echo "- Merged: ${merged_count}"
echo "- Skipped: ${skipped_count}"