#!/bin/bash

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======/,/^>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"