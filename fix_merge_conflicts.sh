#!/bin/bash

# Script to fix merge conflicts by removing conflict markers and keeping the HEAD version

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -l "^<<<<<<<\|^=======\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This is a simplified approach - in practice you might want more sophisticated conflict resolution
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"