#!/bin/bash

# Fix SVG URL encoding issues in all files
find /workspace -name "*.tsx" -type f -exec sed -i 's|bg-\[url('\''data:image/svg+xml,.*?'\'')\]|bg-gradient-to-br from-white/5 to-transparent|g' {} \;

echo "Fixed SVG URL encoding issues in all .tsx files"