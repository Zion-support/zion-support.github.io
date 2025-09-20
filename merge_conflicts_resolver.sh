#!/bin/bash

# Merge Conflicts Resolver Script
# This script will help resolve merge conflicts and merge PRs into main

set -e

echo "Starting merge conflicts resolution process..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "Error: Not in a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Check if we're on main branch
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes from origin
echo "Pulling latest changes from origin..."
git pull origin main

# List all branches
echo "Available branches:"
git branch -a

# Check for merge conflicts in current branch
echo "Checking for merge conflicts..."
if git merge --no-commit --no-ff cursor/fix-netlify-build-and-merge-to-main-96e2 2>&1 | grep -q "conflict"; then
    echo "Merge conflicts detected. Resolving..."
    
    # List conflicted files
    echo "Conflicted files:"
    git diff --name-only --diff-filter=U
    
    # Auto-resolve simple conflicts (choose incoming changes)
    echo "Auto-resolving conflicts by choosing incoming changes..."
    git checkout --theirs .
    git add .
    
    # Commit the merge
    git commit -m "Resolved merge conflicts: Auto-merged cursor/fix-netlify-build-and-merge-to-main-96e2 into main"
    
    echo "Merge conflicts resolved and committed."
else
    echo "No merge conflicts detected. Proceeding with merge..."
    git merge --no-ff cursor/fix-netlify-build-and-merge-to-main-96e2 -m "Merge cursor/fix-netlify-build-and-merge-to-main-96e2 into main"
fi

# Push changes to origin
echo "Pushing changes to origin..."
git push origin main

echo "Merge process completed successfully!"

# List remaining branches that might need merging
echo "Checking for other branches that might need merging..."
git branch -r | grep -v main | head -10

echo "Script completed. Please check GitHub for any remaining open PRs."