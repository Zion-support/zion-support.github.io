#!/bin/bash

# Script to automatically resolve merge conflicts by choosing the newer version
# This script removes merge conflict markers and keeps the content after =======

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.json" -o -name "*.css" -o -name "*.md" | grep -v node_modules | grep -v .git | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in $(echo "$files_with_conflicts" | wc -l) files"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by keeping the newer version (after =======)
    # This removes everything from <<<<<<< HEAD to ======= and the >>>>>>> line
    sed -i '/<<<<<<< HEAD/,/=======/d; />>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======$/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflict resolution completed."
echo "Backup files created with .backup extension"