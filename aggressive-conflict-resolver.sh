#!/bin/bash

echo "🚀 Starting aggressive merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_file() {
    local file="$1"
    if [ -f "$file" ] && grep -q "
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d; /^
        # Clean up duplicate lines
        awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        # Remove excessive empty lines
        sed -i '/^$/N;/^\n$/d' "$file"
        echo "✅ Resolved: $file"
    fi
}

# Resolve conflicts in all files
echo "🔍 Finding files with conflicts..."
find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) -exec grep -l "" {} \; | while read file; do
    resolve_file "$file"
done

echo "🎉 Aggressive conflict resolution completed!"

# Count remaining conflicts
remaining=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) -exec grep -l "" {} \; | wc -l)

echo "📊 Remaining conflicts: $remaining"

if [ "$remaining" -eq 0 ]; then
    echo "🎊 All conflicts resolved successfully!"
else
    echo "⚠️  Some conflicts may still exist in backup files or non-standard files"
fi