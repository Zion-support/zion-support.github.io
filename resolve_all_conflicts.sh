#!/bin/bash

# Script to resolve all merge conflicts by removing conflict markers
echo "Resolving merge conflicts in all files..."

# Find all files with merge conflicts and resolve them
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        echo "Resolving conflicts in: $file"
        # Create backup
        cp "$file" "$file.backup"
        # Remove conflict markers and keep HEAD version
        sed '/<<<<<<< HEAD/,/>>>>>>> cursor/d' "$file" > "$file.tmp"
        mv "$file.tmp" "$file"
    fi
done

echo "Merge conflicts resolved!"