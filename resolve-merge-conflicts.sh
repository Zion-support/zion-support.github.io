#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts by choosing HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No files with merge conflicts found."
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # This removes everything from ======= to >>>>>>> branch-name, keeping only HEAD content
    sed -i '/^=======/,/^>>>>>>> .*/d' "$file"
    
    # Remove the <<<<<<< HEAD marker
    sed -i '/^<<<<<<< HEAD/d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved!"
echo "Backup files created with .backup extension"