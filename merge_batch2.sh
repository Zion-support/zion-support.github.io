#!/bin/bash

# Continue merging additional branches in batch 2
set -e

echo "🚀 Starting batch 2 merge process..."

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "📦 Attempting to merge branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" || { echo "❌ Failed to fetch $branch"; return 1; }
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # List files with conflicts
        conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflict_files" ]; then
            echo "🔧 Resolving conflicts in: $conflict_files"
            
            # For each conflicted file, try to resolve automatically
            for file in $conflict_files; do
                echo "  📝 Processing: $file"
                
                # Check if file exists
                if [ -f "$file" ]; then
                    # Try to resolve common conflicts
                    if grep -q "" "$file"; then
                        echo "    🔄 Resolving merge conflicts in $file"
                        sed -i '//,/                        sed -i '//d' "$file" 2>/dev/null || true
                        
                        sed -i '//,/                        sed -i '//d' "$file" 2>/dev/null || true
                        