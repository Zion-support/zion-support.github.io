#!/bin/bash

echo "Applying comprehensive syntax fixes..."

# Fix JSX elements with semicolons
find /workspace/src -name "*.tsx" -exec sed -i 's/\(<[^>]*>\);/\1/g' {} \;

# Fix interface declarations
find /workspace/src -name "*.ts" -o -name "*.tsx" -exec sed -i 's/\([a-zA-Z_][a-zA-Z0-9_]*\): \([^;]*\),/\1: \2/g' {} \;

# Fix import statements
find /workspace/src -name "*.ts" -o -name "*.tsx" -exec sed -i 's/import { \([^}]*\); \([^}]*\) }/import { \1, \2 }/g' {} \;

# Fix return statements
find /workspace/src -name "*.tsx" -exec sed -i 's/^\([[:space:]]*\)return (\([^)]*\));/\1return (\2)/g' {} \;

echo "Comprehensive fixes applied."