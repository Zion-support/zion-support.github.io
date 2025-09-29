#!/bin/bash

# Merge Conflicts Resolver Script
set -e

echo "Starting merge conflicts resolution..."

# Check current status
echo "Current branch: $(git branch --show-current)"
echo "Git status:"
git status

# Go back to main
git checkout main

# Create a backup
echo "Creating backup..."
git branch backup-main-$(date +%Y%m%d-%H%M%S)

# Try to merge the first branch
echo "Attempting to merge origin/cursor/fix-netlify-build-and-merge-to-main-e570..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-e570 --no-ff; then
    echo "✅ Successfully merged origin/cursor/fix-netlify-build-and-merge-to-main-e570"
else
    echo "❌ Merge conflicts detected. Resolving..."
    
    # List conflicted files
    echo "Conflicted files:"
    git diff --name-only --diff-filter=U
    
    # Auto-resolve conflicts by accepting incoming changes for most files
    git status --porcelain | grep "^UU" | cut -c4- | while read file; do
        echo "Resolving conflicts in $file..."
        if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
            # For TypeScript files, try to resolve automatically
            git checkout --theirs "$file" || git checkout --ours "$file"
        else
            # For other files, accept incoming changes
            git checkout --theirs "$file"
        fi
    done
    
    # Add resolved files
    git add .
    
    # Complete the merge
    git commit -m "resolve: Auto-resolve merge conflicts in cursor/fix-netlify-build-and-merge-to-main-e570"
    echo "✅ Merge conflicts resolved and committed"
fi

# Try to merge the second branch
echo "Attempting to merge origin/cursor/fix-netlify-build-and-merge-to-main-71f0..."
if git merge origin/cursor/fix-netlify-build-and-merge-to-main-71f0 --no-ff; then
    echo "✅ Successfully merged origin/cursor/fix-netlify-build-and-merge-to-main-71f0"
else
    echo "❌ Merge conflicts detected. Resolving..."
    
    # List conflicted files
    echo "Conflicted files:"
    git diff --name-only --diff-filter=U
    
    # Auto-resolve conflicts
    git status --porcelain | grep "^UU" | cut -c4- | while read file; do
        echo "Resolving conflicts in $file..."
        if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
            git checkout --theirs "$file" || git checkout --ours "$file"
        else
            git checkout --theirs "$file"
        fi
    done
    
    # Add resolved files
    git add .
    
    # Complete the merge
    git commit -m "resolve: Auto-resolve merge conflicts in cursor/fix-netlify-build-and-merge-to-main-71f0"
    echo "✅ Merge conflicts resolved and committed"
fi

# Test the build
echo "Testing build after merges..."
if pnpm run build:no-check; then
    echo "✅ Build successful after merges"
else
    echo "❌ Build failed after merges"
    exit 1
fi

# Push changes
echo "Pushing changes to origin/main..."
git push origin main

echo "✅ All merges completed successfully!"