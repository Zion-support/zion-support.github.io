#!/bin/bash

# Find all TypeScript files with conflict markers
files=$(find src -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> ")

for file in $files; do
    echo "Fixing conflicts in $file"
    
    # Remove conflict markers and keep the content after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"
done

echo "All conflict markers removed"