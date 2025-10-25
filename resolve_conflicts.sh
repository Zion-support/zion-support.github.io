#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
# This will merge the branch and resolve conflicts automatically

echo "Starting merge conflict resolution..."

# Merge the branch
git merge origin/cursor/fix-errors-and-merge-to-main-8aeb --no-commit

# Check if there are conflicts
if [ $? -ne 0 ]; then
    echo "Merge conflicts detected. Resolving automatically..."
    
    # Get list of conflicted files
    conflicted_files=$(git diff --name-only --diff-filter=U)
    
    echo "Conflicted files:"
    echo "$conflicted_files"
    
    # For each conflicted file, accept the incoming version (theirs)
    for file in $conflicted_files; do
        echo "Resolving conflicts in $file..."
        git checkout --theirs "$file"
        git add "$file"
    done
    
    # Handle deleted files - remove them if they were deleted in the incoming branch
    deleted_files=$(git diff --name-only --diff-filter=D)
    for file in $deleted_files; do
        echo "Removing deleted file: $file"
        git rm "$file"
    done
    
    echo "All conflicts resolved. Committing merge..."
    git commit -m "Merge branch 'cursor/fix-errors-and-merge-to-main-8aeb' with automatic conflict resolution

- Resolved merge conflicts by accepting incoming changes
- Applied fixes from the branch to main
- Removed deleted files as per branch changes"
    
    echo "Merge completed successfully!"
else
    echo "No conflicts detected. Merge completed successfully!"
fi