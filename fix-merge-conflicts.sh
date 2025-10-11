#!/bin/bash

# Find all files with merge conflicts and resolve them by keeping the HEAD version
find app/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "" "$file"; then
        echo "Fixing merge conflicts in $file"
        # Remove merge conflict markers and keep HEAD version
        sed -i '/^/,/^/d' "$file"
        sed -i '/^    fi
done

echo "Merge conflicts resolved"