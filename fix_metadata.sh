#!/bin/bash

# Fix metadata syntax errors in blog pages
find /workspace/app/blog -name "*.tsx" -exec sed -i '/^\/\/ export const metadata: Metadata = \/\/ Removed for Vite {/,/^};$/c\
// Metadata removed for Vite compatibility' {} \;

# Fix similar issues in other pages
find /workspace/app -name "*.tsx" -exec sed -i '/^\/\/ export const metadata: Metadata = \/\/ Removed for Vite {/,/^};$/c\
// Metadata removed for Vite compatibility' {} \;

echo "Fixed metadata syntax errors in all pages"