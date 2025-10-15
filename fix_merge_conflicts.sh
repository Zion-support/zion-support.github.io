#!/bin/bash

# Find all files with merge conflicts
files=$(find app/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
  echo "Fixing merge conflicts in: $file"
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Process the file to resolve conflicts by keeping HEAD version
  awk '
  /^<<<<<<< HEAD/ { in_head = 1; next }
  /^=======/ { in_head = 0; in_other = 1; next }
  /^>>>>>>> / { in_other = 0; next }
  in_head { print }
  !in_head && !in_other { print }
  ' "$file" > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Merge conflicts resolved!"
