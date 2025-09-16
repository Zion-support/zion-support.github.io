#!/bin/bash

echo "Fixing all divbutton and diva issues in the codebase..."

# Find all files with divbutton or diva and fix them
find /workspace/src -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | while read file; do
  if grep -q "divbutton\|diva" "$file"; then
    echo "Fixing $file..."
    # Replace divbutton with button
    sed -i 's/divbutton/button/g' "$file"
    # Replace diva with a
    sed -i 's/diva/a/g' "$file"
  fi
done

echo "All divbutton and diva issues fixed!"