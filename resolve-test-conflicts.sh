#!/bin/bash

# Script to resolve merge conflicts in test files
echo "Resolving merge conflicts in test files..."

# Find all test files with merge conflicts
find __tests__ -name '*.test.*' -exec grep -l '<<<<<<< HEAD' {} \; | while read file; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep content
    # This removes <<<<<<< HEAD, =======, and >>>>>>> markers
    sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*$/d' "$file"
    
    # Remove any empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "Resolved: $file"
done

echo "Merge conflicts resolved in test files!"