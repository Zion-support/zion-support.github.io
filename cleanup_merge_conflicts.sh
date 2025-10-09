#!/bin/bash

# Find all files with merge conflicts and clean them up
find /workspace/app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Cleaning up merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/=======/,/>>>>>>> cursor/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    # Clean up any remaining merge conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> cursor/d' "$file"
    
    echo "Cleaned: $file"
done

echo "Merge conflict cleanup completed!"
