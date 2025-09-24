#!/bin/bash

echo "🚀 Starting simple merge conflict resolution..."

# Find and resolve conflicts in main files
echo "🔧 Resolving conflicts in main files..."

# Resolve conflicts by taking incoming changes
find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" | while read file; do
  if grep -q "<<<<<<< HEAD" "$file"; then
    echo "Resolving: $file"
    # Take the incoming changes (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i 's/>>>>>>> [^[:space:]]*//g' "$file"
  fi
done

echo "✅ Basic conflict resolution completed"