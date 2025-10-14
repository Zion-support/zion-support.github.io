#!/bin/bash

# Resolve merge conflicts by choosing the latest version (HEAD)
echo "Resolving merge conflicts by choosing the latest version..."

# Find all files with merge conflicts
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# Resolve conflicts by choosing the latest version (HEAD)
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    git checkout --theirs "$file"
    git add "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by choosing latest version"

echo "Merge conflicts resolved successfully!"