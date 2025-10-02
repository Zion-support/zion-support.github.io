#!/bin/bash
cd /workspace

# Complete the merge
git add .
git commit -m "Merge branch 'cursor/fix-errors-and-merge-to-main-f76f'

Resolved merge conflicts in app/page.tsx by:
- Combining import statements for AI2028ContentShowcaseBanner and Ultimate2025ContentShowcaseBanner
- Removing duplicate merge conflict markers
- Maintaining all banner components and functionality

The merge brings in the latest changes from the feature branch while preserving the main branch functionality."

# Push the changes
git push origin main

echo "Merge completed and pushed to main branch"