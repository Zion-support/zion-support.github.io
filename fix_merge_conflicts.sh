#!/bin/bash

# Find all files with merge conflicts
find /workspace/app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i 's/<<<<<<< HEAD//' "$file"
    sed -i 's/=======//' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
