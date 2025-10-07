#!/bin/bash

# Git operations script
echo "Starting git operations..."

# Check current status
echo "Current branch:"
git branch --show-current

echo "Current status:"
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix syntax errors and prepare for merge" || echo "No changes to commit"

# Push to current branch
echo "Pushing to current branch..."
git push origin $(git branch --show-current)

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Merge the feature branch
echo "Merging feature branch..."
git merge $(git branch --show-current) --no-ff -m "Merge syntax fixes into main"

# Push to main
echo "Pushing to main..."
git push origin main

echo "Git operations completed successfully!"