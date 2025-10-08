#!/bin/bash

# Script to resolve merge conflicts by accepting incoming changes
echo "Resolving merge conflicts by accepting incoming changes..."

# Get list of conflicted files
conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')

for file in $conflicted_files; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        # Use git checkout to accept the incoming version (theirs)
        git checkout --theirs "$file"
        git add "$file"
    fi
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Merge: Resolve conflicts by accepting incoming changes from cursor/fix-errors-and-merge-to-main-489f"