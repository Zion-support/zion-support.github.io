#!/bin/bash

echo "Force merging changes to main branch..."

# Switch to main branch
git checkout main

# Merge our feature branch with strategy to keep our changes
git merge cursor/create-and-deploy-new-content-8d58 --strategy=ours -m "Merge new content and promotional components with 1000% ROI focus"

# Push to main
git push origin main

echo "Merge completed and pushed to main!"