#!/bin/bash

echo "Fixing all merge conflicts..."

# Find all files with merge conflicts
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \) -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the version after =======
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"
