#!/bin/bash

cd /workspace

echo "Starting git operations..."

# Check current status
echo "Checking git status..."
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Resolve merge conflicts and clean up repository

- Resolved conflicts in tailwind.config.ts
- Resolved conflicts in components/layout/Header.tsx
- Resolved conflicts in components/layout/Footer.tsx
- Resolved conflicts in components/layout/EnhancedLayout.tsx
- Removed conflicted backup files
- Cleaned up repository structure"

# Check branches
echo "Checking available branches..."
git branch -a

# Try to merge any open PRs
echo "Attempting to merge open PRs..."

# Check if we're on main branch
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

# If not on main, switch to main
if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes from origin..."
git pull origin main

# Push changes
echo "Pushing changes to origin..."
git push origin main

echo "Git operations completed successfully!"