#!/bin/bash

echo "Fixing TypeScript syntax errors..."

# Fix : any( patterns
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        # Fix : any( -> : (
        sed -i '' 's/: any(/: (/g' "$file"
        # Fix : any ( -> : (
        sed -i '' 's/: any (/: (/g' "$file"
        # Fix : anyany( -> : (
        sed -i '' 's/: anyany(/: (/g' "$file"
        # Fix : anyany ( -> : (
        sed -i '' 's/: anyany (/: (/g' "$file"
    fi
done

# Fix anyany patterns that might remain
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
    fi
done

echo "TypeScript syntax errors fixed!"
