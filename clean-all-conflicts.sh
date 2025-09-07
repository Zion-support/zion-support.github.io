#!/bin/bash

echo "🧹 Cleaning all merge conflicts..."

# Remove all conflict markers from all files
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" -o -name "*.md" \) -exec sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' {} \; 2>/dev/null

echo "✅ All conflict markers removed!"

# Count remaining conflicts
remaining=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" -o -name "*.md" \) -exec grep -l "<<<<<<< HEAD" {} \; 2>/dev/null | wc -l)

echo "📊 Remaining conflicts: $remaining"

if [ "$remaining" -eq 0 ]; then
    echo "🎉 All conflicts resolved successfully!"
else
    echo "⚠️  Some conflicts may still exist"
fi