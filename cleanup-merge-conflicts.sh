#!/bin/bash

# Find all files with merge conflicts and clean them up
find /workspace -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Cleaning up merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the content after the last =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
done

echo "Merge conflicts cleaned up!"