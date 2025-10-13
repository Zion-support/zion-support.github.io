#!/bin/bash

echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Remove merge conflict markers
    sed '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file" > "${file}.clean"
    sed '/^=======/d' "${file}.clean" > "${file}.final"
    sed '/^>>>>>>> /d' "${file}.final" > "${file}.clean2"
    
    # Move cleaned file back
    mv "${file}.clean2" "$file"
    
    # Clean up temp files
    rm -f "${file}.clean" "${file}.final"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"