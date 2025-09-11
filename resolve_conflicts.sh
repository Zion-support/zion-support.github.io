#!/bin/bash

# Script to resolve merge conflicts by accepting HEAD version
echo "Resolving merge conflicts by accepting HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No files with merge conflicts found."
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git checkout to accept HEAD version
    git checkout --ours "$file"
    
    # If that doesn't work, manually remove conflict markers
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Manually resolving conflicts in $file"
        
        # Remove conflict markers and keep only HEAD content
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> origin/d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^<<<<<<< HEAD/d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
    
    echo "Resolved: $file"
done

echo "Merge conflict resolution completed."