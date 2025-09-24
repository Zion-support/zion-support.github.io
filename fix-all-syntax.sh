#!/bin/bash

echo "Fixing all remaining syntax errors..."

# Fix malformed useState strings
find components -name "*.tsx" -exec sed -i "s/useState(''', ')/useState('')/g" {} \;

# Fix malformed spread operators
find components -name "*.tsx" -exec sed -i "s/\[item\.\.\./\[item, \.\.\./g" {} \;

# Fix malformed slice calls
find components -name "*.tsx" -exec sed -i "s/\.slice(05)/\.slice(0, 5)/g" {} \;

# Fix any remaining malformed quotes
find components -name "*.tsx" -exec sed -i "s/''/''/g" {} \;

# Fix missing commas in function parameters
find components -name "*.tsx" -exec sed -i "s/\([a-zA-Z_][a-zA-Z0-9_]*\)'\''/\1', /g" {} \;

echo "All syntax errors fixed!"