#!/bin/bash

echo "Fixing JSX semicolon issues..."

# Find all TypeScript/JavaScript files in src directory
find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    echo "Processing $file..."
    
    # Remove semicolons after JSX closing tags
    sed -i 's/<\/[^>]*>;/<\/&>/g' "$file"
    
    # Remove semicolons after JSX opening tags (but not self-closing)
    sed -i 's/<[^>]*[^\/]>;/&/g' "$file"
    
    # Fix specific patterns
    sed -i 's/className="[^"]*">;/className="&">/g' "$file"
    sed -i 's/className={`[^`]*`}>;/className={`&`}>/g' "$file"
    
    # Remove semicolons after JSX elements that are not self-closing
    sed -i 's/<\([^>]*[^\/]\)>;/<\1>/g' "$file"
    
    # Fix import statements with semicolons
    sed -i 's/import { \([^}]*\); \([^}]*\) } from/import { \1, \2 } from/g' "$file"
    
    # Fix missing commas in arrays
    sed -i 's/{ id: '\''[^'\'']*'\'', label: '\''[^'\'']*'\'', icon: [^}]* }/&,/g' "$file"
done

echo "JSX semicolon issues fixed!"