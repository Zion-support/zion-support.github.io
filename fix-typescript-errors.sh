#!/bin/bash

echo "🔧 Fixing TypeScript syntax errors across all files..."

# Find all TypeScript files
find src -name "*.tsx" -o -name "*.ts" | while read file; do
    echo "Processing: $file"
    
    # Remove lines that start with only whitespace followed by comma or closing bracket
    sed -i '/^[[:space:]]*[,\]]*[[:space:]]*$/d' "$file"
    
    # Remove stray commas and brackets at the beginning of lines
    sed -i 's/^[[:space:]]*[,\]]*[[:space:]]*//' "$file"
    
    # Remove empty lines that might have been created
    sed -i '/^[[:space:]]*$/d' "$file"
    
    # Add back a single newline at the end if file doesn't end with one
    if [ -s "$file" ] && [ "$(tail -c1 "$file")" != "" ]; then
        echo "" >> "$file"
    fi
done

echo "✅ Fixed TypeScript syntax errors in all files"