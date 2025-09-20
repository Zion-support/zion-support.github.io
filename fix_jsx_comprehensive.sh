#!/bin/bash

echo "Fixing JSX syntax comprehensively..."

# Fix specific patterns
find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    echo "Processing $file..."
    
    # Fix malformed JSX closing tags
    sed -i 's/<\/\([^>]*\)><\/\1>>/<\/\1>/g' "$file"
    sed -i 's/<\/\([^>]*\)><\/\1>;/<\/\1>/g' "$file"
    
    # Fix malformed JSX opening tags
    sed -i 's/<\([^>]*\)><\/\1>>/<\1><\/\1>/g' "$file"
    
    # Fix duplicate className attributes
    sed -i 's/className="className="\([^"]*\)">/className="\1"/g' "$file"
    
    # Fix malformed return statements
    sed -i 's/return (</return (<>/g' "$file"
    
    # Fix semicolons after JSX elements
    sed -i 's/<\/[^>]*>;/<\/&>/g' "$file"
    
    # Fix missing closing tags
    sed -i 's/<\([^>]*\)><\/\1>>/<\1><\/\1>/g' "$file"
    
    # Fix malformed JSX fragments
    sed -i 's/<>/</g' "$file"
    sed -i 's/<\/>;/<\/>/g' "$file"
    
    # Fix specific patterns
    sed -i 's/Content Generator<\/\/h1>>/Content Generator<\/h1>/g' "$file"
    sed -i 's/Content Settings<\/\/CardTitle>>/Content Settings<\/CardTitle>/g' "$file"
    sed -i 's/Configure what type of content you want to generate\.;<\/\/CardDescription>>/Configure what type of content you want to generate.<\/CardDescription>/g' "$file"
    sed -i 's/<\/\/CardHeader>>/<\/CardHeader>/g' "$file"
    sed -i 's/className="space-y-6">">/className="space-y-6">/g' "$file"
done

echo "JSX syntax fixed!"