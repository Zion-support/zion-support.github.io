#!/bin/bash

# Script to resolve merge conflicts by accepting main branch changes
echo "Resolving merge conflicts by accepting main branch changes..."

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found $(echo "$conflicted_files" | wc -l) conflicted files"

# Resolve conflicts by accepting main branch version
for file in $conflicted_files; do
    echo "Resolving conflict in: $file"
    git checkout --theirs "$file"
    git add "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by accepting main branch changes

- Resolved $(echo "$conflicted_files" | wc -l) conflicted files
- Accepted main branch version for all conflicts
- Ready for merge to main"

echo "Merge conflicts resolved successfully!"