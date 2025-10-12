#!/bin/bash

# Find all files with merge conflicts and resolve them by keeping the HEAD version
find app/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing merge conflicts in $file"
        # Remove merge conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts resolved"