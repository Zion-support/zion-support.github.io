#!/bin/bash

echo "Fixing merge conflicts in all files..."

# Find all files with merge conflict markers and fix them
find src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | while read -r file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep content between HEAD and ======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> main/d' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^[[:space:]]*$/d' "$file"
  fi
done

echo "Merge conflicts fixed!"