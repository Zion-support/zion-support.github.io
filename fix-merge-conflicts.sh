#!/bin/bash

# Script to fix merge conflicts in the main app files
echo "Fixing merge conflicts in app files..."

# Find all files with merge conflicts in the app directory
find /workspace/app -name "*.tsx" -o -name "*.ts" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing merge conflicts in: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Remove merge conflict markers and keep the HEAD version
        sed -i '/^<<<<<<< HEAD/,/^>>>>>>> cursor/d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^=======$/d' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Merge conflict fixing completed!"
