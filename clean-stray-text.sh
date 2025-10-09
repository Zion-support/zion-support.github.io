#!/bin/bash

# Find all files with cursor/ text
files=$(find /workspace/app -name "*.tsx" -exec grep -l "cursor/" {} \;)

for file in $files; do
  echo "Cleaning $file"
  
  # Remove lines containing cursor/
  sed -i '/cursor\//d' "$file"
  
  # Remove lines containing cursor
  sed -i '/cursor/d' "$file"
  
  # Remove empty lines at the end
  sed -i -e :a -e '/^\s*$/N;ba' -e 's/\n*$//' "$file"
done

echo "Cleaned all stray text"
