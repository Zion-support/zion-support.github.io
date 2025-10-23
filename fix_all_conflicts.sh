#!/bin/bash

echo "Fixing merge conflicts and syntax errors..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -n "$files_with_conflicts" ]; then
    echo "Found files with merge conflicts:"
    echo "$files_with_conflicts"
    
    for file in $files_with_conflicts; do
        echo "Fixing: $file"
        
        # Remove merge conflict markers and keep the newer version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> origin\/main/d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======$/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    done
else
    echo "No merge conflicts found"
fi

# Fix common syntax errors
echo "Fixing common syntax errors..."

# Find all TypeScript/JavaScript files
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git | while read file; do
    if [ -f "$file" ]; then
        # Fix unclosed JSX tags
        sed -i 's/<h1[^>]*>\([^<]*\)<\/\s*$/<h1>\1<\/h1>/g' "$file"
        sed -i 's/<h2[^>]*>\([^<]*\)<\/\s*$/<h2>\1<\/h2>/g' "$file"
        sed -i 's/<h3[^>]*>\([^<]*\)<\/\s*$/<h3>\1<\/h3>/g' "$file"
        sed -i 's/<p[^>]*>\([^<]*\)<\/\s*$/<p>\1<\/p>/g' "$file"
        sed -i 's/<button[^>]*>\([^<]*\)<\/\s*$/<button>\1<\/button>/g' "$file"
        sed -i 's/<div[^>]*>\([^<]*\)<\/\s*$/<div>\1<\/div>/g' "$file"
    fi
done

echo "Done fixing conflicts and syntax errors!"
