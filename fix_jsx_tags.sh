#!/bin/bash

echo "Fixing JSX tag issues..."

# Find all TypeScript/JavaScript files
find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | grep -v .git | while read file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix the specific pattern: <tag>content</\s*$
        sed -i 's/\(<[^>]*>[^<]*\)<\/\s*$/\1<\/h1>/g' "$file"
        
        # Fix unclosed tags at end of lines
        sed -i 's/\(<h[1-6][^>]*>[^<]*\)\s*$/\1<\/h1>/g' "$file"
        sed -i 's/\(<p[^>]*>[^<]*\)\s*$/\1<\/p>/g' "$file"
        sed -i 's/\(<button[^>]*>[^<]*\)\s*$/\1<\/button>/g' "$file"
        sed -i 's/\(<div[^>]*>[^<]*\)\s*$/\1<\/div>/g' "$file"
        
        # Fix the specific pattern with spaces before closing
        sed -i 's/\(<[^>]*>[^<]*\)\s*<\/\s*$/\1<\/h1>/g' "$file"
    fi
done

echo "Done fixing JSX tags!"
