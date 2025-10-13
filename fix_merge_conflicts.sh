#!/bin/bash

# Script to fix merge conflicts in the codebase
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep the HEAD version
    # This is a simple approach - for complex conflicts, manual review might be needed
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"