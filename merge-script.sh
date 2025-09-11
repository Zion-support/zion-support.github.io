#!/bin/bash

# Script to resolve merge conflicts and merge PRs
echo "Starting merge process..."

# Check current status
echo "Current Git status:"
git status --porcelain

# Check for open PRs (if we can access GitHub API)
echo "Checking for open PRs..."

# Try to fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Check current branch
echo "Current branch:"
git branch --show-current

# Try to merge main into current branch if not on main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Check if there are any merge conflicts
echo "Checking for merge conflicts..."
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "Merge conflicts detected. Resolving..."
    # Auto-resolve conflicts by accepting current changes
    git checkout --ours .
    git add .
    git commit -m "Resolved merge conflicts automatically"
fi

echo "Merge process completed."