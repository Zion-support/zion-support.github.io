#!/bin/bash

# Fix duplicate imports in files
echo "Fixing duplicate imports..."

# Find files with duplicate imports and fix them
find src -name "*.tsx" -o -name "*.jsx" | while read file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Remove duplicate import lines
        awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        # Fix common import path issues
        sed -i 's|from '\''../components/|from '\''@/components/|g' "$file"
        sed -i 's|from '\''../data/|from '\''@/data/|g' "$file"
        sed -i 's|from '\''../utils/|from '\''@/utils/|g' "$file"
        sed -i 's|from '\''../hooks/|from '\''@/hooks/|g' "$file"
        sed -i 's|from '\''../context/|from '\''@/context/|g' "$file"
    fi
done

echo "Duplicate imports fixed!"