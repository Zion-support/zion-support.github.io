#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
  echo "Fixing merge conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Use sed to resolve conflicts by choosing HEAD version
  sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>>/d' "$file"
  
  # Remove any remaining conflict markers
  sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
  
  echo "Fixed: $file"
done

echo "Merge conflicts resolved!"
