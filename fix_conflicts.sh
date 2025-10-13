#!/bin/bash

# Find all files with Git conflict markers
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
  echo "Fixing conflicts in: $file"
  
  # Remove all Git conflict markers
  sed -i '/^<<<<<<< HEAD$/d' "$file"
  sed -i '/^=======$/d' "$file"
  sed -i '/^>>>>>>> cursor/d' "$file"
  
  # Remove empty lines that might be left behind
  sed -i '/^[[:space:]]*$/d' "$file"
done

echo "Fixed conflicts in all files"
