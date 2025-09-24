#!/bin/bash

echo "🔧 Fixing SEOHead imports across the codebase..."

# Fix incorrect imports that try to destructure SEO from SEOHead
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/components\/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/components\/SEOHead"/g' {} \;

# Fix imports with different path patterns
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/\.\.\/components\/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/\.\.\/\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/\.\.\/\.\.\/components\/SEOHead"/g' {} \;

# Fix imports with single quotes
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import { SEO } from '\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/components\/SEOHead'/g" {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import { SEO } from '\.\.\/\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/\.\.\/components\/SEOHead'/g" {} \;

# Fix malformed imports
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import: SEOHead, from, '\''\.\.\/components\/SEOHead'\'': ,//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import: { SEO }, from "\.\.\/components\/SEOHead": ,//g' {} \;

# Fix imports with curly braces around SEOHead
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEOHead } from '\''\.\.\/components\/SEOHead'\''/import SEOHead from '\''\.\.\/components\/SEOHead'\''/g' {} \;

echo "✅ SEOHead imports fixed!"