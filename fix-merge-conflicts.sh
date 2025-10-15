#!/bin/bash

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
  if grep -q "/!d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
ursor/comprehensive-app-audit-and-update-8a56
  fi
done

echo "Merge conflicts fixed!"
