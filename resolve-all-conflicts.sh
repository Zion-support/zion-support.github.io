#!/bin/bash

echo "Starting to resolve all merge conflicts..."

# Find all files with merge conflict markers and resolve them
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.cjs" \) \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  -not -path "./.git/*" \
  -exec grep -l "<<<<<<< HEAD" {} + | while read -r file; do
  echo "Resolving conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Keep only the content from the 'main' branch (after =======)
  # This removes everything from <<<<<<< HEAD to =======
  sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
  
  # Remove the >>>>>>> branch-name line
  sed -i '/>>>>>>> /d' "$file"
  
  # Remove any remaining conflict markers
  sed -i '/^=======$/d' "$file"
  
  echo "Resolved: $file"
done

echo "All merge conflicts resolved!"
echo "Files with conflicts have been backed up with .backup extension"