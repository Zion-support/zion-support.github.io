#!/bin/bash

echo "🔧 Starting merge conflict resolution..."

# Find and resolve merge conflicts
find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.sh" -o -name "*.cjs" \) -exec grep -l ")
    sed -i '/
    sed -i '/
    
    echo "✅ Resolved: $file"
done

echo "🎉 Merge conflict resolution completed!"

# Stage all resolved files
git add .

echo "📦 Files staged for commit"