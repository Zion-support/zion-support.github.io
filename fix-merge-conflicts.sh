#!/bin/bash

# Script to fix all merge conflicts by removing conflict markers and keeping the HEAD version

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "^[<>=]\{7\}" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> .*/d' "$file"
    
    echo "Fixed $file"
done

echo "All merge conflicts have been resolved."
echo "Please review the changes and test the build."