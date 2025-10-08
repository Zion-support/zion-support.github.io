#!/bin/bash

# Script to fix merge conflicts by choosing HEAD version
# This will remove all merge conflict markers and keep the HEAD version

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -l "^<<<<<<<\|^=======\|^>>>>>>>" -r . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null | grep -v node_modules | grep -v ".git")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # This removes everything from <<<<<<< to ======= (inclusive) and from ======= to >>>>>>> (inclusive)
    sed -i '/^<<<<<<< HEAD/,/^=======/d; /^=======/,/^>>>>>>>/d' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"