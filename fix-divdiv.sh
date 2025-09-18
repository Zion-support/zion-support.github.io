#!/bin/bash

echo "Fixing all divdiv issues in the codebase..."

# Find all files with divdiv and fix them
find /workspace/src -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | while read file; do
  if grep -q "divdiv" "$file"; then
    echo "Fixing $file..."
    # Replace divdiv with div
    sed -i 's/divdiv/div/g' "$file"
  fi
done

echo "All divdiv issues fixed!"