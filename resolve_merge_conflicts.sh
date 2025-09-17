#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.toml" --include="*.md" | cut -d: -f1 | sort -u)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only the HEAD content
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d; />>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflicts resolved!"