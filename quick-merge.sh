#!/bin/bash

# Quick merge script using existing infrastructure
echo "🚀 Quick merge process starting..."

# Use existing comprehensive merge script if available
if [ -f "comprehensive-merge-all-prs.sh" ]; then
    echo "Using existing comprehensive merge script..."
    bash comprehensive-merge-all-prs.sh
elif [ -f "bulk-merge-all-prs.sh" ]; then
    echo "Using existing bulk merge script..."
    bash bulk-merge-all-prs.sh
elif [ -f "complete_merge_all_prs.sh" ]; then
    echo "Using existing complete merge script..."
    bash complete_merge_all_prs.sh
else
    echo "No existing merge script found, using basic git commands..."
    
    # Basic merge process
    git checkout main
    git pull origin main
    
    # Get current branch if not main
    CURRENT_BRANCH=$(git branch --show-current)
    if [ "$CURRENT_BRANCH" != "main" ]; then
        echo "Merging current branch: $CURRENT_BRANCH"
        git merge $CURRENT_BRANCH --no-edit
        git push origin main
    fi
    
    echo "✅ Basic merge completed!"
fi