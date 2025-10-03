#!/bin/bash

echo "Starting simple merge process..."

# Get current branch
BRANCH=$(git branch --show-current)
echo "Current branch: $BRANCH"

# If we're on the feature branch, merge main into it first
if [ "$BRANCH" = "cursor/create-and-deploy-new-content-568b" ]; then
    echo "On feature branch, merging main..."
    git fetch origin
    git merge origin/main --strategy-option=ours --no-edit
fi

# Switch to main
echo "Switching to main..."
git checkout main

# Merge the feature branch
echo "Merging feature branch..."
git merge cursor/create-and-deploy-new-content-568b --no-edit

# Push to main
echo "Pushing to main..."
git push origin main

echo "Merge completed!"