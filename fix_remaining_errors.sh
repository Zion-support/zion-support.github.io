#!/bin/bash

echo "Fixing remaining TypeScript syntax errors..."

# Fix various patterns that cause syntax errors
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix : any -> : any (proper spacing)
        sed -i '' 's/: any\([^a-zA-Z0-9_]\)/: any\1/g' "$file"
        
        # Fix : anyany -> : any
        sed -i '' 's/: anyany/: any/g' "$file"
        
        # Fix : anystring -> : string
        sed -i '' 's/: anystring/: string/g' "$file"
        
        # Fix : anynumber -> : number
        sed -i '' 's/: anynumber/: number/g' "$file"
        
        # Fix : anyboolean -> : boolean
        sed -i '' 's/: anyboolean/: boolean/g' "$file"
        
        # Fix : anykeyof -> : keyof
        sed -i '' 's/: anykeyof/: keyof/g' "$file"
        
        # Fix : anyReact -> : React
        sed -i '' 's/: anyReact/: React/g' "$file"
        
        # Fix : anyany -> : any
        sed -i '' 's/: anyany/: any/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
        
        # Fix anyany( -> any(
        sed -i '' 's/anyany(/any(/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
        
        # Fix anyany -> any
        sed -i '' 's/anyany/any/g' "$file"
    fi
done

echo "Remaining TypeScript syntax errors fixed!"
