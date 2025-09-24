#!/bin/bash

# Final Batch Merge Script - Efficient Processing
set -e

echo "🚀 Starting Final Batch Merge Process..."
echo "📅 $(date)"

# Function to merge branches efficiently
merge_branches_efficiently() {
    local branch_list=("$@")
    local batch_name="$1"
    local successful=0
    local failed=0
    
    echo "🔄 Processing batch: $batch_name"
    
    for branch in "${branch_list[@]}"; do
        # Skip the first element (batch name)
        if [ "$branch" = "$batch_name" ]; then
            continue
        fi
        
        echo "🔄 Merging: $branch"
        
        # Check if already merged
        if git merge-base --is-ancestor "origin/$branch" main 2>/dev/null; then
            echo "✅ $branch already merged, skipping..."
            continue
        fi
        
        # Try direct merge
        if git merge "origin/$branch" --no-ff -m "Merge $branch - batch processing $(date +%Y%m%d-%H%M%S)" 2>/dev/null; then
            ((successful++))
            echo "✅ Merged: $branch"
        else
            # Try conflict resolution
            git merge --abort 2>/dev/null || true
            if git merge "origin/$branch" --no-commit --no-ff 2>/dev/null; then
                git commit -m "Merge $branch - resolved - $(date +%Y%m%d-%H%M%S)"
                ((successful++))
                echo "✅ Merged with resolution: $branch"
            else
                # Auto-resolve conflicts
                conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
                if [ -n "$conflicted_files" ]; then
                    for file in $conflicted_files; do
                        if [ -f "$file" ]; then
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                            git add "$file"
                        fi
                    done
                    if git commit -m "Merge $branch - auto-resolved - $(date +%Y%m%d-%H%M%S)"; then
                        ((successful++))
                        echo "✅ Merged with auto-resolution: $branch"
                    else
                        git merge --abort 2>/dev/null || true
                        ((failed++))
                        echo "❌ Failed: $branch"
                    fi
                else
                    git merge --abort 2>/dev/null || true
                    ((failed++))
                    echo "❌ Failed: $branch"
                fi
            fi
        fi
        
        # Small delay
        sleep 0.05
    done
    
    echo "📊 $batch_name Results: ✅ $successful, ❌ $failed"
    return 0
}

# Define branch batches
cursor_branches=(
    "Cursor Branches"
    "cursor/check-fix-push-and-merge-to-main-2148"
    "cursor/check-fix-push-and-merge-to-main-2b29"
    "cursor/check-fix-push-and-merge-to-main-43bd"
    "cursor/check-fix-push-and-merge-to-main-5149"
    "cursor/check-fix-push-and-merge-to-main-59e4"
    "cursor/check-fix-push-and-merge-to-main-6972"
    "cursor/check-fix-push-and-merge-to-main-6d12"
    "cursor/check-fix-push-and-merge-to-main-6df3"
    "cursor/check-fix-push-and-merge-to-main-8c36"
    "cursor/check-fix-push-and-merge-to-main-b528"
    "cursor/check-fix-push-and-merge-to-main-d62b"
    "cursor/check-fix-push-and-merge-to-main-d753"
    "cursor/check-fix-push-and-merge-to-main-dd78"
)

other_branches=(
    "Other Branches"
    "maintenance/deps-minor-20250924-125228"
    "push-to-main-merge-automation-20250924-130735"
)

# Process batches
echo ""
echo "🔄 Phase 1: Processing cursor branches..."
merge_branches_efficiently "${cursor_branches[@]}"

echo ""
echo "🔄 Phase 2: Processing other branches..."
merge_branches_efficiently "${other_branches[@]}"

echo ""
echo "🚀 Pushing all changes to remote..."
git push origin main

echo ""
echo "🎉 Final batch merge completed!"
echo "📅 Finished at: $(date)"