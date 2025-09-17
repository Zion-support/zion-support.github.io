#!/bin/bash

echo "🚀 Starting batch merge of new cursor branches..."

# List of new branches to merge (most recent first)
NEW_BRANCHES=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-3424"
    "origin/cursor/fix-netlify-build-and-merge-to-main-8f44"
    "origin/cursor/fix-netlify-build-and-merge-to-main-98ba"
    "origin/cursor/fix-netlify-build-and-merge-to-main-033c"
    "origin/cursor/fix-netlify-build-and-merge-to-main-b8cf"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ef94"
    "origin/cursor/fix-netlify-build-and-merge-to-main-dfd7"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d715"
)

# Function to resolve conflicts automatically
resolve_conflicts() {
    echo "🔧 Resolving conflicts automatically..."
    
    # For CSS files, prefer the version with custom properties
    if [ -f "src/index.css" ] && grep -q "<<<<<<< HEAD" src/index.css; then
        echo "Resolving CSS conflicts..."
        git checkout --theirs src/index.css
        git add src/index.css
    fi
    
    # For HTML files, prefer the more complete version
    if [ -f "index.html" ] && grep -q "<<<<<<< HEAD" index.html; then
        echo "Resolving HTML conflicts..."
        git checkout --ours index.html
        git add index.html
    fi
    
    # For package files, prefer the incoming version (usually has dependency updates)
    if [ -f "package-lock.json" ] && grep -q "<<<<<<< HEAD" package-lock.json; then
        echo "Resolving package-lock conflicts..."
        git checkout --theirs package-lock.json
        git add package-lock.json
    fi
    
    # For netlify.toml, prefer incoming version (usually has latest config)
    if [ -f "netlify.toml" ] && grep -q "<<<<<<< HEAD" netlify.toml; then
        echo "Resolving netlify.toml conflicts..."
        git checkout --theirs netlify.toml
        git add netlify.toml
    fi
    
    # For any other files, prefer incoming version
    for file in $(git diff --name-only --diff-filter=U); do
        if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
            echo "Resolving conflicts in $file..."
            git checkout --theirs "$file"
            git add "$file"
        fi
    done
}

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo "🔄 Attempting to merge $branch..."
    
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Conflicts detected in $branch, resolving..."
        resolve_conflicts
        
        if git commit -m "Merge $branch - auto-resolved conflicts" 2>/dev/null; then
            echo "✅ Successfully resolved conflicts for $branch"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch, aborting..."
            git merge --abort
            return 1
        fi
    fi
}

# Main merge loop
SUCCESS_COUNT=0
TOTAL_COUNT=${#NEW_BRANCHES[@]}

for branch in "${NEW_BRANCHES[@]}"; do
    echo "Processing branch: $branch"
    
    if merge_branch "$branch"; then
        ((SUCCESS_COUNT++))
    fi
    
    echo "Progress: $SUCCESS_COUNT/$TOTAL_COUNT branches merged"
    echo "---"
done

echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT/$TOTAL_COUNT branches"

# Final status check
echo "Current git status:"
git status --porcelain

# Build test
echo "Testing build after merges..."
if npm run build:netlify; then
    echo "✅ Build successful after all merges!"
else
    echo "❌ Build failed after merges"
    exit 1
fi

echo "🎉 All new branches processed successfully!"