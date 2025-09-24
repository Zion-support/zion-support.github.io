#!/bin/bash

# Fix unescaped entities
find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | head -10 | xargs sed -i "s/'/\&apos;/g"
find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | head -10 | xargs sed -i 's/"/\&quot;/g'

# Fix Link imports
find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | head -10 | xargs sed -i 's/import React from '\''react'\'';/import React from '\''react'\'';\nimport Link from '\''next\/link'\'';/g'

# Replace <a> tags with Link
find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | head -10 | xargs sed -i 's/<a href="\([^"]*\)">/<Link href="\1">/g'
find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | head -10 | xargs sed -i 's/<\/a>/<\/Link>/g'

echo "Quick fixes applied!"