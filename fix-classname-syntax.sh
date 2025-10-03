#!/bin/bash

# Script to fix className syntax errors in TSX files
# This fixes the pattern: className: "..." to className="..."

echo "Fixing className syntax errors..."

# Find all TSX files and fix the className syntax
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/className: "/className="/g' {} \;

# Fix href syntax errors as well
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/href: "/href="/g' {} \;

# Remove the malformed characters at the end of lines
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/";,"$//g' {} \;
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/";$//g' {} \;
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/",$//g' {} \;

# Fix spaces in hover: bg-white to hover:bg-white
find /workspace/src -name "*.tsx" -type f -exec sed -i 's/hover: bg-/hover:bg-/g' {} \;

echo "Fixed className syntax errors in TSX files"