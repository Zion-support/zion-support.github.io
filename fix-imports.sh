#!/bin/bash

# Script to fix import paths in JSX files
set -e

echo "🔧 Fixing import paths in JSX files..."

# Find all JSX files with @/ imports
find src -name "*.jsx" -exec grep -l "@/components" {} \; | while read file; do
    echo "🔧 Fixing imports in $file"
    
    # Fix common import path issues
    sed -i 's|@/components/header/Header|@/components/Header|g' "$file"
    sed -i 's|@/components/Header/Header|@/components/Header|g' "$file"
    sed -i 's|@/components/Footer/Footer|@/components/Footer|g' "$file"
    sed -i 's|@/components/SEO/SEO|@/components/SEO|g' "$file"
    sed -i 's|@/components/GradientHeading/GradientHeading|@/components/GradientHeading|g' "$file"
    
    echo "✅ Fixed imports in $file"
done

echo "🎉 Import path fixes completed!"