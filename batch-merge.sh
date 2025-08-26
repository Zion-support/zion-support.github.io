#!/bin/bash

# Zion App Batch Merge Script
# This script will merge multiple branches efficiently

set -e

echo "🚀 Starting Zion App Batch Merge Process"
echo "========================================"

# Function to merge a branch and resolve conflicts
merge_branch_with_resolution() {
    local branch_name=$1
    echo "📦 Merging: $branch_name"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "❌ Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Try to merge
    if git merge "origin/$branch_name" --no-commit --no-ff; then
        echo "✅ Successfully merged $branch_name"
        git commit -m "Merge $branch_name: Automated merge with conflict resolution"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch_name"
        
        # Resolve conflicts by using branch versions for common files
        local conflicted_files=$(git status --porcelain | grep "^UU\|^UD\|^DU" | awk '{print $2}')
        
        for file in $conflicted_files; do
            echo "🔧 Resolving conflicts in: $file"
            if git show "origin/$branch_name:$file" > "${file}.new" 2>/dev/null; then
                mv "${file}.new" "$file"
                echo "✅ Resolved $file using branch version"
            else
                echo "⚠️  Could not resolve $file automatically"
            fi
        done
        
        # Add all resolved files
        git add .
        
        # Check if all conflicts are resolved
        if git status --porcelain | grep -q "^UU\|^UD\|^DU"; then
            echo "❌ Some conflicts remain unresolved, aborting merge"
            git merge --abort
            return 1
        else
            echo "✅ All conflicts resolved, committing merge"
            git commit -m "Merge $branch_name: Automated merge with conflict resolution"
            return 0
        fi
    fi
}

# List of branches to merge (using branches that actually exist)
branches_to_merge=(
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-11ef"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-18ec"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-2002"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-217b"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-21bc"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-27a1"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-2868"
)

echo "📋 Attempting to merge ${#branches_to_merge[@]} branches"

successful_merges=0
failed_merges=0

for branch in "${branches_to_merge[@]}"; do
    echo ""
    echo "🎯 Processing: $branch"
    if merge_branch_with_resolution "$branch"; then
        ((successful_merges++))
        echo "✅ Successfully merged: $branch"
    else
        ((failed_merges++))
        echo "❌ Failed to merge: $branch"
    fi
done

echo ""
echo "🏁 Batch merge completed!"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"
echo "📝 Check git status for current state"