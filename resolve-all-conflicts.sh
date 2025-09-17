#!/bin/bash

echo "🔧 Resolving all merge conflicts in the repository..."

# Find all files with merge conflict markers
CONFLICTED_FILES=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" --include="*.yml" --include="*.yaml" -l)

echo "📋 Found $(echo "$CONFLICTED_FILES" | wc -l) files with merge conflicts"

# Process each file
for file in $CONFLICTED_FILES; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Remove conflict markers
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
done

echo "🎉 All merge conflicts resolved!"
echo "📊 Processed $(echo "$CONFLICTED_FILES" | wc -l) files"