#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "\|
        echo "Fixing: $file"
        
        # Create backup
        cp "$file" "$file.backup"
        
        # Remove merge conflict markers and keep the main branch content
        sed -i '//d' "$file"
        sed -i '/
        sed -i '/
        
        # Clean up any remaining conflict markers
        sed -i '/^$/d' "$file"
        sed -i '/^
        sed -i '/^
        sed -i '/^
    fi
done

echo "All merge conflicts fixed!"