#!/bin/bash

echo "Fixing syntax errors in TypeScript/JSX files..."

# Find all TypeScript/JavaScript files
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git | while read file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix unclosed JSX tags - more comprehensive approach
        # Fix h1 tags
        sed -i 's/<h1\([^>]*\)>\([^<]*\)<\/\s*$/<h1\1>\2<\/h1>/g' "$file"
        sed -i 's/<h1\([^>]*\)>\([^<]*\)\s*$/<h1\1>\2<\/h1>/g' "$file"
        
        # Fix h2 tags
        sed -i 's/<h2\([^>]*\)>\([^<]*\)<\/\s*$/<h2\1>\2<\/h2>/g' "$file"
        sed -i 's/<h2\([^>]*\)>\([^<]*\)\s*$/<h2\1>\2<\/h2>/g' "$file"
        
        # Fix h3 tags
        sed -i 's/<h3\([^>]*\)>\([^<]*\)<\/\s*$/<h3\1>\2<\/h3>/g' "$file"
        sed -i 's/<h3\([^>]*\)>\([^<]*\)\s*$/<h3\1>\2<\/h3>/g' "$file"
        
        # Fix p tags
        sed -i 's/<p\([^>]*\)>\([^<]*\)<\/\s*$/<p\1>\2<\/p>/g' "$file"
        sed -i 's/<p\([^>]*\)>\([^<]*\)\s*$/<p\1>\2<\/p>/g' "$file"
        
        # Fix button tags
        sed -i 's/<button\([^>]*\)>\([^<]*\)<\/\s*$/<button\1>\2<\/button>/g' "$file"
        sed -i 's/<button\([^>]*\)>\([^<]*\)\s*$/<button\1>\2<\/button>/g' "$file"
        
        # Fix div tags
        sed -i 's/<div\([^>]*\)>\([^<]*\)<\/\s*$/<div\1>\2<\/div>/g' "$file"
        sed -i 's/<div\([^>]*\)>\([^<]*\)\s*$/<div\1>\2<\/div>/g' "$file"
        
        # Fix specific patterns that are common
        sed -i 's/<\/\s*$//g' "$file"
        
        # Fix missing closing tags for common patterns
        sed -i 's/\(<h[1-6][^>]*>[^<]*\)\s*$/\1<\/h1>/g' "$file"
        sed -i 's/\(<p[^>]*>[^<]*\)\s*$/\1<\/p>/g' "$file"
        sed -i 's/\(<button[^>]*>[^<]*\)\s*$/\1<\/button>/g' "$file"
        sed -i 's/\(<div[^>]*>[^<]*\)\s*$/\1<\/div>/g' "$file"
    fi
done

echo "Done fixing syntax errors!"
