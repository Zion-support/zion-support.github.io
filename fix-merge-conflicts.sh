#!/bin/bash

# Script to fix merge conflicts in the codebase
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "^<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file, remove merge conflict markers and keep the HEAD version
for file in $files_with_conflicts; do
    echo "Fixing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This is a simple approach - keep everything between <<<<<<< HEAD and =======
    # and remove everything between ======= and >>>>>>> 
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>> /d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed $file"
done

echo "Merge conflicts fixed!"