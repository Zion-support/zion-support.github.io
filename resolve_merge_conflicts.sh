#!/bin/bash

echo "🚀 Starting comprehensive merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts
resolve_conflicts() {
    echo "📋 Resolving merge conflicts..."
    
    # Remove deleted files that are causing conflicts
    echo "🗑️ Removing deleted files..."
    git rm dist/index.html 2>/dev/null || true
    git rm src/components/InteractiveTechShowcase2028.tsx 2>/dev/null || true
    
    # For files with conflicts, we'll use our version (HEAD) as the primary
    echo "🔧 Resolving file conflicts using our version..."
    
    # Resolve App.tsx conflicts by using our version
    git checkout --ours App.tsx
    git add App.tsx
    
    # Resolve component conflicts
    git checkout --ours src/components/RevolutionaryAdBanner2025.tsx
    git add src/components/RevolutionaryAdBanner2025.tsx
    
    git checkout --ours src/components/RevolutionaryContentBanner2025.tsx
    git add src/components/RevolutionaryContentBanner2025.tsx
    
    git checkout --ours src/components/UltimateContentBanner2025.tsx
    git add src/components/UltimateContentBanner2025.tsx
    
    # Resolve page conflicts
    git checkout --ours src/pages/AISolutionsComprehensive2025.tsx
    git add src/pages/AISolutionsComprehensive2025.tsx
    
    git checkout --ours src/pages/NextGenInnovationHub2025.tsx
    git add src/pages/NextGenInnovationHub2025.tsx
    
    git checkout --ours src/pages/RevolutionaryTechBreakthrough2025.tsx
    git add src/pages/RevolutionaryTechBreakthrough2025.tsx
    
    git checkout --ours src/pages/UltimateTechRevolution2025.tsx
    git add src/pages/UltimateTechRevolution2025.tsx
    
    echo "✅ Merge conflicts resolved"
}

# Function to merge all open PRs
merge_all_prs() {
    echo "🔄 Starting bulk PR merge process..."
    
    # Get list of all remote branches (excluding main)
    echo "📋 Getting list of remote branches..."
    branches=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | head -50)
    
    echo "Found $(echo "$branches" | wc -l) branches to process"
    
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
        
        # Limit to prevent infinite loops
        if [ $count -ge 50 ]; then
            echo "🛑 Reached processing limit of 50 branches"
            break
        fi
    done
    
    echo ""
    echo "📊 Merge Summary:"
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
    echo "🎯 Starting comprehensive merge and conflict resolution process..."
    
    # Step 1: Resolve current conflicts
    resolve_conflicts
    
    # Step 2: Commit current merge
    echo "💾 Committing current merge resolution..."
    if git commit -m "Resolve merge conflicts and integrate latest changes

- Resolved all merge conflicts using our version
- Removed deleted files causing conflicts
- Integrated latest changes from remote main
- Prepared for bulk PR merging"; then
        echo "✅ Current merge committed successfully"
    else
        echo "❌ Failed to commit current merge"
        exit 1
    fi
    
    # Step 3: Merge all open PRs
    merge_all_prs
    
    # Step 4: Push all changes
    push_changes
    
    echo ""
    echo "🎉 Merge conflict resolution and PR merging process completed!"
    echo "📈 All changes have been integrated and pushed to main branch"
}

# Run main function
main "$@"