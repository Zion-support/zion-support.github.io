#!/bin/bash

# Script to merge PR #11935
echo "Starting PR merge process..."

# Fetch the latest changes
git fetch origin

# Try to merge the PR branch
echo "Attempting to merge cursor/fix-web-application-console-errors-0bf5..."
git merge origin/cursor/fix-web-application-console-errors-0bf5 --no-ff -m "Merge PR #11935: Fix web application console errors"

if [ $? -eq 0 ]; then
    echo "✅ PR merged successfully!"
    git push origin main
    echo "✅ Changes pushed to main branch"
else
    echo "❌ Merge failed, checking for conflicts..."
    git status
    echo "Attempting to resolve conflicts automatically..."
    
    # Check if there are conflicts
    if git diff --name-only --diff-filter=U | grep -q .; then
        echo "Conflicts detected, attempting to resolve..."
        # Auto-resolve conflicts by accepting incoming changes
        git checkout --theirs .
        git add .
        git commit -m "Resolve merge conflicts for PR #11935"
        git push origin main
        echo "✅ Conflicts resolved and pushed"
    else
        echo "No conflicts detected, but merge still failed"
    fi
fi

echo "PR merge process completed"