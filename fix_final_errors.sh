#!/bin/bash

echo "Fixing final TypeScript syntax errors..."

# Fix various patterns with proper spacing
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix : any()   => -> : () =>
        sed -i '' 's/: any()   =>/: () =>/g' "$file"
        
        # Fix : any()  => -> : () =>
        sed -i '' 's/: any()  =>/: () =>/g' "$file"
        
        # Fix : any() => -> : () =>
        sed -i '' 's/: any() =>/: () =>/g' "$file"
        
        # Fix : any( -> : (
        sed -i '' 's/: any(/: (/g' "$file"
        
        # Fix : any -> : any (proper spacing)
        sed -i '' 's/: any\([^a-zA-Z0-9_]\)/: any\1/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
        
        # Fix anyany( -> any(
        sed -i '' 's/anyany(/any(/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
    fi
done

echo "Final TypeScript syntax errors fixed!"
