#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" /workspace --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This removes everything from <<<<<<< HEAD to ======= and from ======= to >>>>>>> branch-name
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/enhance-and-expand-ziontechgroup-com-services-and-site-fb16/d' "$file"
    sed -i '/>>>>>>> cursor\/fix-errors-and-merge-to-main-b66c/d' "$file"
    
    # Clean up any remaining merge conflict markers
    sed -i '/<<<<<<< /d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Remove any lines that are just semicolons or empty lines with semicolons
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
