#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
  echo "Fixing merge conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Remove merge conflict markers and keep the HEAD version
  sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
  sed -i '/^>>>>>>> cursor\/.*$/d' "$file"
  
  # Clean up any remaining merge conflict markers
  sed -i '/^<<<<<<< HEAD$/d' "$file"
  sed -i '/^=======$/d' "$file"
  sed -i '/^>>>>>>> cursor\/.*$/d' "$file"
done

echo "Merge conflicts fixed in all files"
