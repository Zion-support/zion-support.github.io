#!/bin/bash

# Find all files with merge conflicts and fix them by keeping HEAD version
# Find all files with merge conflicts
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q ")
    awk '
  if grep -q "" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to remove merge conflict markers and keep HEAD version
    awk '
    in_head || (!in_head && !in_other) { print }
    # Process the file to resolve conflicts by choosing the newer version (after )
    awk '
    /^/ { in_old=1; next }
    /^/ { in_old=0; in_new=1; next }
  if grep -q ")
    awk '
  if grep -q "" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts by choosing the newer version (after )
    awk '
    /^/ { in_old=1; next }
    in_old { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
done

echo "Merge conflicts fixed!"
  fi
done

echo "Merge conflicts resolved!"
