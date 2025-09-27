#!/bin/bash

# Final merge completion script
cd /workspace

echo "Completing final merge..."

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "Found ongoing merge, completing it..."
    
    # Add all files
    git add -A
    
    # Complete the merge with a commit
    git commit -m "resolve: merge conflicts in FileUpload component and complete merge of cursor/check-fix-push-and-merge-to-main-b8b2"
    
    echo "✓ Merge completed successfully!"
    
    # Push the changes
    echo "Pushing changes to remote..."
    git push origin main
    
    echo "✓ All changes pushed to main branch!"
else
    echo "No ongoing merge found"
fi

echo "Script completed"