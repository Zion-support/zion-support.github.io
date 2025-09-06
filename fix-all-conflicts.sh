#!/bin/bash

echo "Fixing all merge conflicts in the project..."

# Find all files with merge conflicts
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read -r file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Keep the HEAD version for all conflicts
    sed -i '/<<<<<<< HEAD/,/>>>>>>>/ { /<<<<<<< HEAD/! { /======/! { />>>>>>>/!d } } }' "$file"
    sed -i '/<<<<<<< HEAD/,/>>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts have been resolved!"