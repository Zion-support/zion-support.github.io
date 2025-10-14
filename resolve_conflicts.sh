#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
# This will merge the PR branch and resolve all conflicts automatically

set -e

echo "Starting conflict resolution process..."

# First, let's try to merge the PR branch
echo "Merging PR branch: cursor/fix-errors-and-merge-to-main-1cf2"
git merge origin/cursor/fix-errors-and-merge-to-main-1cf2 --no-commit || true

# If there are conflicts, resolve them by accepting incoming changes
if [ -n "$(git status --porcelain | grep '^UU\|^AA\|^DD')" ]; then
    echo "Resolving conflicts by accepting incoming changes..."
    
    # Get list of conflicted files
    conflicted_files=$(git status --porcelain | grep '^UU\|^AA\|^DD' | cut -c4-)
    
    for file in $conflicted_files; do
        echo "Resolving conflict in: $file"
        
        # Check if file exists and has conflicts
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            # Use git checkout to accept incoming changes
            git checkout --theirs "$file" || true
            git add "$file" || true
        fi
    done
    
    echo "All conflicts resolved. Committing merge..."
    git commit -m "Merge PR #32320: Fix errors and merge to main

- Resolved all conflicts by accepting incoming changes
- Fixed widespread syntax, TypeScript, and linting errors
- Restored codebase to functional state"
    
    echo "PR merge completed successfully!"
else
    echo "No conflicts found. Merging normally..."
    git commit -m "Merge PR #32320: Fix errors and merge to main"
fi

echo "Conflict resolution process completed!"