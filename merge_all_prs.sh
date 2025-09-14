#!/bin/bash

# Script to merge all content branches into main
# This will handle conflicts and merge systematically

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Get all content branches
BRANCHES=$(git branch -r | grep -E "cursor/create-and-deploy-new-content" | sed 's/origin\///' | head -50)

# Counter for tracking progress
COUNT=0
TOTAL=$(echo "$BRANCHES" | wc -l)
SUCCESS=0
FAILED=0

echo "📊 Found $TOTAL branches to merge"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local count=$2
    local total=$3
    
    echo ""
    echo "🔄 [$count/$total] Merging branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "   ✅ Branch $branch already exists locally"
    else
        echo "   📥 Fetching branch $branch..."
        git fetch origin $branch:$branch
    fi
    
    # Attempt to merge
    if git merge $branch --no-edit --no-ff; then
        echo "   ✅ Successfully merged $branch"
        SUCCESS=$((SUCCESS + 1))
        
        # Clean up the local branch
        git branch -d $branch 2>/dev/null || true
        
        return 0
    else
        echo "   ⚠️  Merge conflict in $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "   🔧 Resolving conflicts in $branch..."
            
            # Use our strategy for conflicts (keep our changes)
            git checkout --ours .
            git add .
            
            # Commit the resolution
            if git commit --no-edit; then
                echo "   ✅ Successfully resolved conflicts and merged $branch"
                SUCCESS=$((SUCCESS + 1))
                
                # Clean up the local branch
                git branch -d $branch 2>/dev/null || true
                
                return 0
            else
                echo "   ❌ Failed to commit conflict resolution for $branch"
                git merge --abort 2>/dev/null || true
                FAILED=$((FAILED + 1))
                return 1
            fi
        else
            echo "   ❌ Unknown merge issue with $branch"
            git merge --abort 2>/dev/null || true
            FAILED=$((FAILED + 1))
            return 1
        fi
    fi
}

# Process branches in batches
echo "🔄 Processing branches in batches of 10..."

for branch in $BRANCHES; do
    COUNT=$((COUNT + 1))
    
    # Merge the branch
    if merge_branch "$branch" "$COUNT" "$TOTAL"; then
        echo "   ✅ Branch $branch merged successfully"
    else
        echo "   ❌ Failed to merge branch $branch"
    fi
    
    # Push changes every 10 merges
    if [ $((COUNT % 10)) -eq 0 ]; then
        echo ""
        echo "📤 Pushing changes after $COUNT merges..."
        if git push origin main; then
            echo "   ✅ Successfully pushed changes to main"
        else
            echo "   ⚠️  Failed to push changes, continuing..."
        fi
    fi
    
    # Safety check - don't process too many at once
    if [ $COUNT -ge 50 ]; then
        echo ""
        echo "🛑 Reached safety limit of 50 merges. Stopping here."
        break
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "   ✅ Successfully merged: $SUCCESS branches"
echo "   ❌ Failed to merge: $FAILED branches"
echo "   📈 Total processed: $COUNT branches"

# Final push
echo ""
echo "📤 Pushing final changes to main..."
if git push origin main; then
    echo "   ✅ Successfully pushed all changes to main"
else
    echo "   ❌ Failed to push final changes"
    exit 1
fi

echo ""
echo "🎉 PR merge process completed!"
echo "   📊 Final stats: $SUCCESS successful, $FAILED failed out of $COUNT total"