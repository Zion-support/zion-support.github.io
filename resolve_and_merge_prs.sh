#!/bin/bash

# Script to resolve merge conflicts and merge all open PRs
echo "Starting PR resolution and merge process..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get the PR branch from the JSON file
PR_BRANCH="cursor/fix-netlify-build-and-merge-to-main-bc4d"

echo "Processing PR branch: $PR_BRANCH"

# Fetch the PR branch
echo "Fetching branch $PR_BRANCH..."
git fetch origin $PR_BRANCH

if [ $? -eq 0 ]; then
    echo "Successfully fetched $PR_BRANCH"
    
    # Check if there are any conflicts
    echo "Checking for merge conflicts..."
    git merge origin/$PR_BRANCH --no-commit --no-ff
    
    if [ $? -eq 0 ]; then
        echo "No conflicts found. Proceeding with merge..."
        git commit -m "Merge PR: Fix Netlify build and merge to main
        
        - Fixed Netlify build configuration
        - Resolved syntax errors in TypeScript/JSX files
        - Updated build process for successful deployment"
        
        echo "✅ Successfully merged $PR_BRANCH"
        
        # Push the changes
        echo "Pushing merged changes to origin/main..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully pushed changes to main"
        else
            echo "❌ Failed to push changes to main"
        fi
    else
        echo "❌ Merge conflicts detected. Attempting to resolve..."
        
        # Check what files have conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD"
        
        # Try to resolve conflicts automatically
        echo "Attempting automatic conflict resolution..."
        
        # For common conflict patterns, we can try to resolve them
        # This is a basic approach - in practice, you'd want more sophisticated resolution
        
        # Abort the current merge and try a different approach
        git merge --abort
        
        # Try to merge with strategy
        git merge origin/$PR_BRANCH --no-ff -X theirs -m "Merge PR: Fix Netlify build and merge to main (resolved conflicts)"
        
        if [ $? -eq 0 ]; then
            echo "✅ Successfully merged $PR_BRANCH with conflict resolution"
            git push origin main
        else
            echo "❌ Failed to resolve conflicts automatically"
            echo "Manual intervention required for conflict resolution"
        fi
    fi
else
    echo "❌ Failed to fetch $PR_BRANCH"
fi

echo "PR merge process completed."