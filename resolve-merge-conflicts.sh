#!/bin/bash

# Script to resolve all merge conflicts by removing conflict markers
# This script will clean up all merge conflict markers from the codebase

echo "Resolving merge conflicts..."

# Find all files with merge conflict markers
CONFLICT_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | cut -d: -f1 | sort -u)

echo "Found conflict files:"
echo "$CONFLICT_FILES"

# Process each file
for file in $CONFLICT_FILES; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the content after =======
    # This is a simple strategy - in production you'd want more sophisticated conflict resolution
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in $file"
done

echo "Merge conflict resolution completed!"

# Check if there are any remaining conflict markers
REMAINING_CONFLICTS=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | wc -l)

if [ $REMAINING_CONFLICTS -gt 0 ]; then
    echo "Warning: $REMAINING_CONFLICTS conflict markers still remain"
    echo "Files with remaining conflicts:"
    grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" | cut -d: -f1 | sort -u
else
    echo "All merge conflicts resolved successfully!"
fi