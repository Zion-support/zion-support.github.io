#!/bin/bash

# Script to merge multiple branches into main
set -e

# List of branches to merge (first 10)
branches=(
    "origin/0parff-codex/centralize-api-error-handling-and-add-errorboundary"
    "origin/0smfo8-codex/fix-404-error-for-non-existent-route"
    "origin/0t8m4m-codex/update-project-color-palette"
    "origin/0une71-codex/fix-unsupported-shell-syntax-in-setup.sh"
    "origin/14gqd5-codex/implement-checkout-flow-with-auth-redirect"
    "origin/1dcwqi-codex/implement-global-pricing-with-currency-selection"
    "origin/1fjs4s-codex/implement-instant-messaging-for-negotiations"
    "origin/1m9jcs-codex/fix-client-side-rendering-and-javascript-errors"
    "origin/1nc0kn-codex/fix-blank-screen-on-app-load"
    "origin/1nq1ky-codex/render-talent-profiles-with-error-states"
)

echo "Starting batch merge process..."

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

echo "Batch merge process completed!"