#!/bin/bash

echo "Fixing syntax errors in the codebase..."

# Fix standalone semicolons at the beginning of lines
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        # Remove standalone semicolons at the beginning of lines
        sed -i 's/^;.*$//' "$file"
        # Remove empty lines that might have been created
        sed -i '/^$/N;/^\n$/d' "$file"
    fi
done

# Fix common malformed patterns
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if [ -f "$file" ]; then
        # Fix malformed export statements
        sed -i 's/export const \([a-zA-Z_][a-zA-Z0-9_]*\) = {}$/export const \1 = {};/' "$file"
        # Fix missing semicolons after export statements
        sed -i 's/export default \([a-zA-Z_][a-zA-Z0-9_]*\)$/export default \1;/' "$file"
    fi
done

echo "Syntax error fixes completed!"