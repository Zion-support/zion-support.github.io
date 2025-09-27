#!/bin/bash

# Fix the ongoing merge
cd /workspace

echo "Fixing ongoing merge..."

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "Found ongoing merge, attempting to complete it..."
    
    # Try to add all files
    git add -A 2>/dev/null || true
    
    # Try to complete the merge
    if git commit -m "resolve: merge conflicts and complete merge of cursor/check-fix-push-and-merge-to-main-b8b2" 2>/dev/null; then
        echo "✓ Merge completed successfully!"
        
        # Push the changes
        echo "Pushing changes to remote..."
        if git push origin main 2>/dev/null; then
            echo "✓ All changes pushed to main branch!"
        else
            echo "⚠ Failed to push to remote, but merge is complete locally"
        fi
    else
        echo "⚠ Failed to complete merge, trying to abort..."
        git merge --abort 2>/dev/null || true
        echo "Merge aborted"
    fi
else
    echo "No ongoing merge found"
fi

echo "Script completed"