#!/bin/bash

# Find all files with merge conflicts
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> main" "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the main branch version
    # This is a simple approach - keep everything after ======= and before >>>>>>> main
    awk '
    /<<<<<<< HEAD/ { in_head = 1; next }
    /=======/ { in_head = 0; in_main = 1; next }
    />>>>>>> main/ { in_main = 0; next }
    in_main { print }
    !in_head && !in_main { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
  fi
done

echo "Merge conflicts fixed!"
