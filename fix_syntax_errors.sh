#!/bin/bash

# Fix common syntax errors in TSX files
find app -name "*.tsx" -type f -exec sed -i 's/,'\'';/,/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/'\'';/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/'\''/g' {} \;
find app -name "*.tsx" -type f -exec sed -i 's/'\''/g' {} \;

echo "Syntax errors fixed"
