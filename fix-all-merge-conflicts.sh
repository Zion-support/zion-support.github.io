#!/bin/bash

echo "Fixing all remaining merge conflicts..."

<<<<<<< HEAD
# Remove all merge conflict markers from all files
find . -name "*.tsx" -o -name "*.js" -o -name "*.json" | while read file; do
    if grep -q "" "$file"; then
        echo "Fixing merge conflicts in $file"
        
        # Remove all merge conflict markers and keep the content between  and         sed -i '/^/,/^/d' "$file"
        sed -i '/^>>>>>>>/d' "$file"
        
        # Clean up any remaining empty lines
        sed -i '/^$/N;/^\n$/d' "$file"
    fi
=======
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
>>>>>>> pr-11914
done

echo "All merge conflicts fixed!"