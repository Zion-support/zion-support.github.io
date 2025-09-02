#!/bin/bash

echo "Fixing merge conflicts in all source files..."

# Find all files with merge conflicts
files_with_conflicts=$(find src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"
echo ""

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the better code
    # Remove everything between <<<<<<< HEAD and =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    
    # Remove >>>>>>> main and any remaining conflict markers
    sed -i '/>>>>>>> main/d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    
    # Remove empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "Fixed: $file"
done

echo ""
echo "All merge conflicts have been fixed!"
echo "Backup files have been created with .backup extension"