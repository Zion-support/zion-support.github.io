#!/bin/bash

echo "🔧 Fixing all SEOHead import paths across the codebase..."

# Fix imports from services directory (../components/SEOHead -> ../../components/SEOHead.jsx)
find src/pages/services -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/\.\.\/components\/SEOHead\.jsx"/g' {} \;

# Fix imports from pages directory (../components/SEOHead -> ../components/SEOHead.jsx)
find src/pages -maxdepth 1 -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/components\/SEOHead\.jsx"/g' {} \;

# Fix imports from components subdirectories
find src/components -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/SEOHead\.jsx"/g' {} \;

# Fix imports with single quotes
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/components\/SEOHead\.jsx'/g" {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/\.\.\/components\/SEOHead\.jsx'/g" {} \;

echo "✅ All SEOHead import paths fixed!"