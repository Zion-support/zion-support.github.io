#!/bin/bash

<<<<<<< HEAD
# Fix common syntax errors in TypeScript/React files
=======
# Fix common syntax errors in React/TypeScript files

echo "Fixing syntax errors in React/TypeScript files..."

# Fix files with semicolons after JSX elements
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/^\([[:space:]]*\)<\([^>]*\)>;/\1<\2>/g' {} \;
>>>>>>> pr-22703

# Fix interface declarations with commas
find /workspace/src -name "*.ts" -o -name "*.tsx" -type f -exec sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\): \([^;]*\),/\1: \2/g' {} \;

# Fix return statements with semicolons
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/^\([[:space:]]*\)return (\([^)]*\));/\1return (\2)/g' {} \;

# Fix JSX elements with semicolons at the end
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/\([^;]\)>;/\1>/g' {} \;

# Fix multiline JSX with semicolons
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/\([[:space:]]*\)\(<[^>]*>\);/\1\2/g' {} \;

<<<<<<< HEAD
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
=======
echo "Syntax error fixes applied."
>>>>>>> pr-22703
