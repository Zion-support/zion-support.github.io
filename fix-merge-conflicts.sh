#!/bin/bash

echo "Fixing merge conflicts in app directory..."

# Find all files with merge conflicts in app directory
find /workspace/app -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    # Remove merge conflict markers
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file"
    # Remove any remaining ======= lines
    sed -i '/^=======$/d' "$file"
  fi
done

echo "Merge conflicts fixed in app directory"