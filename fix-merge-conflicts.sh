#!/bin/bash

# Script to fix merge conflict markers in all files
echo "Fixing merge conflict markers..."

# Find all files with merge conflict markers and fix them
find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.md" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
done

echo "Merge conflict markers fixed!"