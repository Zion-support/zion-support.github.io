#!/bin/bash

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -exec grep -l ">>>>>>> cursor" {} \; | while read file; do
  echo "Fixing $file"
  # Remove all merge conflict markers
  sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
  sed -i '/^>>>>>>> cursor/d' "$file"
  sed -i '/^=======/d' "$file"
done

echo "All merge conflicts fixed"