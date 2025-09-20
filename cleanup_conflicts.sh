#!/bin/bash

# Clean up merge conflict markers
echo "Cleaning up merge conflict markers..."

# Find all files with conflict markers and clean them
find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        echo "Cleaning $file..."
        # Remove conflict markers and keep only the HEAD version (first part)
        sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d; />>>>>>>/d' "$file"
        # Clean up any remaining markers
        sed -i '/<<<<<<< HEAD/d; /=======/d; />>>>>>>/d' "$file"
    fi
done

echo "Cleanup complete!"