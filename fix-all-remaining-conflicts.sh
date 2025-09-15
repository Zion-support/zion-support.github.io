#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts and fix them
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> main" "$file" 2>/dev/null; then
        echo "Fixing: $file"
        
        # Create backup
        cp "$file" "$file.backup"
        
        # Remove merge conflict markers and keep the main branch content
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> main/d' "$file"
        sed -i '/>>>>>>> cursor/d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^=======$/d' "$file"
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^>>>>>>> main$/d' "$file"
        sed -i '/^>>>>>>> cursor/d' "$file"
    fi
done

echo "All merge conflicts fixed!"