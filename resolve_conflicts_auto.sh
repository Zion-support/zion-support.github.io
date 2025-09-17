#!/bin/bash

# Script to automatically resolve merge conflicts by choosing HEAD version
# This is a quick fix for simple conflicts

echo "Starting automatic conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | cut -d: -f1 | sort -u)

for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove conflict markers and keep HEAD version
    # This is a simple approach - it removes everything between ======= and >>>>>>> markers
    sed -i '/=======/,/>>>>>>>/d' "$file"
    
    # Remove remaining <<<<<<< HEAD markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Conflict resolution completed!"
echo "Please review the changes and test the application."