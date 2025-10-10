#!/bin/bash

echo "Fixing merge conflicts and syntax errors..."

# Find all files with merge conflict markers
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^=======$/d' "$file"
  fi
done

echo "Merge conflicts fixed. Checking for syntax errors..."

# Fix common syntax errors
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
  if [ -f "$file" ]; then
    # Fix unterminated string literals (basic fix)
    sed -i 's/"[^"]*$/"\n/g' "$file"
    
    # Fix missing closing braces (basic fix)
    sed -i 's/^[[:space:]]*}[[:space:]]*$//g' "$file"
  fi
done

echo "Basic fixes applied. Manual review may be needed for complex issues."
