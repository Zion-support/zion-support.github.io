#!/bin/bash

# Resolve merge conflicts in all files
echo "🔧 Resolving merge conflicts in all files..."

# Find all files with merge conflict markers
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "🔧 Resolving conflicts in $file"
        
        # For TSX files, prefer the incoming version (theirs)
        if [[ "$file" == *.tsx ]]; then
            # Remove conflict markers and keep the incoming version
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        else
            # For other files, use ours strategy
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        fi
    fi
done

# Fix client component issues
echo "🔧 Fixing client component issues..."
find /workspace/components -name "*.tsx" -exec grep -l "useState\|useEffect" {} \; | while read file; do
    if ! grep -q '"use client"' "$file"; then
        echo "🔧 Adding 'use client' directive to $file"
        sed -i '1i"use client";' "$file"
    fi
done

# Fix SVG syntax issues
echo "🔧 Fixing SVG syntax issues..."
find /workspace -name "*.tsx" -exec sed -i 's/width="60" height="60"/width="60" height="60"/g' {} \;

echo "✅ Merge conflicts resolved!"