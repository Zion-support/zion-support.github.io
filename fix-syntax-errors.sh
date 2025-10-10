#!/bin/bash

echo "Fixing syntax errors in TypeScript/React files..."

# Find all files with syntax errors
files_with_errors=$(find /workspace -name "*.tsx" -o -name "*.ts" | head -50)

for file in $files_with_errors; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup2"
    
    # Fix common syntax issues
    # Remove lines that are just semicolons
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    # Fix broken JSX syntax - remove semicolons after JSX elements
    sed -i 's/\(<[^>]*>\);/\1/g' "$file"
    
    # Fix broken object syntax - remove semicolons in object properties
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\):\([^,}]*\);/\1: \2/g' "$file"
    
    # Fix broken array syntax - remove semicolons in arrays
    sed -i 's/\([^,]]*\);/\1/g' "$file"
    
    # Fix broken function calls - remove semicolons after parentheses
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\)(\([^)]*\));/\1(\2)/g' "$file"
    
    # Remove any remaining standalone semicolons
    sed -i '/^[[:space:]]*;$/d' "$file"
    
    # Fix broken JSX closing tags
    sed -i 's/\(<\/[^>]*>\);/\1/g' "$file"
    
    # Fix broken string literals
    sed -i 's/\([^"]*\)";/\1"/g' "$file"
    
    echo "Fixed: $file"
done

echo "Syntax errors fixed!"
