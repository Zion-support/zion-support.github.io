#!/bin/bash

echo "🔧 Resolving merge conflicts..."

# Find and resolve conflicts in main files (not backup directories)
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | \
  grep -v "backup" | \
  grep -v "node_modules" | \
  while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
      echo "Resolving conflicts in: $file"
      # Remove conflict markers and keep the main branch version
      sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
      sed -i '/^>>>>>>> /d' "$file"
    fi
  done

echo "✅ Merge conflicts resolved"