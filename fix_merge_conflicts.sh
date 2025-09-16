#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD")

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file, remove merge conflict markers and keep the HEAD version
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD content
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /c\
    ' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^=======$/d' "$file"
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed in all files"