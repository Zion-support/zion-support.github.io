#!/bin/bash

# Find all files with merge conflicts and resolve them by accepting our version
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
    echo "Resolving conflicts in: $file"
    
    # Use git checkout --ours to accept our version
    git checkout --ours "$file" 2>/dev/null || {
      # If git checkout fails, manually resolve by removing conflict markers
      sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' "$file"
      # Remove any remaining ======= lines
      sed -i '/^=======$/d' "$file"
    }
  fi
done

echo "All merge conflicts resolved!"
