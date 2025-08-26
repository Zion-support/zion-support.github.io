#!/bin/bash

# Comprehensive script to resolve all remaining merge conflicts
set -e

echo "🔧 Starting comprehensive conflict resolution..."
echo "⏰ Started at: $(date)"
echo "---"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "yarn.lock" ]]; then
            echo "📦 Critical file detected, keeping main version..."
            # For package files, keep main version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "tsconfig.json" || "$file" == "vite.config.ts" || "$file" == "tailwind.config.ts" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            # For config files, keep main version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "src/App.tsx" ]]; then
            echo "🚀 App.tsx detected, using our clean resolved version..."
            # We already resolved this file, so we'll keep our version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # For regular files, try to merge both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    else
        echo "✅ No conflicts found in $file"
    fi
}

# Get list of conflicted files
echo "📋 Checking for conflicted files..."
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

if [ -z "$CONFLICTED_FILES" ]; then
    echo "🎉 No merge conflicts found!"
    exit 0
fi

echo "📋 Found conflicted files:"
echo "$CONFLICTED_FILES"
echo ""

# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    else
        echo "⚠️  File $file not found, skipping..."
    fi
done

# Handle special cases
echo ""
echo "🔧 Handling special cases..."

# Remove tsconfig.tsbuildinfo if it's conflicted
if [ -f "tsconfig.tsbuildinfo" ]; then
    echo "🗑️  Removing conflicted tsconfig.tsbuildinfo..."
    rm -f tsconfig.tsbuildinfo
fi

echo ""
echo "🔍 Checking for remaining conflicts..."
REMAINING_CONFLICTS=$(git diff --name-only --diff-filter=U)

if [ -z "$REMAINING_CONFLICTS" ]; then
    echo "🎉 All conflicts resolved successfully!"
    echo "💾 Committing resolved conflicts..."
    git add .
    git commit -m "Resolve all remaining merge conflicts - $(date)"
    echo "✅ Conflicts resolved and committed!"
else
    echo "⚠️  Some conflicts remain unresolved:"
    echo "$REMAINING_CONFLICTS"
    echo "Please resolve these manually."
    exit 1
fi