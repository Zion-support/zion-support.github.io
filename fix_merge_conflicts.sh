#!/bin/bash

# Find all files with merge conflicts and clean them up
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the newer version (after =======)
    awk '
    /<<<<<<< HEAD/ { in_old = 1; next }
    /=======/ { in_old = 0; in_new = 1; next }
    />>>>>>> / { in_new = 0; next }
    in_old { next }
    { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
  fi
done

echo "Merge conflicts fixed!"