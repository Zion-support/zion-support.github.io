#!/bin/bash

echo "🔧 Fixing keyword array syntax issues..."

# Fix missing commas in keyword arrays
find /workspace/app -name "*.tsx" -exec sed -i "s/'\([^']*\)'\([^']\)/'\\1', '\\2/g" {} \;
find /workspace/app -name "*.tsx" -exec sed -i "s/'\([^']*\)'\([^']\)/'\\1', '\\2/g" {} \;

# Fix specific patterns
find /workspace/app -name "*.tsx" -exec sed -i "s/'\([^']*\)'\([^']\)/'\\1', '\\2/g" {} \;

echo "✅ Keyword syntax issues fixed!"