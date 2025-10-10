#!/bin/bash

echo "Fixing syntax errors in page.tsx..."

# Fix common syntax errors
sed -i 's/,\s*;,\s*}/}/g' app/page.tsx
sed -i 's/,\s*;,\s*]/]/g' app/page.tsx
sed -i 's/,\s*;,\s*)/)/g' app/page.tsx

# Fix specific patterns
sed -i 's/popular: true;,}/popular: true}/g' app/page.tsx
sed -i 's/popular: false;,}/popular: false}/g' app/page.tsx

# Fix malformed function calls
sed -i 's/\);};$/);/g' app/page.tsx

# Fix malformed JSX
sed -i 's/<\/[^>]*>;$/&/g' app/page.tsx

echo "Syntax errors fixed!"
