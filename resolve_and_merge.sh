#!/bin/bash

# Resolve merge conflicts and merge PRs
echo "Starting merge conflict resolution and PR merge process..."

# Check current status
echo "Checking git status..."
git status

# Add all resolved files
echo "Adding resolved files..."
git add .

# Commit the resolved conflicts
echo "Committing resolved conflicts..."
git commit -m "fix: Resolve merge conflicts in sitemap.xml and add new content URLs

- Resolved merge conflicts in app/sitemap.xml
- Added new blog post URLs for AI 2026 content
- Added new case study URLs for success stories
- Standardized date format to ISO 8601
- Updated sitemap with latest content"

# Check if we're on main branch
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes from origin..."
git pull origin main

# Try to merge the feature branch
echo "Attempting to merge feature branch..."
if git merge cursor/create-and-deploy-new-content-43b1; then
    echo "Merge successful!"
else
    echo "Merge failed, resolving conflicts..."
    # Resolve any remaining conflicts
    git status
    git add .
    git commit -m "fix: Resolve remaining merge conflicts"
fi

# Push to main
echo "Pushing to main branch..."
git push origin main

echo "Process completed!"