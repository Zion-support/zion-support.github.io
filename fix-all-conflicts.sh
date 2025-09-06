#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove everything from <<<<<<< HEAD to ======= (inclusive)
    # Keep everything after ======= until >>>>>>> 
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    
    # Remove the >>>>>>> markers
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining ======= markers
    sed -i '/^=======$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"