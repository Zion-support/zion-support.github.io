#!/bin/bash

# Fix merge conflicts by removing conflict markers and keeping HEAD content
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in $file"
    # Remove conflict markers and keep HEAD content
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i 's/<<<<<<< HEAD//' "$file"
    sed -i '/>>>>>>> origin\/main/d' "$file"
  fi
done

echo "Merge conflicts fixed!"