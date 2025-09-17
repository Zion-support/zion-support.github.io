#!/bin/bash

echo "Cleaning up merge conflict markers..."

# Find all files with merge conflict markers
files_with_conflicts=$(grep -l "<<<<<<< HEAD" . -r --exclude-dir=node_modules --exclude-dir=.git --exclude="*.backup*" --exclude="*.log" 2>/dev/null | head -20)

for file in $files_with_conflicts; do
    echo "Cleaning $file..."
    
    # For each file, remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
done

echo "Cleanup complete!"