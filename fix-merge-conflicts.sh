#!/bin/bash

echo "Fixing merge conflict markers..."

# Find and fix merge conflict markers in all relevant files
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" \) -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]\+$/d' "$file"
done

echo "Merge conflict markers fixed!"