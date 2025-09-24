#!/bin/bash

# Find all files with merge conflicts
files=$(find pages components -name "*.tsx" -o -name "*.ts" | xargs grep -l "")

for file in $files; do
    echo "Fixing conflicts in $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep HEAD version
    sed -i '/^/,/^/!d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^done

echo "Fixed conflicts in all files"