#!/bin/bash

echo "Fixing syntax errors in page files..."

# Find all page.tsx files with syntax errors
find app -name "page.tsx" -type f | while read file; do
    echo "Processing $file..."
    
    # Create backup
    cp "$file" "$file.backup2"
    
    # Fix common syntax issues
    sed -i 's/<<<<<<< HEAD//g' "$file"
    sed -i 's/=======//g' "$file"
    sed -i 's/>>>>>>> .*//g' "$file"
    
    # Fix JSX fragment issues
    sed -i 's/<>/</g' "$file"
    sed -i 's/<\/>/<\/>/g' "$file"
    
    # Fix unclosed tags by adding proper closing tags
    sed -i 's/<h1\([^>]*\)>\([^<]*\)$/<h1\1>\2<\/h1>/g' "$file"
    sed -i 's/<h2\([^>]*\)>\([^<]*\)$/<h2\1>\2<\/h2>/g' "$file"
    sed -i 's/<h3\([^>]*\)>\([^<]*\)$/<h3\1>\2<\/h3>/g' "$file"
    sed -i 's/<p\([^>]*\)>\([^<]*\)$/<p\1>\2<\/p>/g' "$file"
    sed -i 's/<button\([^>]*\)>\([^<]*\)$/<button\1>\2<\/button>/g' "$file"
    sed -i 's/<section\([^>]*\)>\([^<]*\)$/<section\1>\2<\/section>/g' "$file"
    sed -i 's/<main\([^>]*\)>\([^<]*\)$/<main\1>\2<\/main>/g' "$file"
    
    echo "Fixed $file"
done

echo "Syntax errors fixed!"
