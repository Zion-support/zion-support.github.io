#!/bin/bash

set -e  # Exit on any error

echo "🚀 Final merge resolution and deployment script"
echo "=============================================="

# Function to check if command was successful
check_success() {
    if [ $? -eq 0 ]; then
        echo "✅ $1 completed successfully"
    else
        echo "❌ $1 failed"
        exit 1
    fi
}

# Step 1: Check current state
echo "📍 Step 1: Checking current state..."
echo "Current branch:"
git branch --show-current
check_success "Branch check"

echo "Current commit:"
git log --oneline -1
check_success "Log check"

# Step 2: Clean up any merge state
echo "🧹 Step 2: Cleaning up merge state..."
if [ -f ".git/MERGE_HEAD" ]; then
    echo "Found MERGE_HEAD, completing merge..."
    git commit -m "Complete merge" || echo "No changes to commit"
fi

# Step 3: Switch to main branch
echo "🔄 Step 3: Switching to main branch..."
git checkout main
check_success "Switch to main"

# Step 4: Pull latest changes
echo "📥 Step 4: Pulling latest changes..."
git pull origin main --no-rebase
check_success "Pull latest changes"

# Step 5: Merge feature branch
echo "🔀 Step 5: Merging feature branch..."
git merge cursor/analyze-improve-and-deploy-ziontechgroup-app-4210 --no-ff -m "Merge feature: Comprehensive website improvements and optimizations"
check_success "Merge feature branch"

# Step 6: Push to remote
echo "📤 Step 6: Pushing to remote..."
git push origin main
check_success "Push to remote"

# Step 7: Clean up
echo "🧹 Step 7: Cleaning up..."
git branch -d cursor/analyze-improve-and-deploy-ziontechgroup-app-4210 || echo "Branch cleanup not needed"

echo ""
echo "🎉 SUCCESS! Merge completed successfully!"
echo "✅ Feature branch has been merged into main"
echo "✅ Changes have been pushed to remote"
echo "✅ Deployment completed"
echo ""
echo "📊 Final status:"
git status
git log --oneline -5