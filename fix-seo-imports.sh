#!/bin/bash

# Fix SEO imports in all files
find src -name "*.jsx" -o -name "*.tsx" | xargs grep -l "import.*SEO.*from.*@/components/SEO" | grep -v backup | while read file; do
  echo "Fixing $file"
  # Replace @/components/SEO with relative path
  sed -i "s|import { SEO } from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
  sed -i "s|import SEO from '@/components/SEO';|import { SEO } from '../components/SEO.jsx';|g" "$file"
done

echo "SEO imports fixed!"
