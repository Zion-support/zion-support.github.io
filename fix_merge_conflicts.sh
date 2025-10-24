#!/bin/bash

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the latest version (after =======)
    awk '
    /^<<<<<<< HEAD/ { in_conflict = 1; next }
    /^=======/ { in_conflict = 2; next }
    /^>>>>>>>/ { in_conflict = 0; next }
    in_conflict == 1 { next }
    in_conflict == 2 || in_conflict == 0 { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
  fi
done

echo "Merge conflicts fixed!"
