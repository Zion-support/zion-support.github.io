#!/bin/bash

# Script to resolve all merge conflicts automatically
set -e

echo "🔧 Resolving all merge conflicts..."

# Get all files with conflicts
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

echo "📋 Found conflicted files:"
echo "$CONFLICTED_FILES"

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    if [ ! -f "$file" ]; then
        echo "⚠️  File $file does not exist, skipping..."
        return
    fi
    
    # For critical files, keep main version (theirs)
    if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" || "$file" == "yarn.lock" ]]; then
        echo "📦 Critical file, keeping main version..."
        git checkout --theirs "$file"
        return
    fi
    
    # For deleted files, remove them
    if [[ "$file" =~ .*\.(tsx|jsx|ts|js)$ ]] && [[ "$file" =~ (deleted|remove|cleanup) ]]; then
        echo "🗑️  Removing deleted file: $file"
        git rm "$file" 2>/dev/null || rm -f "$file"
        return
    fi
    
    # For most other files, keep our version (ours)
    echo "📝 Keeping our version of: $file"
    git checkout --ours "$file" 2>/dev/null || {
        echo "⚠️  Could not checkout ours for $file, trying to resolve manually..."
        
        # Remove conflict markers manually
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> [^\n]*/d' "$file"
    }
}

# Process each conflicted file
for file in $CONFLICTED_FILES; do
    if [ -n "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Add all resolved files
echo "📝 Adding resolved files..."
git add .

# Commit the resolved conflicts
echo "💾 Committing resolved conflicts..."
git commit -m "Resolve merge conflicts - $(date)"

echo "✅ All conflicts resolved and committed!"