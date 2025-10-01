#!/bin/bash

echo "🔧 Quick merge conflict resolution..."

# Resolve conflicts in main files only
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | \
  grep -v "backup" | \
  grep -v "node_modules" | \
  grep -v "dist" | \
  while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
      echo "Resolving: $file"
      # Remove conflict markers and keep the first version
      sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
      sed -i '/^>>>>>>> /d' "$file"
    fi
  done

echo "✅ Quick conflict resolution complete"