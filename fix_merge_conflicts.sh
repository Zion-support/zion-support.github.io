#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file, try to resolve conflicts by taking the HEAD version
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Skip node_modules
    if [[ $file == *"node_modules"* ]]; then
        continue
    fi
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Try to resolve conflicts by taking HEAD version
    # This is a simple approach - in practice you might want more sophisticated conflict resolution
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /c\
# Merge conflict resolved - taking HEAD version' "$file"
    
    # Remove the conflict markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Processed $file"
done

echo "Merge conflicts resolution completed"
