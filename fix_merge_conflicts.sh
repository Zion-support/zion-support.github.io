#!/bin/bash

# Script to fix merge conflicts by removing conflict markers and keeping the HEAD version
# This script will process all TypeScript and JavaScript files with merge conflicts

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts (excluding node_modules)
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "^<<<<<<<\|^=======\|^>>>>>>>" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # This removes everything from <<<<<<< HEAD to ======= and from ======= to >>>>>>> branch
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<<\|^=======\|^>>>>>>>/d' "$file"
    
    # Clean up any duplicate empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflict resolution completed."
echo "Backup files created with .backup extension"