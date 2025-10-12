#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve merge conflicts by keeping HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/,/>>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>>/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts resolved!"
