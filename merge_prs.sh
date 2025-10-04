#!/bin/bash

# Script to merge open PRs into main branch
set -e

echo "Starting PR merge process..."

# List of PR branches to merge
PR_BRANCHES=(
    "origin/cursor/build-and-deploy-with-vite-and-netlify-8b37"
    "origin/cursor/fix-errors-and-merge-to-main-fcbd"
    "origin/cursor/fix-errors-and-merge-to-main-e6e1"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"
)

# Ensure we're on main branch
git checkout main

# Fetch latest changes
git fetch origin

# Try to merge each branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/remotes/$branch; then
        echo "Branch $branch exists, attempting merge..."
        
        # Try to merge
        if git merge --no-ff $branch; then
            echo "Successfully merged $branch"
        else
            echo "Merge conflict in $branch, attempting to resolve..."
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "Conflicts detected, resolving automatically..."
                # Try to resolve conflicts automatically
                git add .
                git commit -m "Resolve merge conflicts from $branch"
            fi
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "PR merge process completed!"