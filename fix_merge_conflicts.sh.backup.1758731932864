#!/bin/bash

# Script to fix merge conflicts by choosing HEAD version
echo "Fixing merge conflicts by choosing HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

for file in $files_with_conflicts; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to fix merge conflicts by choosing HEAD version
    # This removes everything from ======= to >>>>>>> and keeps only HEAD content
    sed -i '/=======/,/>>>>>>>/d' "$file"
    
    # Remove the <<<<<<< HEAD line
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/^>>>>>>>/d' "$file"
    sed -i '/^=======$/d' "$file"
done

echo "Merge conflicts fixed!"