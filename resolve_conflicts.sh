#!/bin/bash

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
=======
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
    
<<<<<<< HEAD
echo "All conflicts resolved!"
=======
echo "Merge conflict resolution completed."