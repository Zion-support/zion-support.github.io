#!/bin/bash

echo "Fixing final syntax errors..."

# Fix malformed className strings with extra quotes
find components -name "*.tsx" -exec sed -i "s/: ''', '/: ''/g" {} \;

# Fix malformed motion properties
find components -name "*.tsx" -exec sed -i "s/opacity: 0y: /opacity: 0, y: /g" {} \;
find components -name "*.tsx" -exec sed -i "s/opacity: 1y: /opacity: 1, y: /g" {} \;
find components -name "*.tsx" -exec sed -i "s/scale: 0\.9opacity: /scale: 0.9, opacity: /g" {} \;
find components -name "*.tsx" -exec sed -i "s/scale: 1opacity: /scale: 1, opacity: /g" {} \;

# Fix any remaining malformed quotes in strings
find components -name "*.tsx" -exec sed -i "s/'''/'/g" {} \;

echo "Final syntax errors fixed!"