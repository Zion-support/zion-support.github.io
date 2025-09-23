#!/bin/bash

# Navigate to workspace directory
cd /workspace

# Check git status
echo "Checking git status..."
git status --short

# Add all changes
echo "Adding all changes..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Fix SEO component for Next.js 13+ app directory compatibility

- Updated SEO component to use metadata API instead of deprecated Head component
- Added generateMetadata helper function for proper Next.js 13+ compatibility
- Maintained backward compatibility with deprecation warning

This ensures the application follows Next.js 13+ best practices while maintaining functionality."

# Push to current branch
echo "Pushing to current branch..."
git push

# Check if we're on main branch, if not, merge to main
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
    
    echo "Merging $current_branch into main..."
    git merge $current_branch
    
    echo "Pushing main branch..."
    git push origin main
    
    echo "Switching back to $current_branch..."
    git checkout $current_branch
else
    echo "Already on main branch, no merge needed."
fi

echo "Git operations completed successfully!"