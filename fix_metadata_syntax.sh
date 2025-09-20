#!/bin/bash

echo "🔧 Fixing metadata syntax errors..."

# Fix metadata object syntax - remove semicolon after opening brace
find app -name "*.tsx" -type f -exec sed -i 's/export const metadata = {;/export const metadata = {/g' {} \;

# Fix function declaration syntax - remove semicolon after opening brace
find app -name "*.tsx" -type f -exec sed -i 's/const page: React.FC = () => {;/const page: React.FC = () => {/g' {} \;

# Fix return statement syntax - remove semicolon after opening parenthesis
find app -name "*.tsx" -type f -exec sed -i 's/return (;/return (/g' {} \;

# Fix trailing commas in JSX - replace with semicolons or remove
find app -name "*.tsx" -type f -exec sed -i 's/},$/}/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/},$/}/g' {} \;

echo "✅ Metadata syntax fixes completed!"