#!/bin/bash

echo "🔧 Starting comprehensive issue fixing..."

# Fix 1: Remove all backup files and duplicates
echo "📁 Removing backup and duplicate files..."
find . -name "*.backup*" -type f -delete
find . -name "*.js.jsx" -type f -delete
find . -name "*.jsx.backup*" -type f -delete
find . -name "*.cleanup-backup*" -type f -delete

# Fix 2: Fix Next.js imports in all files
echo "🔗 Fixing Next.js imports..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's/import Link from '\''next\/link'\''/import { Link } from '\''react-router-dom'\''/g'
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs sed -i 's/import.*from '\''next\/.*'\''//g'

# Fix 3: Fix missing React imports
echo "⚛️ Fixing missing React imports..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  if ! grep -q "import React" "$file" && ! grep -q "export default function" "$file"; then
    continue
  fi
  
  if ! grep -q "import React" "$file" && grep -q "useState\|useEffect\|useCallback\|useMemo"; then
    sed -i '1i import React, { useState, useEffect, useCallback, useMemo } from '\''react'\'';' "$file"
  elif ! grep -q "import React" "$file"; then
    sed -i '1i import React from '\''react'\'';' "$file"
  fi
done

# Fix 4: Fix missing useState imports
echo "🔄 Fixing missing useState imports..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  if grep -q "useState" "$file" && ! grep -q "useState" "$file" | grep -q "import"; then
    if grep -q "import React" "$file"; then
      sed -i 's/import React from '\''react'\''/import React, { useState } from '\''react'\''/g' "$file"
    else
      sed -i '1i import React, { useState } from '\''react'\'';' "$file"
    fi
  fi
done

# Fix 5: Remove duplicate export default declarations
echo "🚫 Removing duplicate exports..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  # Count export default function declarations
  count=$(grep -c "export default function" "$file" 2>/dev/null || echo 0)
  if [ "$count" -gt 1 ]; then
    echo "Fixing duplicate exports in $file"
    # Keep only the last export default function
    awk '/export default function/ { if (++count > 1) next } { print }' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
done

# Fix 6: Clean up empty lines and fix basic syntax
echo "🧹 Cleaning up files..."
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read file; do
  # Remove multiple empty lines
  sed -i '/^$/N;/^\n$/D' "$file"
  # Remove trailing spaces
  sed -i 's/[[:space:]]*$//' "$file"
done

echo "✅ Issue fixing completed!"
echo "📊 Files cleaned up and imports fixed"