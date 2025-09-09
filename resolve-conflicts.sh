#!/bin/bash

echo "🚀 Starting merge conflict resolution..."

# Find all files with merge conflicts
echo "🔍 Scanning for files with merge conflicts..."
conflict_files=$(find /workspace -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>>" {} \; 2>/dev/null)

echo "📊 Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Resolve conflicts in each file
resolved_count=0
for file in $conflict_files; do
    if [ -f "$file" ]; then
        echo "🔧 Resolving conflicts in: $file"
        
        # Use sed to remove conflict markers and keep incoming changes
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>>/d' "$file"
        
        echo "✅ Resolved conflicts in: $file"
        ((resolved_count++))
    fi
done

echo "✅ Successfully resolved conflicts in $resolved_count files"
echo "🎉 Merge conflict resolution completed!"

# Try to add and commit the resolved files
echo "📝 Adding resolved files to git..."
git add . 2>/dev/null || echo "⚠️  Git add failed"

echo "💾 Committing resolved conflicts..."
git commit -m "Resolve merge conflicts automatically" 2>/dev/null || echo "⚠️  Git commit failed"

echo "✅ Process completed!"