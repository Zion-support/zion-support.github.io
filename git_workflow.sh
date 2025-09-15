#!/bin/bash

echo "Starting git workflow..."

# Check current status
echo "Current branch:"
git branch --show-current

echo "Git status:"
git status --porcelain

# If there are no changes, we can proceed with push and merge
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit. Proceeding with push and merge..."
    
    # Push current branch
    echo "Pushing current branch..."
    git push origin cursor/fix-lint-push-and-merge-to-main-f1ce
    
    # Switch to main branch
    echo "Switching to main branch..."
    git checkout main
    
    # Pull latest changes
    echo "Pulling latest changes from main..."
    git pull origin main
    
    # Merge the feature branch
    echo "Merging feature branch..."
    git merge cursor/fix-lint-push-and-merge-to-main-f1ce
    
    # Push merged changes
    echo "Pushing merged changes..."
    git push origin main
    
    # Clean up feature branch
    echo "Cleaning up feature branch..."
    git branch -d cursor/fix-lint-push-and-merge-to-main-f1ce
    git push origin --delete cursor/fix-lint-push-and-merge-to-main-f1ce
    
    echo "Git workflow completed successfully!"
else
    echo "There are uncommitted changes. Please commit them first."
    git status
fi