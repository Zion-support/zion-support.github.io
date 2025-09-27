#!/bin/bash

# Complete the merge process
cd /workspace

echo "Starting merge completion process..."

# Check if we're in a merge state
if [ -f .git/MERGE_HEAD ]; then
    echo "Found ongoing merge, attempting to complete it..."
    
    # Add all files
    echo "Adding all files..."
    git add -A
    
    # Check status
    echo "Checking git status..."
    git status --short
    
    # Complete the merge
    echo "Completing merge..."
    git commit -F commit-msg.txt
    
    echo "✓ Merge completed successfully!"
    
    # Push the changes
    echo "Pushing changes to remote..."
    git push origin main
    
    echo "✓ All changes pushed to main branch!"
else
    echo "No ongoing merge found"
fi

echo "Merge completion process finished"