#!/bin/bash

# Find all files with merge conflicts
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep only the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/=======/,/>>>>>>>/d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>>/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "Merge conflict fixing completed!"
