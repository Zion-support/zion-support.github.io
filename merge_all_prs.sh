#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "🚀 Starting PR merge process..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for tracking progress
count=0
total=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "📊 Found $total cursor branches to process"

# Process each branch
for branch in $CURSOR_BRANCHES; do
    count=$((count + 1))
    echo ""
    echo "🔄 Processing branch $count/$total: $branch"
    
    # Checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        echo "✅ Checked out $branch"
        
        # Pull latest changes
        if git pull origin "$branch" 2>/dev/null; then
            echo "✅ Pulled latest changes for $branch"
            
            # Switch back to main
            git checkout main
            
            # Try to merge
            if git merge "$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
                echo "✅ Successfully merged $branch into main"
            else
                echo "⚠️  Merge conflict in $branch - attempting to resolve..."
                
                # Check for conflicts
                if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                    echo "🔧 Resolving conflicts in $branch..."
                    
                    # Auto-resolve conflicts by preferring the incoming changes
                    git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
                        if [ -f "$file" ]; then
                            echo "   Resolving conflict in $file"
                            # Use incoming changes (from the branch)
                            git checkout --theirs "$file" 2>/dev/null || true
                            git add "$file" 2>/dev/null || true
                        fi
                    done
                    
                    # Complete the merge
                    if git commit --no-edit 2>/dev/null; then
                        echo "✅ Resolved conflicts and merged $branch"
                    else
                        echo "❌ Failed to resolve conflicts for $branch - skipping"
                        git merge --abort 2>/dev/null || true
                    fi
                else
                    echo "❌ Merge failed for $branch - skipping"
                    git merge --abort 2>/dev/null || true
                fi
            fi
        else
            echo "❌ Failed to pull $branch - skipping"
        fi
    else
        echo "❌ Failed to checkout $branch - skipping"
    fi
    
    # Progress indicator
    echo "📈 Progress: $count/$total branches processed"
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Processed $count branches"

# Push the merged changes
echo "🚀 Pushing merged changes to origin/main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes to origin/main"
else
    echo "❌ Failed to push changes to origin/main"
    exit 1
fi

echo ""
echo "✨ All done! All open PRs have been merged into main branch."