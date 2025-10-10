#!/bin/bash

# Script to resolve all merge conflicts by accepting our changes
echo "Resolving all merge conflicts..."

# Get all conflicted files
git status --porcelain | grep "^U" | cut -c4- > /tmp/conflicted_files.txt

# Count conflicts
conflict_count=$(wc -l < /tmp/conflicted_files.txt)
echo "Found $conflict_count files with merge conflicts"

# Resolve conflicts by accepting our changes
while IFS= read -r file; do
    echo "Resolving conflict in: $file"
    git checkout --ours "$file"
    git add "$file"
done < /tmp/conflicted_files.txt

# Complete the merge
git commit -m "Resolve merge conflicts: Accept JSX syntax fixes from feature branch"

echo "All merge conflicts resolved successfully!"