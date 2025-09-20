#!/bin/bash

# Fix common syntax errors in TypeScript/React files

echo "Fixing syntax errors in TypeScript/React files..."

# Fix semicolons in JSX (replace `>;` with `>` and `;` with proper syntax)
find src -name "*.tsx" -type f -exec sed -i 's/\(<[^>]*\)>;/\1>/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/\(<\/[^>]*\)>;/\1>/g' {} \;

# Fix trailing semicolons in JSX attributes
find src -name "*.tsx" -type f -exec sed -i 's/\([^>]\)>;/\1>/g' {} \;

# Fix interface syntax (remove trailing commas before semicolons)
find src -name "*.tsx" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^;]\),;/\1;/g' {} \;

# Fix function parameter syntax
find src -name "*.tsx" -type f -exec sed -i 's/\([^,]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^,]\),;/\1;/g' {} \;

# Fix array syntax
find src -name "*.tsx" -type f -exec sed -i 's/\([^,]\),;/\1;/g' {} \;
find src -name "*.ts" -type f -exec sed -i 's/\([^,]\),;/\1;/g' {} \;

# Fix React Fragment syntax
find src -name "*.tsx" -type f -exec sed -i 's/<>;/<>/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/<\/>;/<\/>/g' {} \;

echo "Syntax fixes completed!"