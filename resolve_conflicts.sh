#!/bin/bash

echo "Resolving merge conflicts automatically..."

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# Resolve conflicts by choosing incoming changes (theirs)
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Check if file exists
    if [ -f "$file" ]; then
        # Use git checkout to accept incoming changes
        git checkout --theirs "$file"
        git add "$file"
        echo "Resolved: $file"
    else
        echo "File not found: $file"
    fi
done

echo "All conflicts resolved. Adding all changes..."
git add .

echo "Merge conflicts resolution completed."