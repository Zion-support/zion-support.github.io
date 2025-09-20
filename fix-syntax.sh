#!/bin/bash

# Fix common syntax errors in TypeScript/JavaScript files
echo "Fixing syntax errors..."

# Fix trailing commas in object properties and function parameters
find /workspace/src -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | while read file; do
    # Fix trailing commas in object properties (replace ", }" with " }")
    sed -i 's/,\s*}/}/g' "$file"
    
    # Fix trailing commas in function parameters (replace ", )" with " )")
    sed -i 's/,\s*)/)/g' "$file"
    
    # Fix missing semicolons after variable declarations
    sed -i 's/const \([a-zA-Z_][a-zA-Z0-9_]*\) = \([^;]*\),$/const \1 = \2;/g' "$file"
    sed -i 's/let \([a-zA-Z_][a-zA-Z0-9_]*\) = \([^;]*\),$/let \1 = \2;/g' "$file"
    
    # Fix missing semicolons after function calls
    sed -i 's/\([^;]\)$/\1;/g' "$file"
done

echo "Syntax fixes completed!"