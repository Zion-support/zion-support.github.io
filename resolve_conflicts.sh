#!/bin/bash

echo "Resolving merge conflicts..."

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
}

# Find all files with merge conflicts in src directory
find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        resolve_conflicts "$file"
    fi
done

echo "Merge conflicts resolved!"