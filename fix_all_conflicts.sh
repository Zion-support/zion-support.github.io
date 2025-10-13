#!/bin/bash

echo "Fixing all merge conflicts in the project..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>>" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
  echo "No merge conflicts found."
  exit 0
fi

echo "Found merge conflicts in the following files:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
  echo "Fixing conflicts in: $file"
  
  # Create a backup
  cp "$file" "$file.backup"
  
  # Remove merge conflict markers and keep the HEAD version
  sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
  sed -i '/<<<<<<< HEAD/d' "$file"
  sed -i '/=======/d' "$file"
  sed -i '/>>>>>>> /d' "$file"
  sed -i '/^=======/d' "$file"
  sed -i '/^>>>>>>> /d' "$file"
  
  # Check if the file is now empty or corrupted
  if [ ! -s "$file" ] || grep -q "<<<<<<< HEAD\|=======\|>>>>>>>" "$file"; then
    echo "File $file is corrupted, restoring from backup and removing it"
    mv "$file.backup" "$file"
    rm "$file"
  else
    echo "Successfully fixed: $file"
    rm "$file.backup"
  fi
done

echo "Merge conflict resolution completed."
