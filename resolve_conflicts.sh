#!/bin/bash

# Script to resolve merge conflicts by keeping our enhanced versions
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" app/ | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git checkout to get our version (HEAD)
    git checkout --ours "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
    
    echo "Resolved $file"
done

echo "All merge conflicts resolved!"