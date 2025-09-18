#!/bin/bash

echo "Fixing SEO import issues..."

# Find all files with incorrect SEO imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | while read file; do
    if grep -q 'import { SEO }' "$file"; then
        echo "Fixing $file"
        sed -i 's/import { SEO }/import SEO/g' "$file"
    fi
done

echo "SEO import fixes completed"