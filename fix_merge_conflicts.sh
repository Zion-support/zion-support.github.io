#!/bin/bash

# Fix merge conflicts by removing conflict markers and keeping the latest version
find /workspace/app -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "^<<<<<<<\|^=======\|^>>>>>>>" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the latest version (after =======)
    sed -i '/^<<<<<<<.*/,/^=======/d' "$file"
    sed -i '/^>>>>>>>.*/d' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
  fi
done

echo "Fixed merge conflicts in all files"