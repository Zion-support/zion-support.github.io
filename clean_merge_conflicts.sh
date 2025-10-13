#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find app/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found in app directory"
    exit 0
fi

echo "Cleaning merge conflicts in the following files:"
echo "$files_with_conflicts"

# Clean each file
for file in $files_with_conflicts; do
    echo "Cleaning $file"
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
done

echo "Merge conflicts cleaned successfully"
