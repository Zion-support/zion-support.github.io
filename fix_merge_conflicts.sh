#!/bin/bash

# Fix merge conflicts by keeping HEAD version
find /workspace/app/components -name "*.tsx" -exec sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /{ /^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d; }' {} \;

echo "Fixed merge conflicts in component files"