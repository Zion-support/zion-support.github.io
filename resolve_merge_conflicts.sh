#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # This removes everything from ======= to >>>>>> and keeps only HEAD content
    sed -i '/^=======/,/^>>>>>>/d' "$file"
    
    # Remove the <<<<<<< HEAD markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    
    echo "Resolved conflicts in $file"
done

echo "Merge conflicts resolved!"