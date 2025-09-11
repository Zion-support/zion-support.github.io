#!/bin/bash

echo "🔧 Fixing all common issues in corrupted files..."

# Fix unterminated string literals
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/SEOHead"'\''/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/SEOHead"'\''/SEOHead"/g' {} \;

# Fix malformed imports
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/components\/SEOHead"'\''/import { SEO } from "\.\.\/components\/SEOHead"/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/import { SEO } from "\.\.\/components\/SEOHead"'\''/import { SEO } from "\.\.\/components\/SEOHead"/g' {} \;

# Fix malformed JSX syntax
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*CardContent\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*Card\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*;\s*$//g' {} \;

# Fix malformed function declarations
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/const:\s*CloudDevOps,\s*React,\s*:\s*\.FC\s*=\s*\(\)\s*=>\s*{/const CloudDevOps = () => {/g' {} \;

# Fix malformed object properties
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{icon}:\s*Database,/{icon: Database,/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{name}:\s*"AWS"/{name: "AWS"/g' {} \;

# Fix malformed JSX closing tags
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/\s*CardContent\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/\s*Card\s*>\s*;\s*$//g' {} \;

# Fix malformed export statements
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/export default CloudDevOps;\s*<\/>\);$/export default CloudDevOps;/g' {} \;

# Fix malformed function calls
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/\.push(/\(/g' {} \;

# Fix malformed JSX fragments
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<>\s*$/<>/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/>\s*$/<\/>/g' {} \;

# Fix malformed component declarations
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/const:\s*CloudDevOps,\s*React,\s*:\s*\.FC\s*=\s*\(\)\s*=>\s*{/const CloudDevOps = () => {/g' {} \;

# Fix malformed object syntax
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{icon}:\s*Database,/{icon: Database,/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{name}:\s*"AWS"/{name: "AWS"/g' {} \;

# Fix malformed JSX syntax
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*CardContent\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*Card\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*;\s*$//g' {} \;

# Fix malformed function declarations
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/const:\s*CloudDevOps,\s*React,\s*:\s*\.FC\s*=\s*\(\)\s*=>\s*{/const CloudDevOps = () => {/g' {} \;

# Fix malformed object properties
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{icon}:\s*Database,/{icon: Database,/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/{name}:\s*"AWS"/{name: "AWS"/g' {} \;

# Fix malformed JSX closing tags
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/\s*CardContent\s*>\s*;\s*$//g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/\s*Card\s*>\s*;\s*$//g' {} \;

# Fix malformed export statements
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/export default CloudDevOps;\s*<\/>\);$/export default CloudDevOps;/g' {} \;

# Fix malformed function calls
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/\.push(/\(/g' {} \;

# Fix malformed JSX fragments
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<>\s*$/<>/g' {} \;
find src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i 's/^\s*<\/>\s*$/<\/>/g' {} \;

echo "✅ All common issues fixed!"