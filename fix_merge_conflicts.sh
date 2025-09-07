#!/bin/bash

<<<<<<< HEAD
# Find all files with merge conflicts and fix them by keeping HEAD version
find app/services -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
=======
# Find all files with merge conflicts
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q ")
    awk '
  if grep -q "" "$file"; then
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
<<<<<<< HEAD
    # Process the file to remove merge conflict markers and keep HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head || (!in_head && !in_other) { print }
=======
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
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
<<<<<<< HEAD
done

echo "Merge conflicts fixed!"
=======
  fi
done

echo "Merge conflicts resolved!"
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
