#!/bin/bash

echo "Fixing syntax errors in TypeScript/JSX files..."

# Find all TypeScript and JSX files
find /workspace/src -name "*.tsx" -o -name "*.ts" | while read file; do
    echo "Processing: $file"
    
    # Fix interface definitions with trailing commas
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*: [^,]*\);,/\1;/g' "$file"
    
    # Fix JSX elements ending with semicolons
    sed -i 's/\(<[^>]*>\);/ \1/g' "$file"
    
    # Fix object properties with trailing commas
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*:[^,]*\);,/\1;/g' "$file"
    
    # Fix array elements with trailing commas
    sed -i 's/\([^,]*\);,/\1;/g' "$file"
    
    # Fix JSX closing tags with semicolons
    sed -i 's/\(<\/[^>]*>\);/ \1/g' "$file"
    
    # Fix function parameters with trailing commas
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\);/ \1/g' "$file"
    
    # Fix import statements with trailing commas
    sed -i 's/import { \([^}]*\),  }/import { \1 }/g' "$file"
    
    # Fix missing spaces in JSX
    sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\)=\([^=]\)/\1=\2/g' "$file"
    
done

echo "Syntax error fixes completed!"