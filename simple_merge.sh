#!/bin/bash

# Simple script to merge the PR and resolve conflicts
echo "🚀 Starting simple PR merge process..."

# Ensure we're on main
git checkout main

# Pull latest changes
git pull origin main

# The PR branch
PR_BRANCH="cursor/fix-netlify-build-and-merge-to-main-bc4d"

echo "Merging $PR_BRANCH..."

# Try to merge with conflict resolution strategy
git merge origin/$PR_BRANCH --no-ff -X theirs -m "Merge PR: Fix Netlify build and merge to main

- Fixed Netlify build configuration
- Resolved syntax errors in TypeScript/JSX files  
- Updated build process for successful deployment"

if [ $? -eq 0 ]; then
    echo "✅ Merge successful!"
    
    # Push changes
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully pushed to main!"
        echo "🎉 PR merge completed!"
    else
        echo "❌ Failed to push to main"
    fi
else
    echo "❌ Merge failed - conflicts need manual resolution"
fi