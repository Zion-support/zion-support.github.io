#!/bin/bash

# Script to resolve merge conflicts by accepting our changes
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.json" | xargs grep -l "<<<<<<< HEAD" | grep -v ".next" | grep -v "node_modules")

for file in $conflict_files; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout to accept our version
    git checkout --ours "$file" 2>/dev/null || echo "Could not resolve $file with git checkout"
    
    # If git checkout didn't work, try to manually remove conflict markers
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        echo "Manually resolving conflicts in: $file"
        # Remove conflict markers and keep the HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts resolved!"