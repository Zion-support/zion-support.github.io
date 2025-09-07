#!/bin/bash

# Find all files with merge conflicts and clean them
find app/services -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; | while read file; do
  echo "Cleaning merge conflicts in $file..."
  
  # Remove merge conflict markers and keep only the HEAD version
  sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
  sed -i '/^>>>>>>> [a-f0-9]\+$/d' "$file"
  
  # Remove any remaining empty lines that might be left
  sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"
done

echo "All merge conflicts cleaned!"
