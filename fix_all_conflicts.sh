#!/bin/bash

echo "Fixing all merge conflict markers..."

# Find and fix all files with merge conflict markers
find /workspace/app -name "*.tsx" -exec grep -l "cursor/" {} \; | while read file; do
  echo "Fixing $file"
  
  # Remove all merge conflict markers
  sed -i '/<<<<<<< HEAD/d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> cursor/d' "$file"
  sed -i '/cursor\/.*/d' "$file"
  
  # Remove any remaining conflict markers
  sed -i '/^[[:space:]]*cursor[[:space:]]*$/d' "$file"
done

echo "Fixed all merge conflict markers"
