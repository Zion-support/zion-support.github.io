#!/bin/bash

# Batch merge PRs script
# This script will merge multiple PRs systematically

set -e

echo "Starting batch merge process..."

# List of recent PR branches to process
PR_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-ff81"
    "origin/cursor/create-and-deploy-new-content-ff2a"
    "origin/cursor/create-and-deploy-new-content-ff16"
    "origin/cursor/create-and-deploy-new-content-fe8f"
    "origin/cursor/create-and-deploy-new-content-fe7f"
    "origin/cursor/create-and-deploy-new-content-fe5c"
    "origin/cursor/create-and-deploy-new-content-fe5a"
    "origin/cursor/create-and-deploy-new-content-fe01"
    "origin/cursor/create-and-deploy-new-content-fdac"
    "origin/cursor/create-and-deploy-new-content-fd98"
)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Process each PR branch
for branch in "${PR_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch"
    
    # Try to merge with main
    if git merge main --no-commit; then
        echo "Merge successful for $branch"
        git commit -m "Merge main into $branch - resolve conflicts and integrate latest changes"
        
        # Push the updated branch
        git push origin "$branch"
        
        # Merge into main
        git checkout main
        if git merge "$branch" --no-commit; then
            git commit -m "Merge $branch into main"
            git push origin main
            echo "Successfully merged $branch into main"
        else
            echo "Failed to merge $branch into main"
            git merge --abort
        fi
    else
        echo "Merge failed for $branch, resolving conflicts..."
        
        # Resolve conflicts by keeping our version
        git checkout --ours .
        git add .
        git commit -m "Resolve merge conflicts for $branch"
        
        # Push the updated branch
        git push origin "$branch"
        
        # Merge into main
        git checkout main
        if git merge "$branch" --no-commit; then
            git commit -m "Merge $branch into main after conflict resolution"
            git push origin main
            echo "Successfully merged $branch into main after conflict resolution"
        else
            echo "Failed to merge $branch into main after conflict resolution"
            git merge --abort
        fi
    fi
    
    echo "Completed processing $branch"
    echo "---"
done

echo "Batch merge process completed!"