#!/bin/bash

# Script to merge next batch of branches into main
set -e

# List of branches to merge (next 10)
branches=(
    "origin/2e38-codex/fix-blank-screen-on-app-load"
    "origin/2ead-codex/fix-blank-screen-on-app-load"
    "origin/2eea-codex/fix-blank-screen-on-app-load"
    "origin/2f1e-codex/fix-blank-screen-on-app-load"
    "origin/3272-codex/fix-blank-screen-on-app-load"
    "origin/3275-codex/fix-blank-screen-on-app-load"
    "origin/33b5-codex/fix-blank-screen-on-app-load"
    "origin/3486-codex/fix-blank-screen-on-app-load"
    "origin/3727-codex/fix-blank-screen-on-app-load"
    "origin/37b4-codex/fix-blank-screen-on-app-load"
)

echo "Starting batch 3 merge process..."

for branch in "${branches[@]}"; do
    echo "Processing branch: $branch"
    
    # Extract branch name for local branch
    local_branch=$(echo "$branch" | sed 's/origin\///' | sed 's/\//-/g')
    
    # Create and checkout local branch
    git checkout -b "merge-$local_branch" "$branch" || {
        echo "Failed to checkout $branch, skipping..."
        continue
    }
    
    # Merge main into the branch
    git merge origin/main --no-ff -m "Merge main into $local_branch" || {
        echo "Merge conflict in $branch, resolving automatically..."
        # Try to resolve conflicts automatically
        git status --porcelain | grep "^UU" | while read file; do
            echo "Resolving conflict in $file"
            # Use main version for conflicts
            git checkout --theirs "$file"
            git add "$file"
        done
        git commit --no-edit || {
            echo "Failed to resolve conflicts in $branch, skipping..."
            git checkout main
            git branch -D "merge-$local_branch"
            continue
        }
    }
    
    # Switch back to main and merge
    git checkout main
    git merge "merge-$local_branch" --no-ff -m "Merge $local_branch into main" || {
        echo "Failed to merge $local_branch into main, skipping..."
        git branch -D "merge-$local_branch"
        continue
    }
    
    # Clean up
    git branch -D "merge-$local_branch"
    echo "Successfully merged $branch into main"
done

echo "Batch 3 merge process completed!"