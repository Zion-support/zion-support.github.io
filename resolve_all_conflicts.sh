#!/bin/bash

echo "🔧 Resolving ALL remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep the newer version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Find and resolve conflicts in all source files
echo "📁 Searching for files with remaining merge conflicts..."

# Find all files with merge conflict markers
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" \) | grep -v node_modules | grep -v .git | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        resolve_conflicts "$file"
    fi
done

# Also check for ======= markers (orphaned from incomplete conflict resolution)
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.md" \) | grep -v node_modules | grep -v .git | while read -r file; do
    if grep -q "=======" "$file" 2>/dev/null; then
        echo "🔧 Cleaning orphaned conflict markers in: $file"
        sed -i '/=======/d' "$file"
        echo "✅ Cleaned: $file"
    fi
done

echo "🎉 All merge conflicts resolved!"
echo "📝 Please review the changes and test the application"