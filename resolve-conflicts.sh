#!/bin/bash

# Script to resolve merge conflicts by keeping HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files_with_conflicts; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout to get the HEAD version (current main branch)
    git checkout --ours "$file"
    
    # If the file still has conflicts, manually clean it up
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Manual cleanup needed for: $file"
        # Remove conflict markers and keep only the HEAD version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts resolved!"