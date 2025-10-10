#!/bin/bash

# Script to fix remaining syntax errors in TSX files

echo "Fixing remaining syntax errors..."

# Find all TSX files and fix common patterns
find app -name "*.tsx" -type f | while read file; do
  if grep -q "</ul>);" "$file" || grep -q "</div>);" "$file" || grep -q "));" "$file"; then
    echo "Fixing syntax errors in: $file"
    
    # Fix specific patterns
    sed -i 's|</ul>);|</ul>|g' "$file"
    sed -i 's|</div>);|</div>|g' "$file"
    sed -i 's|));|))|g' "$file"
    sed -i 's|});|})|g' "$file"
  fi
done

echo "Remaining syntax errors fixed!"