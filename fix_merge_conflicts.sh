#!/bin/bash

# Fix merge conflicts by removing conflict markers and keeping the newer version
find /workspace/app -name "*.tsx" -exec sed -i '/<<<<<<< HEAD/,/>>>>>>> cursor/d' {} \;

# Remove any remaining conflict markers
find /workspace/app -name "*.tsx" -exec sed -i '/=======/d' {} \;
find /workspace/app -name "*.tsx" -exec sed -i '/<<<<<<< HEAD/d' {} \;
find /workspace/app -name "*.tsx" -exec sed -i '/>>>>>>> cursor/d' {} \;

echo "Merge conflicts fixed!"