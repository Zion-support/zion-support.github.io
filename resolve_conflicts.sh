#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts by choosing HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | cut -d: -f1 | sort -u)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>>/d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflict resolution completed!"
echo "Files processed: $(echo "$files_with_conflicts" | wc -l)"