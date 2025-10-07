#!/bin/bash

# Complete the merge by committing all resolved conflicts
echo "Completing merge..."

# Add all resolved files
git add .

# Commit the merge
git commit -m "Complete merge with main - resolve conflicts and clean up corrupted files"

# Push the changes
git push origin HEAD

echo "Merge completed successfully!"