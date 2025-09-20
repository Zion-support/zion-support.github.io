#!/bin/bash

echo "🔧 Comprehensive syntax fix for app directory..."

# Fix metadata object syntax
find app -name "*.tsx" -type f -exec sed -i 's/export const metadata = {;/export const metadata = {/g' {} \;

# Fix function declaration syntax
find app -name "*.tsx" -type f -exec sed -i 's/const page: React.FC = () => {;/const page: React.FC = () => {/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/export default function \([^)]*\)() {;/export default function \1() {/g' {} \;

# Fix return statement syntax
find app -name "*.tsx" -type f -exec sed -i 's/return (;/return (/g' {} \;

# Fix JSX trailing commas - replace with proper syntax
find app -name "*.tsx" -type f -exec sed -i 's/},$/}/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/},$/}/g' {} \;

# Fix malformed property assignments
find app -name "*.tsx" -type f -exec sed -i 's/description:,/description:/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/title:,/title:/g' {} \;

# Fix JSX element trailing commas
find app -name "*.tsx" -type f -exec sed -i 's/<div[^>]*>,/<div>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<h[1-6][^>]*>,/<h\1>/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/<p[^>]*>,/<p>/g' {} \;

# Remove empty lines at the beginning
find app -name "*.tsx" -type f -exec sed -i '/^$/N;/^\n$/d' {} \;

echo "✅ Comprehensive syntax fixes completed!"