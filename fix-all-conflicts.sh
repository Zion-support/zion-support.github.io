#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
    # Remove all merge conflict markers
:fix-all-conflicts.sh
:backup-problematic-files/fix-all-conflicts.sh
:fix-all-conflicts.sh
    sed -i '/^/,/^/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"

main

    
    sed -i '/^=======$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts fixed!"