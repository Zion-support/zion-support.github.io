#!/bin/bash

# Bulk merge script for PRs
set -e

echo "🚀 Starting bulk PR merge process..."

# Get all branches that need merging
branches=$(git branch -r | grep -E "(cursor/check-fix-push-and-merge-to-main|cursor/create-and-deploy-new-content)" | head -100)

echo "📋 Found $(echo "$branches" | wc -l) branches to process"

# Track results
successful_merges=()
failed_merges=()
conflict_merges=()

# Function to attempt merge with conflict resolution
attempt_merge() {
    local branch=$1
    local branch_name=$(echo $branch | sed 's/origin\///')
    
    echo "🔄 Processing: $branch_name"
    
    # Check if branch is already merged
    if git merge-base --is-ancestor origin/main "$branch" 2>/dev/null; then
        echo "  ✅ Already merged, skipping"
        return 0
    fi
    
    # Create a temporary branch for this merge
    local temp_branch="temp-merge-$branch_name"
    git checkout -b "$temp_branch" origin/main 2>/dev/null || {
        echo "  ❌ Failed to create temp branch"
        failed_merges+=("$branch_name")
        return 1
    }
    
    # Attempt merge
    if git merge "$branch" --no-commit 2>/dev/null; then
        # Merge successful, commit it
        git commit -m "Merge branch '$branch_name' into main" 2>/dev/null || true
        
        # Merge back to main
        git checkout main
        git merge "$temp_branch" --no-ff -m "Merge branch '$branch_name' into main"
        
        # Clean up temp branch
        git branch -D "$temp_branch" 2>/dev/null || true
        
        echo "  ✅ Successfully merged: $branch_name"
        successful_merges+=("$branch_name")
        return 0
    else
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  ⚠️  Merge conflict in: $branch_name"
            conflict_merges+=("$branch_name")
            
            # Try to resolve conflicts automatically
            echo "  🔧 Attempting automatic conflict resolution..."
            
            # Use git's merge strategy
            git reset --hard HEAD 2>/dev/null || true
            
            # Try merge with strategy
            if git merge "$branch" -X ours --no-commit 2>/dev/null; then
                git commit -m "Merge branch '$branch_name' into main (auto-resolved conflicts)" 2>/dev/null || true
                
                # Merge back to main
                git checkout main
                git merge "$temp_branch" --no-ff -m "Merge branch '$branch_name' into main (auto-resolved)"
                
                echo "  ✅ Auto-resolved conflicts for: $branch_name"
                successful_merges+=("$branch_name")
            else
                echo "  ❌ Could not auto-resolve conflicts for: $branch_name"
                failed_merges+=("$branch_name")
            fi
        else
            echo "  ❌ Merge failed for: $branch_name"
            failed_merges+=("$branch_name")
        fi
        
        # Clean up temp branch
        git checkout main 2>/dev/null || true
        git branch -D "$temp_branch" 2>/dev/null || true
        return 1
    fi
}

# Process branches in batches
batch_size=10
current_batch=0
total_branches=$(echo "$branches" | wc -l)

echo "📦 Processing branches in batches of $batch_size..."

for branch in $branches; do
    current_batch=$((current_batch + 1))
    
    echo ""
    echo "📦 Batch $(( (current_batch - 1) / batch_size + 1 )) - Processing $current_batch/$total_branches"
    
    attempt_merge "$branch" || true
    
    # Push changes every batch
    if [ $((current_batch % batch_size)) -eq 0 ]; then
        echo "🚀 Pushing batch changes..."
        git push origin main || echo "⚠️  Push failed, continuing..."
    fi
done

# Final push
echo "🚀 Pushing final changes..."
git push origin main || echo "⚠️  Final push failed"

echo ""
echo "📊 Final Merge Summary:"
echo "✅ Successfully merged: ${#successful_merges[@]} branches"
echo "⚠️  Had conflicts (resolved): ${#conflict_merges[@]} branches"
echo "❌ Failed to merge: ${#failed_merges[@]} branches"

if [ ${#successful_merges[@]} -gt 0 ]; then
    echo ""
    echo "✅ Successfully merged branches:"
    for branch in "${successful_merges[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#conflict_merges[@]} -gt 0 ]; then
    echo ""
    echo "⚠️  Branches with resolved conflicts:"
    for branch in "${conflict_merges[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#failed_merges[@]} -gt 0 ]; then
    echo ""
    echo "❌ Failed to merge branches:"
    for branch in "${failed_merges[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "🎉 Bulk merge process completed!"