#!/bin/bash

# Script to automatically fix merge conflicts
echo "🔧 Fixing merge conflicts in all files..."

# Find all files with merge conflict markers
CONFLICTED_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)

echo "Found conflicted files: $CONFLICTED_FILES"

for file in $CONFLICTED_FILES; do
    echo "🔧 Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Remove conflict markers and keep the HEAD version (more comprehensive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Fixed conflicts in: $file"
done

echo "🎉 All merge conflicts fixed!"