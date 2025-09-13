#!/bin/bash

# Auto-merge script for PRs with conflict resolution
set -e

echo "🚀 Starting automated PR merge process..."

# Function to merge a single branch with conflict resolution
merge_branch() {
    local branch=$1
    local branch_name=$(echo $branch | sed 's/origin\///')
    
    echo "🔄 Processing: $branch_name"
    
    # Check if branch is already merged
    if git merge-base --is-ancestor origin/main "$branch" 2>/dev/null; then
        echo "  ✅ Already merged, skipping"
        return 0
    fi
    
    # Check if branch has commits ahead
    local commits_ahead=$(git rev-list --count origin/main..$branch 2>/dev/null || echo "0")
    if [ "$commits_ahead" -eq 0 ]; then
        echo "  ✅ No commits ahead, skipping"
        return 0
    fi
    
    echo "  📊 Branch has $commits_ahead commits ahead of main"
    
    # Attempt merge with conflict resolution
    if git merge "$branch" --no-commit 2>/dev/null; then
        # Merge successful
        git commit -m "Merge branch '$branch_name' into main" 2>/dev/null || true
        echo "  ✅ Successfully merged: $branch_name"
        return 0
    else
        # Handle conflicts
        echo "  ⚠️  Merge conflict detected, resolving automatically..."
        
        # Check which files have conflicts
        local conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflict_files" ]; then
            echo "  🔧 Resolving conflicts in: $conflict_files"
            
            # Resolve conflicts by choosing our version (HEAD) for most files
            for file in $conflict_files; do
                if [ -f "$file" ]; then
                    echo "    Resolving conflict in: $file"
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Commit the resolved merge
            if git commit -m "Merge branch '$branch_name' into main (auto-resolved conflicts)" 2>/dev/null; then
                echo "  ✅ Successfully resolved conflicts and merged: $branch_name"
                return 0
            else
                echo "  ❌ Failed to commit resolved merge for: $branch_name"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "  ❌ Merge failed for: $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all branches that need merging
branches=$(git branch -r | grep -E "(cursor/check-fix-push-and-merge-to-main|cursor/create-and-deploy-new-content)" | head -50)

echo "📋 Found $(echo "$branches" | wc -l) branches to process"

# Track results
successful_merges=()
failed_merges=()

# Process branches in batches
batch_size=5
current_batch=0
total_branches=$(echo "$branches" | wc -l)

echo "📦 Processing branches in batches of $batch_size..."

for branch in $branches; do
    current_batch=$((current_batch + 1))
    
    echo ""
    echo "📦 Processing $current_batch/$total_branches: $branch"
    
    if merge_branch "$branch"; then
        successful_merges+=("$branch")
    else
        failed_merges+=("$branch")
    fi
    
    # Push changes every batch
    if [ $((current_batch % batch_size)) -eq 0 ]; then
        echo "🚀 Pushing batch changes..."
        if git push origin main; then
            echo "✅ Batch pushed successfully"
        else
            echo "⚠️  Push failed, continuing..."
        fi
    fi
done

# Final push
echo "🚀 Pushing final changes..."
if git push origin main; then
    echo "✅ Final push successful"
else
    echo "⚠️  Final push failed"
fi

echo ""
echo "📊 Final Merge Summary:"
echo "✅ Successfully merged: ${#successful_merges[@]} branches"
echo "❌ Failed to merge: ${#failed_merges[@]} branches"

if [ ${#successful_merges[@]} -gt 0 ]; then
    echo ""
    echo "✅ Successfully merged branches:"
    for branch in "${successful_merges[@]}"; do
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
echo "🎉 Automated merge process completed!"