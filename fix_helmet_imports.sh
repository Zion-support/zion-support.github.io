#!/bin/bash

# Find all page.tsx files that have Helmet usage but missing import
find /workspace/app -name "page.tsx" -exec grep -l "Helmet" {} \; | while read file; do
  # Check if the file has Helmet usage but no import
  if grep -q "Helmet" "$file" && ! grep -q "import.*Helmet" "$file"; then
    echo "Fixing $file"
    # Add the import after the React import
    sed -i '/import React from '\''react'\'';/a import { Helmet } from '\''react-helmet-async'\'';' "$file"
    
    # Wrap the content in a proper function if it's not already
    if ! grep -q "export default function" "$file"; then
      # Add function wrapper
      sed -i '1a export default function Page() {\n  return (' "$file"
      echo '  );' >> "$file"
      echo '}' >> "$file"
    fi
  fi
done

echo "Helmet imports fixed!"
