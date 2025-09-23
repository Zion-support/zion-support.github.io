#!/bin/bash

# Fix all merge conflicts by removing all conflict markers
find pages/ components/ -name "*.tsx" -exec grep -l ">>>>>>>" {} \; | while read file; do
    echo "Fixing merge conflicts in $file"
    
    # Remove all merge conflict markers
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "All merge conflicts fixed!"