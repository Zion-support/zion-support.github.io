#!/bin/bash

# Process multiple PRs efficiently
set -e

echo "Starting efficient PR processing..."

# Get the most recent PR branches
RECENT_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-ff2a"
    "origin/cursor/create-and-deploy-new-content-ff16"
    "origin/cursor/create-and-deploy-new-content-fe8f"
    "origin/cursor/create-and-deploy-new-content-fe7f"
    "origin/cursor/create-and-deploy-new-content-fe5c"
    "origin/cursor/create-and-deploy-new-content-fe5a"
    "origin/cursor/create-and-deploy-new-content-fe01"
    "origin/cursor/create-and-deploy-new-content-fdac"
    "origin/cursor/create-and-deploy-new-content-fd98"
    "origin/cursor/create-and-deploy-new-content-fd6a"
)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Process each branch
for branch in "${RECENT_BRANCHES[@]}"; do
    echo "Processing $branch..."
    
    # Checkout the branch
    git checkout "$branch"
    
    # Try to merge with main
    if git merge main --no-commit; then
        echo "✅ Merge successful for $branch"
        git commit -m "Merge main into $branch - resolve conflicts and integrate latest changes"
        
        # Create a new branch name
        new_branch_name="${branch#origin/}-merged"
        
        # Create and push the merged branch
        git checkout -b "$new_branch_name"
        git push origin "$new_branch_name"
        
        # Merge into main
        git checkout main
        if git merge "$new_branch_name" --no-commit; then
            git commit -m "Merge $new_branch_name into main"
            git push origin main
            echo "✅ Successfully merged $branch into main"
        else
            echo "❌ Failed to merge $new_branch_name into main"
            git merge --abort
        fi
    else
        echo "⚠️  Merge conflicts for $branch, resolving..."
        
        # Resolve conflicts by keeping our version
        git checkout --ours .
        git add .
        git commit -m "Resolve merge conflicts for $branch"
        
        # Create a new branch name
        new_branch_name="${branch#origin/}-merged"
        
        # Create and push the merged branch
        git checkout -b "$new_branch_name"
        git push origin "$new_branch_name"
        
        # Merge into main
        git checkout main
        if git merge "$new_branch_name" --no-commit; then
            git commit -m "Merge $new_branch_name into main after conflict resolution"
            git push origin main
            echo "✅ Successfully merged $branch into main after conflict resolution"
        else
            echo "❌ Failed to merge $new_branch_name into main after conflict resolution"
            git merge --abort
        fi
    fi
    
    echo "Completed processing $branch"
    echo "---"
done

echo "✅ All PRs processed successfully!"