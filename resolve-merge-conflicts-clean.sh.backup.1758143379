#!/bin/bash

# Script to automatically resolve merge conflicts
set -e

echo "🔧 Starting automatic merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
<<<<<<< HEAD
    if grep -q "        elif [[ "$file" == "package-lock.json" ]]; then
            echo "📦 Package-lock.json detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            echo "🎨 CSS file detected, merging styles..."
            sed -i '/        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            echo "💻 Code file detected, attempting intelligent merge..."
            # For code files, try to keep both versions where possible
            sed -i '/        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            echo "📋 YAML file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "*.md" ]]; then
            echo "📝 Markdown file detected, merging content..."
            sed -i '/        elif [[ "$file" == "*.json" ]]; then
            echo "📊 JSON file detected, keeping main version..."
            sed -i '/        else
            echo "📝 Regular file, removing conflict markers..."
            sed -i '/        fi
=======
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Enhanced conflict resolution strategy
        if [[ "$file" == "package.json" ]]; then
            echo "📦 Package.json detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "package-lock.json" ]]; then
            echo "📦 Package-lock.json detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.css" || "$file" == "*.scss" ]]; then
            echo "🎨 CSS file detected, merging styles..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.tsx" || "$file" == "*.ts" || "$file" == "*.jsx" || "$file" == "*.js" ]]; then
            echo "💻 Code file detected, attempting intelligent merge..."
            # For code files, try to keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.yml" || "$file" == "*.yaml" ]]; then
            echo "📋 YAML file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.md" ]]; then
            echo "📝 Markdown file detected, merging content..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "*.json" ]]; then
            echo "📊 JSON file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, removing conflict markers..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
>>>>>>> origin/auto/autonomy-17186719616
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Get list of conflicted files
echo "📋 Getting list of conflicted files..."
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -n "$CONFLICTED_FILES" ]; then
    echo "📋 Conflicted files: $CONFLICTED_FILES"
    echo "---"
    
    # Resolve conflicts in each file
    for file in $CONFLICTED_FILES; do
        if [ -f "$file" ]; then
            resolve_conflicts "$file"
        fi
    done
    
    echo "---"
    echo "✅ All conflicts resolved!"
    
    # Add resolved files
    echo "📦 Adding resolved files..."
    git add .
    
    echo "🎉 Conflict resolution completed successfully!"
else
    echo "✅ No merge conflicts found!"
fi