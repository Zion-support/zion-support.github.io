#!/bin/bash

echo "Fixing tag arrays in components..."

# Fix malformed tag arrays
find components -name "*.tsx" -exec sed -i "s/tags: \[''\([^']*\)', '\([^']*\)'\([^']*\)'\([^']*\)'\]/tags: ['\1', '\2', '\3', '\4']/g" {} \;

# Fix any remaining malformed quotes in tags
find components -name "*.tsx" -exec sed -i "s/''/'\''/g" {} \;

# Fix missing commas in arrays
find components -name "*.tsx" -exec sed -i "s/'\('\)/'\1', /g" {} \;

echo "Tag arrays fixed!"