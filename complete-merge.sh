#!/bin/bash

echo "🚀 Completing the current merge..."

# Check current status
echo "📍 Current git status:"
git status

# Check if there are any unmerged files
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
    
    # Complete the merge
    echo "✅ Completing merge..."
    git commit -m "Merge remote main into feature branch - conflicts resolved"
else
    echo "✅ No conflicts found, completing merge..."
    git commit -m "Merge remote main into feature branch"
fi

echo "🎉 Merge completed successfully!"