#!/bin/bash

# Script to automatically resolve merge conflicts by choosing HEAD version
echo "Fixing merge conflicts by choosing HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -l "^<<<<<<< HEAD" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    sed -i 's/^<<<<<<< HEAD$//' "$file"
    sed -i 's/^=======$//' "$file"
    sed -i 's/^>>>>>>>.*$//' "$file"
    
    # Clean up empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts resolved!"
echo "Files processed: $(echo "$files_with_conflicts" | wc -l)"
