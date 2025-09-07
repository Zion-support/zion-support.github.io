#!/bin/bash

# Find all files with merge conflicts
find ./app -name "*.tsx" -o -name "*.ts" | while read file; do
  if grep -q ")
    awk '
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