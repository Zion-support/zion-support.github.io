#!/bin/bash

# Quick script to merge recent PR branches into main
echo "=== Quick PR Merge Script ==="

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# List of recent branches to merge
BRANCHES=(
    "origin/cursor/check-fix-push-and-merge-to-main-c42f"
    "origin/cursor/check-fix-push-and-merge-to-main-155b"
    "origin/cursor/check-fix-push-and-merge-to-main-11d2"
    "origin/cursor/check-fix-push-and-merge-to-main-696d"
    "origin/cursor/check-fix-push-and-merge-to-main-5d27"
)

# Process each branch
for branch in "${BRANCHES[@]}"; do
    echo "Processing $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "Merging $branch into main"
        
        # Try to merge the branch
        if git merge "$branch" --no-edit; then
            echo "Successfully merged $branch"
            git push origin main
        else
            echo "Merge conflict in $branch, resolving automatically"
            
            # Auto-resolve conflicts by taking main version for package files
            git status --porcelain | grep "^UU" | while read status file; do
                if [[ "$file" == *"package"* ]] || [[ "$file" == *"yarn.lock"* ]]; then
                    echo "Resolving $file by taking main version"
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "Successfully resolved conflicts and merged $branch"
                git push origin main
            else
                echo "Failed to resolve conflicts, aborting merge"
                git merge --abort
            fi
        fi
    else
        echo "Branch $branch does not exist"
    fi
done

echo "=== Merge Complete ==="
git status