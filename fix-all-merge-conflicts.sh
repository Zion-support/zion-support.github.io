#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find and fix all merge conflict markers
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  -not -path "./.git/*" \
  | while read -r file; do
  echo "Processing: $file"
  
  # Remove merge conflict markers
  sed -i '//d' "$file"
  sed -i '/
  sed -i '/
  
  # Remove any remaining merge conflict markers
  sed -i '/
  sed -i '//d' "$file"
  sed -i '/
done

echo "All merge conflicts fixed!"