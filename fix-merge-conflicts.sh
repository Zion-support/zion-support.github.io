#!/bin/bash

# Script to fix merge conflicts by choosing the HEAD version
# This is a quick fix to get the build working

echo "Fixing merge conflicts in TypeScript files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/src -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> ")

for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # This is a simple approach - remove everything between ======= and >>>>>>> 
    # and remove the <<<<<<< HEAD line
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed. Testing build..."