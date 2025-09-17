#!/bin/bash

echo "🚀 Starting quick merge conflict resolution..."

# Find and resolve conflicts in key files
find /workspace -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | head -100 | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        echo "Resolving conflicts in: $file"
        # Keep the version after ======= (usually the newer version)
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i 's/>>>>>>> [^[:space:]]*//g' "$file"
        sed -i '/=======/d' "$file"
    fi
done

echo "✅ Quick conflict resolution completed!"