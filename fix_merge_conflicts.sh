#!/bin/bash

echo "🔧 Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find src/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Use git checkout --ours to keep our version
    git checkout --ours "$file"
    
    # Add the file to staging
    git add "$file"
done

echo "✅ Merge conflicts resolved!"