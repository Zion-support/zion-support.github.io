#!/bin/bash

# Script to remove unused imports from blog pages

echo "Fixing unused imports in blog pages..."

# Find all blog page files
files=$(find /workspace/app/blog -name "page.tsx" -type f)

for file in $files; do
    echo "Processing: $file"
    
    # Remove unused Link imports
    if grep -q "import { Link }" "$file" && ! grep -q "<Link" "$file"; then
        sed -i '/import { Link } from '\''react-router-dom'\'';/d' "$file"
        echo "  Removed unused Link import"
    fi
    
    # Remove unused Helmet imports
    if grep -q "import { Helmet }" "$file" && ! grep -q "<Helmet" "$file"; then
        sed -i '/import { Helmet } from '\''react-helmet-async'\'';/d' "$file"
        echo "  Removed unused Helmet import"
    fi
    
    # Remove unused Page variables
    if grep -q "const Page" "$file" && ! grep -q "Page" "$file" | grep -v "const Page"; then
        sed -i '/const Page.*=.*()/d' "$file"
        echo "  Removed unused Page variable"
    fi
done

echo "Unused imports fixed!"