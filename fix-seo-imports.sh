#!/bin/bash

<<<<<<< HEAD
echo "Fixing SEO import issues..."

# Find all files with incorrect SEO imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | while read file; do
    if grep -q 'import { SEO }' "$file"; then
        echo "Fixing $file"
        sed -i 's/import { SEO }/import SEO/g' "$file"
    fi
done

echo "SEO import fixes completed"
=======
# Fix SEO imports in all files
find src -name "*.jsx" -o -name "*.tsx" | xargs grep -l "import.*SEO.*from.*@/components/SEO" | grep -v backup | while read file; do
  echo "Fixing $file"
  # Replace @/components/SEO with relative path
  sed -i "s|import { SEO } from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
  sed -i "s|import SEO from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
done

echo "SEO imports fixed!"
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-ca65
