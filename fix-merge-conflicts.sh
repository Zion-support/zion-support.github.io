#!/bin/bash

# Find all files with merge conflicts
find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.html" -o -name "*.css" \) -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
  echo "Fixing merge conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Remove merge conflict markers and keep the HEAD version
  sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /{ /^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d; }' "$file"
  
  # Remove any remaining conflict markers
  sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
  
  echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
