#!/bin/bash

# Script to fix merge conflicts in all files
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/fix-errors-and-merge-to-main-5bf7/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/fix-errors-and-merge-to-main-5bf7/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed in all files!"