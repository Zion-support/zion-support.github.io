#!/bin/bash

# Comprehensive Final Merge Script
set -e

echo "🚀 Starting Comprehensive Final Merge Process..."
echo "📅 $(date)"

# Function to safely merge branches
merge_branches_comprehensively() {
    local branch_pattern="$1"
    local max_branches="$2"
    
    echo "🔍 Processing branches matching: $branch_pattern"
    
    # Get branches matching pattern
    local branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
        grep "$branch_pattern" | \
        head -$max_branches)
    
    if [ -z "$branches" ]; then
        echo "⚠️  No branches found matching pattern: $branch_pattern"
        return 0
    fi
    
    local count=$(echo "$branches" | wc -w)
    echo "📊 Found $count branches to process"
    
    local successful=0
    local failed=0
    
    for branch in $branches; do
        local branch_name="${branch#origin/}"
        echo "🔄 Processing: $branch_name"
        
        # Try direct merge
        if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
            git commit -m "Merge $branch_name - $(date +%Y%m%d-%H%M%S)"
            ((successful++))
            echo "✅ Merged: $branch_name"
        else
            git merge --abort 2>/dev/null || true
            ((failed++))
            echo "❌ Failed: $branch_name"
        fi
        
        # Small delay
        sleep 0.02
    done
    
    echo "📊 Pattern '$branch_pattern' Results: ✅ $successful, ❌ $failed"
    return 0
}

# Merge different types of branches
echo ""
echo "🔄 Phase 1: Merging recent cursor branches..."
merge_branches_comprehensively "cursor/check-fix-push-and-merge-to-main" 50

echo ""
echo "🔄 Phase 2: Merging codex branches..."
merge_branches_comprehensively "codex" 20

echo ""
echo "🔄 Phase 3: Merging other cursor branches..."
merge_branches_comprehensively "cursor/" 30

echo ""
echo "🔄 Phase 4: Merging feature branches..."
merge_branches_comprehensively "feature/" 10

echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo ""
echo "🎉 Comprehensive merge process completed!"
echo "📅 Finished at: $(date)"