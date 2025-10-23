#!/bin/bash

# Find all files with merge conflicts and fix them
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.json" | while read file; do
  if grep -q "" "$file"; then
    echo "Fixing merge conflicts in: $file"
    # Remove merge conflict markers and keep the HEAD version
    sed -i '//,//d' "$file"
    sed -i '/ cursor\/fix-errors-and-merge-to-main-ccae/d' "$file"
    sed -i '/ cursor\/fix-errors-and-merge-to-main-39f6/d' "$file"
  fi
done

echo "All merge conflicts have been fixed!"
