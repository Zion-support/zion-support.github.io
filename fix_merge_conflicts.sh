#!/bin/bash

# Fix merge conflicts in all tsx files
find /workspace -name "*.tsx" -exec sed -i '/^<<<<<<< HEAD/,/^>>>>>>> cursor/d' {} \;

# Remove any remaining merge conflict markers
find /workspace -name "*.tsx" -exec sed -i '/^=======/d' {} \;

echo "Merge conflicts fixed in all tsx files"