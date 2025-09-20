#!/bin/bash

echo "🔧 Fixing syntax errors in app directory..."

# Fix import statements - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/import \([^,]*\),/import \1;/g' {} \;

# Fix export statements - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/export \([^,]*\),/export \1;/g' {} \;

# Fix const declarations - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/const \([^,]*\),/const \1;/g' {} \;

# Fix function declarations - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/function \([^,]*\),/function \1;/g' {} \;

# Fix return statements - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/return \([^,]*\),/return \1;/g' {} \;

# Fix metadata objects - replace commas with semicolons
find app -name "*.tsx" -type f -exec sed -i 's/export const metadata = {,/export const metadata = {/g' {} \;

# Fix empty lines and malformed syntax
find app -name "*.tsx" -type f -exec sed -i '/^,$/d' {} \;
find app -name "*.tsx" -type f -exec sed -i '/^,$/d' {} \;

echo "✅ Syntax fixes completed!"