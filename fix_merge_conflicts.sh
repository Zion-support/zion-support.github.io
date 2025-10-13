#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed in all files"
