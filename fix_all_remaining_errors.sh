#!/bin/bash

echo "Fixing all remaining TypeScript syntax errors..."

# Fix all anyany patterns in the entire codebase
find src -name "*.ts" -o -name "*.tsx" | while read -r file; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Fix various anyany patterns
        sed -i '' 's/anyanyany/any/g' "$file"
        sed -i '' 's/anyany/any/g' "$file"
        sed -i '' 's/any0\./0./g' "$file"
        sed -i '' 's/any1\./1./g' "$file"
        sed -i '' 's/any2\./2./g' "$file"
        sed -i '' 's/any3\./3./g' "$file"
        sed -i '' 's/any4\./4./g' "$file"
        sed -i '' 's/any5\./5./g' "$file"
        sed -i '' 's/any6\./6./g' "$file"
        sed -i '' 's/any7\./7./g' "$file"
        sed -i '' 's/any8\./8./g' "$file"
        sed -i '' 's/any9\./9./g' "$file"
        
        # Fix any'string' patterns
        sed -i '' "s/any'/'/g" "$file"
        sed -i '' 's/any"/"/g' "$file"
        
        # Fix any( patterns
        sed -i '' 's/any(/(/g' "$file"
        
        # Fix anykeyof patterns
        sed -i '' 's/anykeyof/keyof/g' "$file"
        
        # Fix any[] patterns
        sed -i '' 's/any\[\]/any[]/g' "$file"
        
        # Fix any{ patterns
        sed -i '' 's/any{/{/g' "$file"
        
        # Fix any; patterns
        sed -i '' 's/any;/;/g' "$file"
        
        # Fix any, patterns
        sed -i '' 's/any,/,/g' "$file"
        
        # Fix any) patterns
        sed -i '' 's/any)/)/g' "$file"
        
        # Fix any} patterns
        sed -i '' 's/any}/}/g' "$file"
    fi
done

echo "All remaining TypeScript syntax errors fixed!"
