#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
    echo "Cleaning merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Cleaned: $file"
done

echo "Merge conflict cleanup completed!"
