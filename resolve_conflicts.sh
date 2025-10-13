#!/bin/bash

# Find all files with merge conflicts in the app directory
files_with_conflicts=$(find app/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found in app directory"
    exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Resolve conflicts by keeping HEAD version
for file in $files_with_conflicts; do
    echo "Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove conflict markers and keep HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "All merge conflicts resolved!"
