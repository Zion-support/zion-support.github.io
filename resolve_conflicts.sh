#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes (from main)
echo "Resolving merge conflicts by accepting incoming changes..."

# Find all files with merge conflicts
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# Resolve conflicts by accepting incoming changes (from main)
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    git checkout --theirs "$file"
    git add "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by accepting incoming changes from main"

echo "Merge conflicts resolution completed."