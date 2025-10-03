#!/bin/bash

# Script to resolve merge conflicts and merge PRs
set -e

echo "Starting merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file"
    
    # Use git checkout --ours for most conflicts (keep main branch version)
    # Use git checkout --theirs for specific files that need updates
    if [[ "$file" == *"blog"* ]]; then
        # For blog files, keep the newer version (theirs)
        git checkout --theirs "$file"
    else
        # For other files, keep main branch version (ours)
        git checkout --ours "$file"
    fi
    
    # Add the resolved file
    git add "$file"
}

# Merge the first PR
echo "Merging PR #24979..."
git merge origin/cursor/fix-errors-and-merge-to-main-7f5b --no-ff -m "Merge PR #24979: Fix errors and merge to main" || {
    echo "Merge conflicts detected, resolving..."
    
    # Get list of conflicted files
    git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
        resolve_conflicts "$file"
    done
    
    # Commit the resolution
    git commit -m "Resolve merge conflicts for PR #24979"
}

echo "Successfully merged PR #24979"

# Now handle the second PR
echo "Checking for PR #24978 branch..."
BRANCH_NAME=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/24978" | grep -o '"ref": "[^"]*"' | cut -d'"' -f4)
if [ -n "$BRANCH_NAME" ]; then
    echo "Found branch: $BRANCH_NAME"
    git fetch origin "$BRANCH_NAME:$BRANCH_NAME"
    
    echo "Merging PR #24978..."
    git merge "origin/$BRANCH_NAME" --no-ff -m "Merge PR #24978" || {
        echo "Merge conflicts detected, resolving..."
        
        # Get list of conflicted files
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            resolve_conflicts "$file"
        done
        
        # Commit the resolution
        git commit -m "Resolve merge conflicts for PR #24978"
    }
    
    echo "Successfully merged PR #24978"
fi

echo "All PRs merged successfully!"
echo "Installing dependencies and building..."

# Install dependencies
npm install

# Build the project
npm run build

echo "Build completed successfully!"

# Push changes to main
git push origin main

echo "All changes pushed to main branch!"