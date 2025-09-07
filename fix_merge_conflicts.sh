#!/bin/bash

# Find all files with merge conflicts
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
<<<<<<< HEAD
  if grep -q "" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts by choosing the newer version (after )
    awk '
    /^/ { in_old=1; next }
=======
  if grep -q ")
    awk '
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    /^/ { in_old=0; in_new=1; next }
    /^>>>>>>>/ { in_new=0; next }
    in_old { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
  fi
done

echo "Merge conflicts resolved!"