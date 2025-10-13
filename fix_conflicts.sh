#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app/components -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>>" {} \;)

for file in $files_with_conflicts; do
  echo "Fixing conflicts in: $file"
  
  # Remove merge conflict markers and keep the HEAD version
  sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
  sed -i '/<<<<<<< HEAD/d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> /d' "$file"
  sed -i '/^=======/d' "$file"
  sed -i '/^>>>>>>> /d' "$file"
done

echo "Fixed conflicts in all files"
