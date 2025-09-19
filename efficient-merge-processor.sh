#!/bin/bash

# Efficient merge processor for handling large numbers of branches
set -e

echo "🚀 Starting efficient merge processor..."
echo "⏰ Started at: $(date)"

# Configuration
BATCH_SIZE=50
MAX_ATTEMPTS=3

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
TOTAL_BRANCHES=0

# Ensure we're on main and it's up to date
git checkout main
git pull origin main

# Get all branches that need to be merged
echo "📊 Getting branches to merge..."
ALL_BRANCHES=$(git branch -r | grep -E "(cursor|pr)" | sed 's/origin\///' | head -500)
TOTAL_BRANCHES=$(echo "$ALL_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches in batches of $BATCH_SIZE"

# Function to merge a single branch with intelligent conflict resolution
merge_branch() {
    local branch="$1"
    local attempt=1
    
    echo "🔄 Attempting to merge $branch (attempt $attempt/$MAX_ATTEMPTS)..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        return 1
    }
    
    # Check if branch exists and is not already merged
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        echo "⏭️  Branch $branch doesn't exist, skipping"
        return 1
    fi
    
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  Branch $branch already merged, skipping"
        return 1
    fi
    
    # Try to merge with strategy
    while [ $attempt -le $MAX_ATTEMPTS ]; do
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)"
            return 0
        else
            echo "⚠️  Merge conflicts detected in $branch, resolving..."
            
            # Get list of conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
            
            if [ -n "$CONFLICTED_FILES" ]; then
                echo "📋 Conflicted files: $CONFLICTED_FILES"
                
                # Intelligent conflict resolution
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        echo "🔧 Resolving conflicts in $file..."
                        
                        # Different strategies for different file types
                        case "$file" in
                            "package.json"|"package-lock.json"|"yarn.lock")
                                git checkout --ours "$file" 2>/dev/null || true
                                ;;
                            "app/page.tsx"|"app/layout.tsx")
                                git checkout --ours "$file" 2>/dev/null || true
                                ;;
                            "components/EnhancedNavigation.tsx")
                                git checkout --ours "$file" 2>/dev/null || true
                                ;;
                            *.tsx|*.ts|*.jsx|*.js)
                                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                                ;;
                            *)
                                git checkout --ours "$file" 2>/dev/null || true
                                ;;
                        esac
                    fi
                done
                
                # Add resolved files
                git add .
                
                # Commit the merge
                if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
                    echo "✅ Successfully resolved conflicts and merged $branch"
                    return 0
                else
                    echo "❌ Failed to commit resolved conflicts for $branch (attempt $attempt)"
                    git merge --abort
                    attempt=$((attempt + 1))
                    if [ $attempt -le $MAX_ATTEMPTS ]; then
                        echo "🔄 Retrying merge for $branch..."
                        sleep 1
                    fi
                fi
            else
                echo "❌ No conflicted files found, but merge failed. Aborting..."
                git merge --abort
                return 1
            fi
        fi
    done
    
    echo "❌ Failed to merge $branch after $MAX_ATTEMPTS attempts"
    return 1
}

# Process branches in batches
CURRENT=0
BATCH_NUM=1

for branch in $ALL_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "❌ Failed to process branch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed"
    echo "---"
    
    # Push changes every batch
    if [ $((CURRENT % BATCH_SIZE)) -eq 0 ]; then
        echo "💾 Pushing batch $BATCH_NUM to remote..."
        git push origin main
        BATCH_NUM=$((BATCH_NUM + 1))
        echo "✅ Batch $((BATCH_NUM - 1)) completed successfully"
        echo "---"
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Efficient merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Total processed: $CURRENT"
echo "⏰ Completed at: $(date)"

echo ""
echo "📝 Recent commits:"
git log --oneline -10

echo ""
echo "🧹 Next steps:"
echo "   1. Review the merged changes: git log --oneline -50"
echo "   2. Test the application thoroughly"
echo "   3. Check for any remaining conflicts: git status"
echo "   4. Consider cleaning up old feature branches"