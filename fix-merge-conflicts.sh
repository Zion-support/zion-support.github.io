#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Fix merge conflicts in each file
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the content between HEAD and the first =======
    sed -i '/<<<<<<< HEAD/,/=======/{
        /<<<<<<< HEAD/d
        /=======/d
    }' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/>>>>>>> cursor/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
done

echo "Merge conflicts fixed in all files"