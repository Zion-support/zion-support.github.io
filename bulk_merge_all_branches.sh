#!/bin/bash

# Bulk Merge All Branches Script
# This script will merge all remaining branches into main

set -e

echo "🚀 Starting bulk merge of all remaining branches..."

# Function to merge branch with conflict resolution
merge_branch_with_resolution() {
    local branch_name="$1"
    echo "🔄 Merging branch: $branch_name"
    
    if git merge "origin/$branch_name" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Conflicts detected, resolving by keeping our changes..."
        # Resolve conflicts by keeping our version
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
