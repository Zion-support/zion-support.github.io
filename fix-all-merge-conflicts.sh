#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Remove all merge conflict markers from all files
find . -name "*.tsx" -o -name "*.js" -o -name "*.json" | while read file; do
    if grep -q "" "$file"; then
        echo "Fixing merge conflicts in $file"
        
        # Remove all merge conflict markers and keep the content between  and         sed -i '/^/,/^/d' "$file"
        
        # Clean up any remaining empty lines
        sed -i '/^$/N;/^\n$/d' "$file"
    fi
done

echo "All merge conflicts fixed!"