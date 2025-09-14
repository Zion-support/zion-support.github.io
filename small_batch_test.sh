#!/bin/bash

# Small batch test for PR merging
set -e

echo "🧪 Testing small batch PR merge process..."

# Get the 3 most recent cursor branches
RECENT_BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | tail -3 | sed 's/origin\///')

echo "📋 Testing with branches:"
echo "$RECENT_BRANCHES"

# Counter for tracking
SUCCESS_COUNT=0
CONFLICT_COUNT=0
ERROR_COUNT=0

# Process each branch
for branch in $RECENT_BRANCHES; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "  ✅ Branch exists locally"
    else
        echo "  📥 Fetching branch from remote..."
        if ! git fetch origin $branch:$branch 2>/dev/null; then
            echo "  ⚠️  Failed to fetch branch $branch, skipping..."
            continue
        fi
    fi
    
    # Switch to main
    git checkout main
    
    # Try to merge
    echo "  🔀 Attempting to merge $branch into main..."
    
    if git merge $branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "  ✅ Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
    else
        echo "  ⚠️  Merge conflict detected in $branch"
        CONFLICT_COUNT=$((CONFLICT_COUNT + 1))
        
        # Check what files have conflicts
        CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        if [ -n "$CONFLICT_FILES" ]; then
            echo "  📝 Conflicted files: $CONFLICT_FILES"
            
            # Resolve conflicts by keeping our version (main branch)
            for file in $CONFLICT_FILES; do
                echo "  🔧 Resolving conflict in $file (keeping main version)"
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            done
            
            # Commit the resolved merge
            if git commit -m "Merge $branch into main - conflicts resolved" --no-edit 2>/dev/null; then
                echo "  ✅ Successfully resolved conflicts and merged $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "  ❌ Failed to commit resolved merge for $branch"
                ERROR_COUNT=$((ERROR_COUNT + 1))
                
                # Abort the merge
                git merge --abort 2>/dev/null || true
            fi
        else
            echo "  ❌ No conflict files found, aborting merge"
            git merge --abort 2>/dev/null || true
            ERROR_COUNT=$((ERROR_COUNT + 1))
        fi
    fi
    
    # Clean up the local branch
    echo "  🧹 Cleaning up local branch $branch"
    git branch -D $branch 2>/dev/null || true
    
    echo "  ✅ Completed processing $branch"
done

echo ""
echo "📊 Small Batch Test Summary:"
echo "  ✅ Successful merges: $SUCCESS_COUNT"
echo "  ⚠️  Conflicts resolved: $CONFLICT_COUNT"
echo "  ❌ Errors: $ERROR_COUNT"
echo "  📋 Total processed: $((SUCCESS_COUNT + CONFLICT_COUNT + ERROR_COUNT))"

echo ""
echo "🎉 Small batch test completed!"