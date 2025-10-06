#!/bin/bash

# Script to merge open PRs and resolve conflicts
set -e

echo "🚀 Starting PR merge process..."

# Function to merge a branch safely
merge_branch() {
    local branch_name=$1
    echo "📋 Processing branch: $branch_name"
    
    # Fetch the branch
    git fetch origin $branch_name:$branch_name 2>/dev/null || {
        echo "  ⚠️ Branch $branch_name not found on remote, skipping"
        return 1
    }
    
    # Checkout the branch
    git checkout $branch_name 2>/dev/null || {
        echo "  ⚠️ Failed to checkout $branch_name, skipping"
        return 1
    }
    
    # Check for conflicts and resolve them
    find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | while read file; do
        if grep -q "" "$file" 2>/dev/null; then
            echo "  🔧 Resolving conflicts in $file"
            # Auto-resolve conflicts
            sed -i '/^/,/^        fi