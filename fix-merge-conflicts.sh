#!/bin/bash

# Find all files with merge conflicts and fix them
find /workspace -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "^<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the HEAD version (first version)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
  fi
done

echo "Merge conflicts fixed!"