#!/bin/bash

# Script to resolve all merge conflicts by accepting our version (main branch)
echo "Resolving merge conflicts by accepting our version..."

# Get list of conflicted files
git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- > conflicted_files.txt

echo "Found $(wc -l < conflicted_files.txt) conflicted files"

# For each conflicted file, accept our version
while IFS= read -r file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        # Accept our version (main branch)
        git checkout --ours "$file"
        git add "$file"
    fi
done < conflicted_files.txt

# Clean up
rm conflicted_files.txt

echo "All conflicts resolved!"