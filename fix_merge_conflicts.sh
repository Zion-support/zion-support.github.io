#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace/app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the simpler version
    # This removes everything between <<<<<<< HEAD and =======, and everything between ======= and >>>>>>> cursor/...
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\//d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> cursor\//d' "$file"
    
    # Clean up any empty lines that might be left
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "Merge conflicts fixed in all files"
