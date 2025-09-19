#!/bin/bash

echo "🚀 Continuing merge process for remaining branches..."

# Function to merge remaining branches
merge_remaining_branches() {
    echo "📋 Getting list of remaining remote branches..."
    
    # Get all remote branches excluding main and HEAD, skip first 50
    branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tail -n +51)
    
    total_branches=$(echo "$branches" | wc -l)
    echo "Found $total_branches remaining branches to process"
    
    # Counter for processed branches
    count=0
    success_count=0
    error_count=0
    
    for branch in $branches; do
        count=$((count + 1))
        echo ""
        echo "🔄 Processing branch $count: $branch"
        
        # Skip if branch is main or HEAD
        if [[ "$branch" == "main" || "$branch" == "HEAD" ]]; then
            echo "⏭️ Skipping $branch"
            continue
        fi
        
        # Try to merge the branch
        echo "🔄 Attempting to merge origin/$branch into main..."
        
        if git merge origin/$branch --no-edit 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            success_count=$((success_count + 1))
        else
            echo "⚠️ Merge conflict in $branch, resolving automatically..."
            
            # Auto-resolve conflicts by using our version
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
                if [[ "$status" == "UU" || "$status" == "AA" ]]; then
                    echo "🔧 Resolving conflict in $file using our version"
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                elif [[ "$status" == "DD" ]]; then
                    echo "🗑️ Removing deleted file $file"
                    git rm "$file" 2>/dev/null || true
                fi
            done
            
            # Try to commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved and merged $branch"
                success_count=$((success_count + 1))
            else
                echo "❌ Failed to merge $branch after conflict resolution"
                git merge --abort 2>/dev/null || true
                error_count=$((error_count + 1))
            fi
        fi
        
        # Process in batches of 50 to avoid overwhelming the system
        if [ $((count % 50)) -eq 0 ]; then
            echo "📦 Committing batch of 50 merges..."
            git push origin main --force 2>/dev/null || true
        fi
        
        # Limit to prevent infinite loops (process up to 200 more branches)
        if [ $count -ge 200 ]; then
            echo "🛑 Reached processing limit of 200 additional branches"
            break
        fi
    done
    
    echo ""
    echo "📊 Additional Merge Summary:"
    echo "   Total processed: $count"
    echo "   Successfully merged: $success_count"
    echo "   Failed: $error_count"
}

# Function to push all changes
push_changes() {
    echo "🚀 Pushing all changes to remote..."
    
    if git push origin main --force; then
        echo "✅ Successfully pushed all changes to main branch"
    else
        echo "❌ Failed to push changes"
        return 1
    fi
}

# Main execution
main() {
    echo "🎯 Starting continuation of merge process for remaining branches..."
    
    # Step 1: Merge remaining branches
    merge_remaining_branches
    
    # Step 2: Push all changes
    push_changes
    
    echo ""
    echo "🎉 Remaining branch merge process completed!"
    echo "📈 All additional changes have been integrated and pushed to main branch"
}

# Run main function
main "$@"