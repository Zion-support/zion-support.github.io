#!/bin/bash

# Find all problematic files and fix common JSX syntax issues
find ./app -name "*.tsx" | while read file; do
  if grep -q "Expected '</', got 'className'" "$file" 2>/dev/null || grep -q "Expected '</', got 'jsx text" "$file" 2>/dev/null; then
    echo "Fixing JSX syntax in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Fix common issues
    sed -i 's/<\/div>$/<\/div>/g' "$file"
    sed -i 's/<\/section>$/<\/section>/g' "$file"
    sed -i 's/<\/main>$/<\/main>/g' "$file"
    
    # Remove any orphaned closing tags that might be causing issues
    sed -i '/^[[:space:]]*<\/[^>]*>[[:space:]]*$/d' "$file"
    
    # Ensure proper JSX structure
    python3 -c "
import re
import sys

with open('$file', 'r') as f:
    content = f.read()

# Fix common JSX issues
content = re.sub(r'</div>\s*<h3', '</div>\n          </div>\n          <div class=\"text-center p-6\">\n            <h3', content)
content = re.sub(r'</div>\s*<p class=\"text-gray-600\">', '</div>\n            <p class=\"text-gray-600\">', content)

with open('$file', 'w') as f:
    f.write(content)
"
  fi
done

echo "JSX syntax fixes applied!"