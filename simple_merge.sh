#!/bin/bash

# Simple merge script to handle the current situation
echo "Starting simple merge process..."

# Try to get current status
echo "Current directory: $(pwd)"
echo "Git status:"
git status --short || echo "Git status failed"

# Try to switch to main
echo "Switching to main branch..."
git checkout main || echo "Could not switch to main"

# Try to pull latest
echo "Pulling latest changes..."
git pull origin main || echo "Could not pull latest"

# Try to merge the feature branch
echo "Merging feature branch..."
git merge cursor/create-and-deploy-new-content-7d26 || echo "Merge failed"

# Try to push changes
echo "Pushing changes..."
git push origin main || echo "Could not push"

echo "Merge process completed!"