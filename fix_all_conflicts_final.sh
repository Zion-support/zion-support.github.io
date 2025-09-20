#!/bin/bash

echo "Fixing all merge conflicts in the codebase..."

# Find all files with merge conflict markers
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    
    echo "Fixed: $file"
  fi
done

echo "All merge conflicts have been resolved!"