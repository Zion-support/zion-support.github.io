#!/bin/bash

# Find all files with merge conflicts
files=$(find app/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
  echo "Fixing merge conflicts in: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file to resolve merge conflicts
  # Keep everything before the first <<<<<<< HEAD
  # Skip everything between <<<<<<< HEAD and =======
  # Keep everything after ======= until the next <<<<<<< HEAD or end of file
  awk '
  /^<<<<<<< HEAD/ { in_conflict = 1; next }
  /^=======/ { if (in_conflict) { in_conflict = 2; next } }
  /^>>>>>>>/ { if (in_conflict == 2) { in_conflict = 0; next } }
  in_conflict == 0 { print }
  in_conflict == 2 { print }
  ' "$file" > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Merge conflicts resolved!"
