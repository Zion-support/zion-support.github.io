#!/bin/bash

# Script to fix common syntax errors in TSX files

echo "Fixing syntax errors..."

# Find all TSX files with syntax errors
find app -name "*.tsx" -type f | while read file; do
  if grep -q "});" "$file" || grep -q "));" "$file"; then
    echo "Fixing syntax errors in: $file"
    
    # Fix common patterns
    sed -i 's/});/})/g' "$file"
    sed -i 's/));/))/g' "$file"
    sed -i 's/});/})/g' "$file"
    sed -i 's/));/))/g' "$file"
    
    # Fix specific patterns
    sed -i 's/                      ));/                      ))/g' "$file"
    sed -i 's/                    </ul>);/                    <\/ul>/g' "$file"
    sed -i 's/                </div>/                <\/div>/g' "$file"
    sed -i 's/              ));/              ))/g' "$file"
  fi
done

echo "Syntax errors fixed!"