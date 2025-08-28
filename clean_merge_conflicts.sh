#!/bin/bash

echo "Cleaning merge conflicts from source files..."

# Find all TypeScript/TSX files with merge conflicts
conflict_files=$(find src -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "No files with merge conflicts found."
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$conflict_files"

# Clean each file
for file in $conflict_files; do
    echo "Cleaning $file..."
    
    # Remove merge conflict sections (HEAD to ======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    
    # Remove any remaining >>>>>>> markers
    sed -i '/^>>>>>>>/d' "$file"
    
    # Remove any empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
done

echo "Merge conflicts cleaned from all files."
echo "Files cleaned:"
echo "$conflict_files"