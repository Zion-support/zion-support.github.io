#!/bin/bash
echo "Fixing all merge conflicts..."
# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q ", keep the HEAD version
    sed -i '/^/!d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # Remove any remaining conflict markers
    sed -i '/^    sed -i '/^/d' "$file"
    sed -i '/^    
    echo "Fixed: $file"
  fi
done
echo "All merge conflicts fixed!"
