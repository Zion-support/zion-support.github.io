#!/bin/bash

# Find all files with merge conflicts
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

echo "Merge conflicts fixed in all files"