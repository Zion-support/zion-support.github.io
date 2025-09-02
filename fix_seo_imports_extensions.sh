#!/bin/bash

echo "🔧 Fixing SEOHead imports with correct file extensions..."

# Fix imports to include .jsx extension
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/components\/SEOHead.jsx"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/\.\.\/components\/SEOHead.jsx"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import SEOHead from "\.\.\/\.\.\/\.\.\/components\/SEOHead"/import SEOHead from "\.\.\/\.\.\/\.\.\/components\/SEOHead.jsx"/g' {} \;

# Fix imports with single quotes
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/components\/SEOHead.jsx'/g" {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i "s/import SEOHead from '\.\.\/\.\.\/components\/SEOHead'/import SEOHead from '\.\.\/\.\.\/components\/SEOHead.jsx'/g" {} \;

echo "✅ SEOHead import extensions fixed!"