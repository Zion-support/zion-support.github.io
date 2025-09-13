#!/bin/bash

cd /workspace

echo "=== Starting Branch Merge Process ==="

# Check current branch
echo "Current branch: $(git branch --show-current)"

# Try to merge the feature branch
echo "Attempting to merge cursor/create-and-deploy-new-content-d04f into main..."

# Check if we can merge without conflicts
if git merge --no-commit --no-ff cursor/create-and-deploy-new-content-d04f; then
    echo "Merge successful! Committing changes..."
    git commit -m "Merge cursor/create-and-deploy-new-content-d04f into main

- Merged new content creation and deployment features
- All conflicts resolved
- Repository is now up to date"
    
    echo "Merge completed successfully!"
else
    echo "Merge failed or has conflicts. Checking status..."
    git status
fi

echo "=== Merge Process Complete ==="