#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" /workspace/app/ /workspace/src/ | cut -d: -f1 | sort -u)

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts have been resolved!"