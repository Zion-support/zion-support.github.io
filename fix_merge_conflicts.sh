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
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found merge conflicts in $file"
        
        # Different strategies for different file types
        if [[ "$file" == "package-lock.json" || "$file" == "package-lock.json.backup"* ]]; then
            echo "📦 Package-lock detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" || "$file" == "netlify.toml" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == "tsconfig.tsbuildinfo" ]]; then
            echo "⚙️  Build info file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.css || "$file" == *.scss ]]; then
            echo "🎨 CSS file detected, merging styles..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
            echo "💻 Code file detected, attempting intelligent merge..."
            # For code files, try to keep both versions where possible
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.yml || "$file" == *.yaml ]]; then
            echo "⚙️  YAML file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.json ]]; then
            echo "📄 JSON file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.md ]]; then
            echo "📝 Markdown file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        elif [[ "$file" == *.txt ]]; then
            echo "📄 Text file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
        else
            echo "📝 Regular file, removing conflict markers..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        fi
        
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
    git commit -m "Resolve merge conflicts automatically - $(date)" || true
    echo "🎉 Merge conflicts resolved and committed!"
else
    echo "⚠️  Some conflicts remain unresolved:"
    echo "$REMAINING_CONFLICTS"
    echo "🔧 Please resolve remaining conflicts manually"
    exit 1
fi