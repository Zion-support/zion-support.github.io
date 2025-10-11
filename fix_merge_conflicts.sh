#!/bin/bash

# Script to fix merge conflicts in TypeScript files
echo "Fixing merge conflicts in TypeScript files..."

# Find all .ts files with merge conflicts
find /workspace -name "*.ts" -type f -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> origin" {} \; | while read file; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.original"
    
    # Fix common merge conflict patterns
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> origin.*$/d' "$file"
    
    # Remove empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflict fixing completed!"