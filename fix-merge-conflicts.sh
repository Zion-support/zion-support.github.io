#!/bin/bash

echo "Fixing merge conflicts in all files..."

# Find all files with merge conflict markers
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing $file..."
    
    # Remove conflict markers and keep the content after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "Fixed $file"
done

echo "All merge conflicts fixed!"