#!/bin/bash

echo "Fixing JSX fragments..."

# Find all TypeScript/JavaScript files in src directory
find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    echo "Processing $file..."
    
    # Fix malformed JSX fragments
    sed -i 's/return (</return (<>/g' "$file"
    sed -i 's/return (</return (<>/g' "$file"
    
    # Fix missing opening fragment
    sed -i 's/return (</return (<>/g' "$file"
    
    # Fix malformed closing fragments
    sed -i 's/<\/>/<\/>/g' "$file"
    
    # Fix specific patterns
    sed -i 's/<{children}</<>{children}</g' "$file"
    sed -i 's/<{children}</<>{children}</g' "$file"
    
    # Fix malformed JSX elements
    sed -i 's/<\([^>]*\)><\/\1>>/<\1><\/\1>/g' "$file"
    
    # Fix missing opening tags
    sed -i 's/return (</return (<>/g' "$file"
done

echo "JSX fragments fixed!"