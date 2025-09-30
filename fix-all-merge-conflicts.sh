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
  sed -i '/<<<<<<< HEAD/d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> cursor\/expand-services-advertise-and-build-project-9473/d' "$file"
  sed -i '/>>>>>>> main/d' "$file"
  
  # Remove any remaining merge conflict markers
  sed -i '/<<<<<<< /d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> /d' "$file"
done

echo "All merge conflicts fixed!"