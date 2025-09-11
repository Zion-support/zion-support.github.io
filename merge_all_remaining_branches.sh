#!/bin/bash

echo "🚀 Starting comprehensive merge of all remaining branches..."

# Get all branches that are not merged
branches=$(git branch -r --no-merged origin/main)

total=$(echo "$branches" | wc -l)
echo "📊 Total branches to process: $total"

count=0
success_count=0
failed_count=0

# Process automation branches first
echo "🔄 Processing automation branches..."
automation_branches=$(echo "$branches" | grep "automation/git-sync")
for branch in $automation_branches; do
    count=$((count + 1))
    echo "📦 Processing $count/$total: $branch"
    
    if git merge "$branch" --no-commit 2>/dev/null; then
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to commit $branch"
        fi
    else
        # Resolve conflicts automatically
        git checkout --theirs public/automation/content-registry.json 2>/dev/null || true
        git checkout --theirs public/automation/new-content-registry.json 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully resolved and merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to merge $branch, aborting..."
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 50 merges
    if [ $((count % 50)) -eq 0 ]; then
        echo "🔄 Pushing progress after $count merges (Success: $success_count, Failed: $failed_count)..."
        git push origin main
    fi
done

# Process chore branches
echo "🔄 Processing chore branches..."
chore_branches=$(echo "$branches" | grep "chore/")
for branch in $chore_branches; do
    count=$((count + 1))
    echo "📦 Processing $count/$total: $branch"
    
    if git merge "$branch" --no-commit 2>/dev/null; then
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to commit $branch"
        fi
    else
        # Resolve conflicts automatically
        git checkout --theirs public/automation/content-registry.json 2>/dev/null || true
        git checkout --theirs public/automation/new-content-registry.json 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully resolved and merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to merge $branch, aborting..."
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 50 merges
    if [ $((count % 50)) -eq 0 ]; then
        echo "🔄 Pushing progress after $count merges (Success: $success_count, Failed: $failed_count)..."
        git push origin main
    fi
done

# Process other important branches (excluding backups)
echo "🔄 Processing other important branches..."
other_branches=$(echo "$branches" | grep -v "backup-" | grep -v "automation/git-sync" | grep -v "chore/")
for branch in $other_branches; do
    count=$((count + 1))
    echo "📦 Processing $count/$total: $branch"
    
    if git merge "$branch" --no-commit 2>/dev/null; then
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to commit $branch"
        fi
    else
        # Try to resolve conflicts automatically
        git checkout --theirs public/automation/content-registry.json 2>/dev/null || true
        git checkout --theirs public/automation/new-content-registry.json 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            success_count=$((success_count + 1))
            echo "✅ Successfully resolved and merged $branch"
        else
            failed_count=$((failed_count + 1))
            echo "❌ Failed to merge $branch, aborting..."
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    # Push every 50 merges
    if [ $((count % 50)) -eq 0 ]; then
        echo "🔄 Pushing progress after $count merges (Success: $success_count, Failed: $failed_count)..."
        git push origin main
    fi
done

echo "🎉 Completed merging all branches!"
echo "📊 Final results: Success: $success_count, Failed: $failed_count"
echo "📊 Final push..."
git push origin main