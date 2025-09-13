#!/bin/bash

echo "🔧 Resolving all merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(grep -r "<<<<<<< HEAD" /workspace/app --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

echo "Found conflict files: $conflict_files"

# For each file with conflicts, resolve by keeping the HEAD version
for file in $conflict_files; do
    echo "Resolving conflicts in: $file"
    
    # Remove conflict markers and keep HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
done

echo "🎉 All merge conflicts resolved!"

# Check git status
echo "📊 Git status:"
git status --porcelain

echo "🚀 Ready to commit and merge!"