#!/bin/bash

# Script to merge next batch of branches into main
set -e

# List of branches to merge (next 10)
branches=(
    "origin/1ry69n-codex/fix-npm-eio-error-during-install"
    "origin/1sqc9r-codex/implement-light/dark-theme-with-persistence"
    "origin/1tg4fy-codex/support-metric--imperial-units"
    "origin/1wzbwr-codex/fix-typescript-errors-in-files"
    "origin/2025-comprehensive-services-expansion"
    "origin/22xuo1-codex/implement-wishlist-functionality"
    "origin/24727i-codex/implement-stripe-checkout-flow"
    "origin/2503nr-codex/fix-ts2614-error-with-suspense-import"
    "origin/26ywwb-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/2aff-codex/fix-blank-screen-on-app-load"
)

echo "Starting batch 2 merge process..."

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

echo "Batch 2 merge process completed!"