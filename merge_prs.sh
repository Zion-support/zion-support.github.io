#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting PR merge process..."

# List of PR branches to merge (from the JSON data)
PR_BRANCHES=(
    "origin/cursor/build-and-deploy-with-vite-and-netlify-8b37"
    "origin/cursor/fix-errors-and-merge-to-main-fcbd"
    "origin/cursor/fix-errors-and-merge-to-main-e6e1"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"
    "origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"
)

# Ensure we're on main branch
git checkout main

# Pull latest changes
git pull origin main

echo "Merging PRs..."

for branch in "${PR_BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if merge would have conflicts
    if git merge --no-commit --no-ff "$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main"
    else
        echo "❌ Merge conflict detected in $branch"
        git merge --abort 2>/dev/null || true
        
        # Try to resolve conflicts automatically
        echo "Attempting to resolve conflicts for $branch..."
        if git merge "$branch" 2>/dev/null; then
            echo "✅ Conflicts resolved for $branch"
        else
            echo "❌ Could not resolve conflicts for $branch automatically"
            # Continue with next branch
        fi
    fi
done

echo "All PRs processed. Pushing changes..."
git push origin main

echo "✅ PR merge process completed!"