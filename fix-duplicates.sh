#!/bin/bash

# Find all .tsx files with duplicate React imports and fix them
find app -name "*.tsx" -type f | while read file; do
  # Check if file has duplicate React imports
  if grep -q "import React.*from 'react';" "$file" && [ $(grep -c "import React.*from 'react';" "$file") -gt 1 ]; then
    echo "Fixing duplicates in: $file"
    # Remove duplicate lines, keeping only the first one
    awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
  fi
done

echo "Duplicate React imports fixed!"