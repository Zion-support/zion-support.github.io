#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"