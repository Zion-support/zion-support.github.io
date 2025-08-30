#!/bin/bash

echo "🔧 Completing merge process..."

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "📋 Merge in progress. Checking status..."
    
    # Check for any unmerged files
    unmerged_files=$(git status --porcelain | grep "^UU" | wc -l)
    
    if [ $unmerged_files -eq 0 ]; then
        echo "✅ No unmerged files. Completing merge..."
        
        # Add all files and commit
        git add .
        git commit -m "Complete merge with origin/main"
        
        echo "🎉 Merge completed successfully!"
    else
        echo "⚠️  Found $unmerged_files unmerged files. Please resolve conflicts first."
        git status --porcelain | grep "^UU"
    fi
else
    echo "ℹ️  No merge in progress."
fi

# Final status
echo "📊 Final Git Status:"
git status