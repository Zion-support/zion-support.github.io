#!/bin/bash

# Efficient Batch Merge Script
set -e

echo "🚀 Starting Efficient Batch Merge Process..."
echo "📅 $(date)"

# Function to merge branches in batches
merge_batch() {
    local branch_pattern="$1"
    local max_branches="$2"
    local batch_name="$3"
    
    echo "🔄 Processing $batch_name batch..."
    
    # Get branches matching pattern
    local branches=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin | \
        grep "$branch_pattern" | \
        head -$max_branches)
    
    if [ -z "$branches" ]; then
        echo "⚠️  No branches found for pattern: $branch_pattern"
        return 0
    fi
    
    local count=$(echo "$branches" | wc -w)
    echo "📊 Found $count branches in $batch_name batch"
    
    local successful=0
    local failed=0
    
    for branch in $branches; do
        local branch_name="${branch#origin/}"
        
        # Check if already merged
        if git merge-base --is-ancestor "$branch" main 2>/dev/null; then
            echo "✅ $branch_name already merged, skipping..."
            continue
        fi
        
        echo "🔄 Merging: $branch_name"
        
        # Try direct merge
        if git merge "$branch" --no-ff -m "Merge $branch_name - batch processing $(date +%Y%m%d-%H%M%S)" 2>/dev/null; then
            ((successful++))
            echo "✅ Merged: $branch_name"
        else
            # Auto-resolve conflicts
            git merge --abort 2>/dev/null || true
            if git merge "$branch" --no-commit --no-ff 2>/dev/null; then
                git commit -m "Merge $branch_name - auto-resolved - $(date +%Y%m%d-%H%M%S)"
                ((successful++))
                echo "✅ Merged with auto-resolution: $branch_name"
            else
                # Try conflict resolution
                conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
                if [ -n "$conflicted_files" ]; then
                    for file in $conflicted_files; do
                        if [ -f "$file" ]; then
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                            git add "$file"
                        fi
                    done
                    if git commit -m "Merge $branch_name - resolved conflicts - $(date +%Y%m%d-%H%M%S)"; then
                        ((successful++))
                        echo "✅ Merged with conflict resolution: $branch_name"
                    else
                        git merge --abort 2>/dev/null || true
                        ((failed++))
                        echo "❌ Failed: $branch_name"
                    fi
                else
                    git merge --abort 2>/dev/null || true
                    ((failed++))
                    echo "❌ Failed: $branch_name"
                fi
            fi
        fi
        
        # Small delay
        sleep 0.05
    done
    
    echo "📊 $batch_name Results: ✅ $successful, ❌ $failed"
    return 0
}

# Merge different types of branches in batches
echo ""
echo "🔄 Phase 1: Merging recent cursor/check-fix branches..."
merge_batch "cursor/check-fix-push-and-merge-to-main" 20 "Cursor Check-Fix"

echo ""
echo "🔄 Phase 2: Merging other cursor branches..."
merge_batch "cursor/" 15 "Cursor General"

echo ""
echo "🔄 Phase 3: Merging maintenance branches..."
merge_batch "maintenance/" 10 "Maintenance"

echo ""
echo "🔄 Phase 4: Merging codex branches..."
merge_batch "codex" 10 "Codex"

echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo ""
echo "🎉 Efficient batch merge completed!"
echo "📅 Finished at: $(date)"