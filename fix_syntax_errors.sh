#!/bin/bash

echo "Fixing syntax errors in all page files..."

# Find all page.tsx files and fix common syntax errors
find /workspace/app -name "page.tsx" -type f | while read file; do
    echo "Checking: $file"
    
    # Fix extra closing braces
    sed -i 's/^  };$/};/g' "$file"
    
    # Fix function declarations to use const with React.FC
    if grep -q "export default function" "$file"; then
        component_name=$(basename $(dirname "$file") | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
        sed -i "s/export default function [A-Za-z]*()/const ${component_name}Page: React.FC = ()/g" "$file"
    fi
    
    # Ensure proper closing
    if ! tail -3 "$file" | grep -q "export default"; then
        component_name=$(basename $(dirname "$file") | sed 's/-/ /g' | sed 's/\b\w/\U&/g' | sed 's/ //g')
        echo "" >> "$file"
        echo "export default ${component_name}Page;" >> "$file"
    fi
done

echo "Syntax errors fix completed!"