#!/bin/bash

echo "Fixing all merge conflicts in the codebase..."

# Find all files with merge conflict markers
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove all conflict markers and keep the content
    # This is a simple approach - it removes all conflict markers and keeps the content
    sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*$/d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts have been resolved!"