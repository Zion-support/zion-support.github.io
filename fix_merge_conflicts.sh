#!/bin/bash

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    sed -i '/=======/d' "$file"
  fi
done

echo "Merge conflicts fixed!"