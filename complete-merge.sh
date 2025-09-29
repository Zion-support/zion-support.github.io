#!/bin/bash
cd /workspace

# Complete the merge
git add .
git commit -m "Merge remote-tracking branch 'origin/cursor/fix-netlify-build-and-merge-to-main-561a' - Resolve conflicts and integrate fixes"

# Push to main
git push origin main

echo "Merge completed successfully"