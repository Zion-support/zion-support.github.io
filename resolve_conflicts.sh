#!/bin/bash

# Script to resolve merge conflicts by removing files that were deleted in main
echo "Resolving merge conflicts by removing deleted files..."

# Get list of conflicted files
git status --porcelain | grep "^DU\|^UD" | cut -c4- | while read file; do
    echo "Removing conflicted file: $file"
    git rm "$file"
done

# Add all remaining changes
git add .

# Commit the resolution
git commit -m "Resolve merge conflicts by removing deleted files"

echo "Merge conflicts resolved!"