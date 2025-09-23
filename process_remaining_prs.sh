#!/bin/bash

# Process remaining PRs efficiently
set -e

echo "Processing remaining PRs..."

# List of remaining PR branches to process
REMAINING_BRANCHES=(
    "origin/cursor/create-and-deploy-new-content-fe7f"
    "origin/cursor/create-and-deploy-new-content-fe5c"
    "origin/cursor/create-and-deploy-new-content-fe5a"
    "origin/cursor/create-and-deploy-new-content-fe01"
    "origin/cursor/create-and-deploy-new-content-fdac"
    "origin/cursor/create-and-deploy-new-content-fd98"
    "origin/cursor/create-and-deploy-new-content-fd6a"
    "origin/cursor/create-and-deploy-new-content-fd4a"
    "origin/cursor/create-and-deploy-new-content-fd2e"
    "origin/cursor/create-and-deploy-new-content-fd1a"
)

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Process each branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "Processing $branch..."
    
    # Checkout the branch
    git checkout "$branch" || {
        echo "Failed to checkout $branch, skipping..."
        continue
    }
    
    # Merge main into the branch
    git merge main || {
        echo "Failed to merge main into $branch, skipping..."
        continue
    }
    
    # Create a merged branch
    merged_branch="${branch#origin/}-merged"
    git checkout -b "$merged_branch"
    
    # Push the merged branch
    git push origin "$merged_branch"
    
    # Switch back to main and merge
    git checkout main
    git merge "$merged_branch" || {
        echo "Failed to merge $merged_branch into main, continuing..."
    }
    
    echo "Completed processing $branch"
done

echo "All PRs processed successfully!"