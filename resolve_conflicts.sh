#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.jsx" --include="*.tsx" --include="*.js" --include="*.ts" -l)

for file in $files_with_conflicts; do
    echo "Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    echo "Resolved: $file"
done

echo "All merge conflicts resolved!"