#!/bin/bash

# Fixed Bulk Merge Script
set -e

echo "🚀 Starting fixed bulk merge process..."

# Function to merge branch with conflict resolution
merge_branch_with_resolution() {
    local branch="$1"
    local branch_name="${branch#origin/}"
    
    echo "🔄 Merging branch: $branch_name"
    
    if git merge "$branch" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving by keeping our changes..."
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
