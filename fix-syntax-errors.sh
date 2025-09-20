#!/bin/bash

# Fix common syntax errors in React/TypeScript files

echo "Fixing syntax errors in React/TypeScript files..."

# Fix files with semicolons after JSX elements
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/^\([[:space:]]*\)<\([^>]*\)>;/\1<\2>/g' {} \;

# Fix interface declarations with commas
find /workspace/src -name "*.ts" -o -name "*.tsx" -type f -exec sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\): \([^;]*\),/\1: \2/g' {} \;

# Fix return statements with semicolons
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/^\([[:space:]]*\)return (\([^)]*\));/\1return (\2)/g' {} \;

# Fix JSX elements with semicolons at the end
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/\([^;]\)>;/\1>/g' {} \;

# Fix multiline JSX with semicolons
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/\([[:space:]]*\)\(<[^>]*>\);/\1\2/g' {} \;

echo "Syntax error fixes applied."