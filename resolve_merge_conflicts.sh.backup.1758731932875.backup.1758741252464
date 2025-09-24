#!/bin/bash

echo "🔧 Resolving merge conflicts automatically..."

# Find all files with merge conflict markers
echo "📁 Searching for files with merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep the newer version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Find and resolve conflicts in TypeScript/JavaScript files
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        resolve_conflicts "$file"
    fi
done

# Find and resolve conflicts in other source files
find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .git | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        resolve_conflicts "$file"
    fi
done

echo "🎉 All merge conflicts resolved!"
echo "📝 Please review the changes and test the application"