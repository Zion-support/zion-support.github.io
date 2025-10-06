#!/bin/bash

# Script to merge branches and resolve conflicts
set -e

echo "Starting merge process..."

# Check current status
echo "Current branch: $(git branch --show-current)"
echo "Current status:"
git status

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

# Try to merge main into current branch
echo "Attempting to merge origin/main into current branch..."
if git merge origin/main --no-edit; then
    echo "Merge successful!"
else
    echo "Merge conflicts detected. Resolving..."
    
    # Check for conflicted files
    conflicted_files=$(git diff --name-only --diff-filter=U)
    echo "Conflicted files: $conflicted_files"
    
    # For each conflicted file, try to resolve automatically
    for file in $conflicted_files; do
        echo "Resolving conflicts in $file..."
        
        # Check if it's a component file
        if [[ $file == src/components/* ]]; then
            echo "This is a component file, keeping our version..."
            git checkout --ours "$file"
        else
            echo "This is not a component file, keeping main version..."
            git checkout --theirs "$file"
        fi
        
        git add "$file"
    done
    
    # Complete the merge
    git commit -m "Resolve merge conflicts automatically"
    echo "Merge conflicts resolved!"
fi

# Push the merged changes
echo "Pushing merged changes..."
git push origin HEAD

echo "Merge process completed successfully!"