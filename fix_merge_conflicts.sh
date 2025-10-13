#!/bin/bash

# Find all files with merge conflicts
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
    echo "Fixing merge conflicts in: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"
