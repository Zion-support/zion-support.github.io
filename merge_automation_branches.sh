#!/bin/bash

echo "🚀 Starting automated merge of automation branches..."

# Get list of automation branches that are not merged
branches=$(git branch -r --no-merged origin/main | grep "automation/git-sync" | head -20)

for branch in $branches; do
    echo "📦 Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-commit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch - resolved conflicts"
    else
        echo "⚠️  Conflicts found in $branch, resolving..."
        
        # Check if there are conflicts in the automation files
        if git status --porcelain | grep -q "public/automation/"; then
            echo "🔧 Resolving automation file conflicts..."
            git checkout --theirs public/automation/content-registry.json 2>/dev/null || true
            git checkout --theirs public/automation/new-content-registry.json 2>/dev/null || true
            git add public/automation/content-registry.json public/automation/new-content-registry.json 2>/dev/null || true
        fi
        
        # Add any other resolved files
        git add . 2>/dev/null || true
        
        # Commit the merge
        if git commit -m "Merge $branch - resolved conflicts"; then
            echo "✅ Successfully resolved and merged $branch"
        else
            echo "❌ Failed to merge $branch, aborting..."
            git merge --abort
        fi
    fi
done

echo "🎉 Completed merging automation branches!"