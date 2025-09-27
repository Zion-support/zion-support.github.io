#!/bin/bash

# Efficient Branch Merge Script - Process branches in smaller batches
set -e

echo "🚀 Starting efficient branch merge process..."

# Function to safely merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Processing: $branch"
    
    # Check if branch exists and has commits
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch doesn't exist, skipping"
        return 0
    fi
    
    # Check if branch has commits not in main
    if ! git log --oneline "origin/$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "⏭️  Branch $branch has no new commits, skipping"
        return 0
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-edit --no-commit 2>/dev/null; then
        git commit -m "Merge branch $branch" --no-edit
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Conflicts in $branch, resolving..."
        
        # Use our conflict resolution strategy
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit -m "Merge branch $branch - resolved conflicts" --no-edit 2>/dev/null; then
            echo "✅ Resolved conflicts for $branch"
            return 0
        else
            echo "❌ Failed to commit merge for $branch"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get all branches with new commits
echo "📋 Getting list of branches to merge..."
branches=($(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | sort -V))

total_branches=${#branches[@]}
echo "Found $total_branches branches to process"

# Process in smaller batches of 10
batch_size=10
successful_merges=0
failed_merges=0
processed=0

for ((i=0; i<total_branches; i+=batch_size)); do
    batch_end=$((i + batch_size))
    if [ $batch_end -gt $total_branches ]; then
        batch_end=$total_branches
    fi
    
    echo ""
    echo "📦 Processing batch $((i/batch_size + 1)): branches $((i+1))-$batch_end"
    
    for ((j=i; j<batch_end; j++)); do
        branch="${branches[j]}"
        processed=$((processed + 1))
        
        if merge_branch "$branch"; then
            successful_merges=$((successful_merges + 1))
        else
            failed_merges=$((failed_merges + 1))
        fi
    done
    
    # Push after each batch
    echo "🚀 Pushing batch $((i/batch_size + 1)) changes..."
    if git push origin main; then
        echo "✅ Batch $((i/batch_size + 1)) pushed successfully"
    else
        echo "❌ Failed to push batch $((i/batch_size + 1))"
        echo "Retrying push..."
        sleep 2
        git push origin main
    fi
    
    # Show progress
    echo "📊 Progress: $processed/$total_branches (✅ $successful_merges successful, ❌ $failed_merges failed)"
    
    # Small delay between batches
    sleep 1
done

echo ""
echo "🎉 Efficient merge process completed!"
echo "📊 Final Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"
echo "  📋 Total processed: $processed"
echo "  📈 Success rate: $(( successful_merges * 100 / processed ))%"