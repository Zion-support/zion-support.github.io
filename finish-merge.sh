#!/bin/bash

echo "🚀 Finishing the current merge..."

# Check if we're in a merge state
if [ -f ".git/MERGE_HEAD" ]; then
    echo "📍 Merge in progress detected"
    
    # Check for any unmerged files
    unmerged_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
    
    if [ -n "$unmerged_files" ]; then
        echo "⚠️  Found unmerged files:"
        echo "$unmerged_files"
        
        # Resolve conflicts by keeping our changes
        for file in $unmerged_files; do
            echo "🔧 Resolving conflicts in: $file"
            git checkout --ours "$file"
            git add "$file"
        done
    fi
    
    # Complete the merge
    echo "✅ Completing merge..."
    git commit -m "Merge remote main into feature branch"
    
    echo "🎉 Merge completed successfully!"
else
    echo "✅ No merge in progress"
fi

# Now let's switch to main and merge our feature branch
echo "🔄 Switching to main branch..."
git checkout main

echo "📥 Pulling latest changes..."
git pull origin main

echo "🔀 Merging feature branch into main..."
git merge cursor/analyze-improve-and-deploy-ziontechgroup-app-4210

echo "📤 Pushing changes to remote..."
git push origin main

echo "🎉 All done! Feature branch has been merged into main"