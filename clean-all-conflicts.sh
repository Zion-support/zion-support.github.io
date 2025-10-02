#!/bin/bash

echo "=== Cleaning All Merge Conflicts ==="

# Find all files with merge conflicts and clean them
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.css" -o -name "*.md" \) -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Cleaning conflicts in: $file"
    
    # Remove conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]*$/d' "$file"
    
    # Clean up empty lines that might have been left
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "=== Merge Conflict Cleanup Complete ==="