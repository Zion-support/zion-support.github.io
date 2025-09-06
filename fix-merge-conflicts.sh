#!/bin/bash

# Script to automatically resolve merge conflicts by choosing the main branch version
# This script removes everything from <<<<<<< HEAD to ======= and keeps everything after =======

echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts in src and app directories
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove everything from <<<<<<< HEAD to ======= (inclusive)
    # Keep everything after ======= until >>>>>>> 
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    
    # Remove the >>>>>>> markers
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "Merge conflicts fixed!"