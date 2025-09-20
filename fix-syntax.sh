#!/bin/bash

# Fix syntax errors in React components
find src -name "*.tsx" -type f -exec sed -i 's/const \([A-Za-z][A-Za-z0-9]*\): React\.FC = () => {;/const \1: React.FC = () => {/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/return (;/return (/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/);/);/g' {} \;
find src -name "*.tsx" -type f -exec sed -i 's/};/};/g' {} \;

echo "Syntax fixes applied"