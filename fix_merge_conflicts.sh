#!/bin/bash

# Script to fix merge conflicts in source files
echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts in src directory
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing conflicts in: $file"
    
    # Remove merge conflict markers and keep the more complete version
    # This is a simple approach - keep everything between ======= and >>>>>>> 
    # and remove the HEAD section
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i 's/>>>>>>>.*//' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^[[:space:]]*$/d' "$file"
  fi
done

echo "Merge conflicts fixed!"