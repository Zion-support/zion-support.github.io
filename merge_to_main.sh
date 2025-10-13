#!/bin/bash

# Script to merge the current branch to main
echo "Starting merge process..."

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

# Switch back to feature branch
echo "Switching back to feature branch..."
git checkout cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5b87

# Merge main into feature branch
echo "Merging main into feature branch..."
git merge main --no-edit

# Switch back to main
echo "Switching to main branch..."
git checkout main

# Merge feature branch into main
echo "Merging feature branch into main..."
git merge cursor/enhance-and-expand-ziontechgroup-com-services-and-site-5b87 --no-edit

# Push changes to main
echo "Pushing changes to main..."
git push origin main

echo "Merge completed successfully!"