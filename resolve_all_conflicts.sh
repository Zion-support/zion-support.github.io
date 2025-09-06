#!/bin/bash

# Script to resolve all merge conflicts by using the incoming changes
echo "Resolving all merge conflicts..."

# Get all files with conflicts
conflict_files=$(git status --porcelain | grep "^UU" | cut -c4-)

if [ -z "$conflict_files" ]; then
    echo "No conflicts found."
    exit 0
fi

echo "Found conflicts in the following files:"
echo "$conflict_files"

# For each file with conflicts, use the incoming version
echo "$conflict_files" | while read -r file; do
    if [ -n "$file" ]; then
        echo "Resolving conflicts in $file..."
        git checkout --theirs "$file"
        git add "$file"
    fi
done

echo "All conflicts resolved!"