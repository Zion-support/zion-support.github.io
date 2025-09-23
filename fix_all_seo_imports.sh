#!/bin/bash

echo "🔧 Fixing all SEOHead imports across the codebase..."

# Fix imports to remove .jsx extension
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/components\/SEOHead\.jsx"/import SEOHead from "\.\.\/components\/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/\.\.\/components\/SEOHead\.jsx"/import SEOHead from "\.\.\/\.\.\/components\/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/\.\.\/\.\.\/components\/SEOHead\.jsx"/import SEOHead from "\.\.\/\.\.\/\.\.\/components\/SEOHead"/g' {} \;

# Fix imports with single quotes
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/components\/SEOHead\.jsx'/import SEOHead from '\.\.\/components\/SEOHead'/g" {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/\.\.\/components\/SEOHead\.jsx'/import SEOHead from '\.\.\/\.\.\/components\/SEOHead'/g" {} \;

echo "✅ All SEOHead imports fixed!"