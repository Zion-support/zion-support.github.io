#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "🔧 Resolving merge conflicts..."

# Find all files with merge conflicts
conflicted_files=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.html" -o -name "*.json" \) -not -path "*/node_modules/*" -not -path "*/.git/*" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$conflicted_files" ]; then
    echo "✅ No merge conflicts found"
    exit 0
fi

echo "📋 Found merge conflicts in $(echo "$conflicted_files" | wc -l) files"

# Resolve conflicts by choosing HEAD version
for file in $conflicted_files; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Use sed to resolve conflicts by keeping HEAD version
    sed -i '/<<<<<<< HEAD/,/>>>>>>> /{
        /<<<<<<< HEAD/d
        /=======/,/>>>>>>> /d
    }' "$file"
done

echo "✅ All merge conflicts resolved"