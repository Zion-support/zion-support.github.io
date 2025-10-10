#!/bin/bash

# Script to fix common merge conflict patterns

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/=======/,/>>>>>>> cursor/d' "$file"
    
    # Clean up any remaining merge conflict markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
  fi
done

echo "Merge conflicts fixed!"