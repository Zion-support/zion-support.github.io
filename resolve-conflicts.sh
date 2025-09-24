#!/bin/bash

echo "Resolving merge conflicts..."

# Get list of conflicted files
git status --porcelain | grep "^UU" | cut -c4- > /tmp/conflicted_files.txt

# Count total conflicts
total_conflicts=$(wc -l < /tmp/conflicted_files.txt)
echo "Total conflicted files: $total_conflicts"

# Resolve conflicts in disabled/backup directories by accepting incoming changes
echo "Resolving conflicts in disabled/backup directories..."
git status --porcelain | grep "^UU" | grep -E "(disabled|backup|temp|\.disabled)" | cut -c4- | while read file; do
    echo "Resolving $file (accepting incoming)"
    git checkout --theirs "$file"
    git add "$file"
done

# Resolve conflicts in src.disabled by accepting incoming changes
echo "Resolving conflicts in src.disabled..."
git status --porcelain | grep "^UU" | grep "src\.disabled" | cut -c4- | while read file; do
    echo "Resolving $file (accepting incoming)"
    git checkout --theirs "$file"
    git add "$file"
done

# For active source files, keep our changes (accept current)
echo "Resolving conflicts in active source files..."
git status --porcelain | grep "^UU" | grep -v -E "(disabled|backup|temp|\.disabled|src\.disabled)" | cut -c4- | while read file; do
    echo "Resolving $file (keeping current)"
    git checkout --ours "$file"
    git add "$file"
done

echo "Conflict resolution completed!"