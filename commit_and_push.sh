#!/bin/bash

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "Not in a git repository"
    exit 1
fi

# Check current branch
echo "Current branch:"
git branch --show-current

# Check status
echo "Git status:"
git status --porcelain

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix Netlify build configuration and dependencies

- Ensure all dependencies are properly installed
- Verify Vite build process works correctly
- Confirm Netlify configuration is properly set up
- Build generates dist folder with all required assets"

# Push to current branch
echo "Pushing to current branch..."
git push origin HEAD

# Check if we need to merge to main
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "Current branch is $current_branch, not main"
    echo "To merge to main, you may need to:"
    echo "1. Switch to main: git checkout main"
    echo "2. Merge this branch: git merge $current_branch"
    echo "3. Push to main: git push origin main"
fi

echo "Done!"