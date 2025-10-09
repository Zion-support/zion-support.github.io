#!/bin/bash

# Fix merge conflicts in all files
find /workspace/app -name "*.tsx" -exec sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' {} \;

# Fix any remaining merge conflict markers
find /workspace/app -name "*.tsx" -exec sed -i '/^=======/d' {} \;

echo "Merge conflicts fixed"