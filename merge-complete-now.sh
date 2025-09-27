#!/bin/bash

# Complete merge now
cd /workspace

echo "Completing merge now..."

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "Found ongoing merge, completing it..."
    
    # Add all files
    git add -A
    
    # Complete the merge
    git commit -m "resolve: merge conflicts in FileUpload component and complete merge of cursor/check-fix-push-and-merge-to-main-b8b2"
    
    echo "✓ Merge completed successfully!"
    
    # Push the changes
    git push origin main
    
    echo "✓ All changes pushed to main branch!"
else
    echo "No ongoing merge found"
fi