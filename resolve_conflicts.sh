#!/bin/bash

# Script to resolve merge conflicts by accepting main branch version
echo "Resolving merge conflicts..."

# Find all files with conflict markers
conflict_files=$(find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "^<<<<<<<\|^=======\|^>>>>>>>" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "No conflict files found"
    exit 0
fi

echo "Found conflict files:"
echo "$conflict_files"

# For each conflict file, resolve by accepting main branch version
for file in $conflict_files; do
    echo "Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/,/^>>>>>>>/d' "$file"
    
    echo "Resolved: $file"
done

echo "All conflicts resolved!"