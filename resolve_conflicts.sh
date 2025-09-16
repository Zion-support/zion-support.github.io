#!/bin/bash

echo "Resolving merge conflicts by accepting our changes..."

# Find all files with merge conflicts
find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Resolving conflicts in: $file"
    # Accept our changes (HEAD)
    git checkout --ours "$file"
  fi
done

echo "All merge conflicts resolved!"