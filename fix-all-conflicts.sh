#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "
    echo "Fixing conflicts in: $file"
    
    # Remove all merge conflict markers

    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"


    
    # Remove everything from 
    sed -i '/^
    
    # Remove any remaining  markers
    sed -i '/^$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"