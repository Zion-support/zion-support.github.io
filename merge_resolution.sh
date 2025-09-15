#!/bin/bash

echo "🚀 Starting Complete Merge Resolution Process"
echo "=============================================="

# Set error handling
set -e

# Function to run commands with error handling
run_command() {
    echo "Running: $1"
    if eval "$1"; then
        echo "✅ Success: $1"
    else
        echo "❌ Failed: $1"
        return 1
    fi
}

# Step 1: Check current status
echo ""
echo "1. Checking current git status..."
run_command "git status --porcelain"

# Step 2: Get current branch
echo ""
echo "2. Getting current branch..."
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Step 3: Commit any uncommitted changes
echo ""
echo "3. Committing any uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
    run_command "git add ."
    run_command 'git commit -m "Add comprehensive AI content and promotional components"'
else
    echo "No uncommitted changes found"
fi

# Step 4: Fetch latest changes
echo ""
echo "4. Fetching latest changes..."
run_command "git fetch origin"

# Step 5: Try to merge main
echo ""
echo "5. Attempting to merge main branch..."
if git merge origin/main; then
    echo "✅ Merge successful"
else
    echo "⚠️ Merge conflicts detected, resolving..."
    run_command "git checkout --ours ."
    run_command "git add ."
    run_command "git commit -m 'Resolve merge conflicts automatically'"
    echo "✅ Conflicts resolved"
fi

# Step 6: Push current branch
echo ""
echo "6. Pushing current branch..."
run_command "git push origin $CURRENT_BRANCH"

# Step 7: Switch to main
echo ""
echo "7. Switching to main branch..."
run_command "git checkout main"

# Step 8: Pull latest main
echo ""
echo "8. Pulling latest main..."
run_command "git pull origin main"

# Step 9: Merge content branch
echo ""
echo "9. Merging content branch into main..."
run_command "git merge $CURRENT_BRANCH"

# Step 10: Push main
echo ""
echo "10. Pushing main branch..."
run_command "git push origin main"

echo ""
echo "=============================================="
echo "🎉 MERGE RESOLUTION COMPLETED SUCCESSFULLY!"
echo "=============================================="
echo "✅ All changes have been merged into main branch"
echo "✅ Content branch has been pushed to remote"
echo "✅ Main branch has been updated and pushed"