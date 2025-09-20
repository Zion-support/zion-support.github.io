#!/bin/bash

echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Check if file has merge conflicts
        
        # Clean up any remaining conflict markers
        
        # Remove empty lines that might have been left
        sed -i '/^[[:space:]]*$/d' "$file"
        
        echo "  ✅ Conflicts resolved in: $file"
    else
        echo "  ✅ No conflicts found in: $file"
    fi
}

# Resolve conflicts in data files
echo "📁 Resolving conflicts in data files..."
for file in data/*.ts; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Resolve conflicts in src files
echo "📁 Resolving conflicts in src files..."
find src -name "*.ts" -o -name "*.tsx" | while read file; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Resolve conflicts in pages files
echo "📁 Resolving conflicts in pages files..."
find pages -name "*.ts" -o -name "*.tsx" | while read file; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Resolve conflicts in components files
echo "📁 Resolving conflicts in components files..."
find components -name "*.ts" -o -name "*.tsx" | while read file; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Resolve conflicts in GitHub workflow files
echo "📁 Resolving conflicts in GitHub workflow files..."
find .github/workflows -name "*.yml" | while read file; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Resolve conflicts in other important files
echo "📁 Resolving conflicts in other important files..."
for file in public/favicon.svg offline.html; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "🔍 Checking for remaining merge conflicts..."
