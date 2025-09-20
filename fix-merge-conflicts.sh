#!/bin/bash

# Script to fix common merge conflicts
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files=$(find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files; do
    echo "Processing $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    # This is a simple approach - for production, you'd want more sophisticated conflict resolution
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i 's/^<<<<<<< HEAD//' "$file"
    sed -i 's/^=======.*//' "$file"
    sed -i 's/^>>>>>>> .*//' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "Merge conflicts fixed. Testing build..."