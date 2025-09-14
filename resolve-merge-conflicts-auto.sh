#!/bin/bash

# Script to automatically resolve merge conflicts
set -e

echo "🔧 Starting automatic merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_file_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return 0
    fi
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "        elif [[ "$file" == "package-lock.json" || "$file" == "package-lock.json.backup"* ]]; then
            echo "📦 Package-lock detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "tsconfig.tsbuildinfo" ]]; then
            echo "⚙️  Build info file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            echo "🎨 CSS file detected, merging styles..."
            sed -i '/        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            echo "💻 Code file detected, attempting intelligent merge..."
            # For code files, try to keep both versions where possible
            sed -i '/        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            echo "⚙️  YAML file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.json" ]]; then
            echo "📄 JSON file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.md" ]]; then
            echo "📝 Markdown file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.txt" ]]; then
            echo "📄 Text file detected, keeping main version..."
            sed -i '/        else
            echo "📝 Regular file, removing conflict markers..."
            sed -i '/        fi
        
        echo "✅ Resolved conflicts in $file"
    else
        echo "ℹ️  No conflicts found in $file"
    fi
}

# Get list of conflicted files
echo "🔍 Finding conflicted files..."
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")

if [ -z "$CONFLICTED_FILES" ]; then
    echo "✅ No conflicted files found"
    exit 0
fi

echo "📋 Found conflicted files:"
echo "$CONFLICTED_FILES"

# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    resolve_file_conflicts "$file"
done

# Add all resolved files
echo "📦 Adding resolved files..."
git add .

# Check if there are still conflicts
REMAINING_CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")

if [ -z "$REMAINING_CONFLICTS" ]; then
    echo "✅ All conflicts resolved successfully!"
    echo "💾 Committing merge..."
    git commit -m "Resolve merge conflicts automatically - $(date)"
    echo "🎉 Merge conflicts resolved and committed!"
else
    echo "⚠️  Some conflicts remain unresolved:"
    echo "$REMAINING_CONFLICTS"
    echo "🔧 Please resolve remaining conflicts manually"
    exit 1
fi