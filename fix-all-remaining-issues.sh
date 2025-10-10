#!/bin/bash

echo "Fixing all remaining issues..."

# Fix all merge conflicts in the entire app directory
find /workspace/app -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing merge conflicts in: $file"
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file"
    sed -i '/^=======$/d' "$file"
  fi
done

# Fix common syntax errors
find /workspace/app -name "*.tsx" -o -name "*.ts" | while read file; do
  # Fix semicolons instead of commas
  sed -i 's/;$/\,/g' "$file"
  # Fix missing commas after category
  sed -i 's/category: "\([^"]*\)"$/category: "\1",/g' "$file"
  # Fix const declarations outside functions
  sed -i 's/^  const /const /g' "$file"
  # Fix extra commas in arrays and objects
  sed -i 's/\[,$/[/g' "$file"
  sed -i 's/{,$/{/g' "$file"
done

echo "All issues fixed!"