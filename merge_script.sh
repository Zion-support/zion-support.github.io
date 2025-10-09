#!/bin/bash

# Merge script to handle conflicts and merge to main
set -e

echo "Starting merge process..."

# Fetch latest changes
git fetch origin main

# Check if we can merge without conflicts
echo "Checking for merge conflicts..."
if git merge-tree $(git merge-base HEAD origin/main) HEAD origin/main | grep -q "<<<<<<<"; then
    echo "Merge conflicts detected. Resolving automatically..."
    
    # Try to merge and resolve conflicts
    git merge origin/main --no-edit || {
        echo "Automatic merge failed. Manual resolution needed."
        exit 1
    }
else
    echo "No conflicts detected. Proceeding with merge..."
    git merge origin/main --no-edit
fi

echo "Merge completed successfully!"
echo "Pushing changes to main branch..."

# Push to main
git push origin HEAD:main

echo "All changes have been merged and pushed to main branch!"