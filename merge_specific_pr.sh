#!/bin/bash

# Script to merge specific PR #15255
set -e

echo "=== Starting PR #15255 Merge Process ==="

# Function to handle errors
handle_error() {
    echo "Error occurred at line $1"
    echo "Current git status:"
    git status
    exit 1
}

trap 'handle_error $LINENO' ERR

# Step 1: Check current state
echo "Step 1: Checking current state..."
echo "Current directory: $(pwd)"
echo "Current branch: $(git branch --show-current)"

# Ensure we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

# Step 2: Fetch the PR branch
echo "Step 2: Fetching PR branch..."
git fetch origin cursor/create-and-deploy-new-content-baa1

# Step 3: Check what changes are in the PR
echo "Step 3: Checking changes in PR branch..."
echo "Files changed in PR:"
git diff --name-only main origin/cursor/create-and-deploy-new-content-baa1

# Step 4: Attempt merge
echo "Step 4: Attempting merge..."
if git merge origin/cursor/create-and-deploy-new-content-baa1 --no-ff -m "Merge PR #15255: Create and deploy new content"; then
    echo "✅ Successfully merged PR #15255"
else
    echo "⚠️  Merge conflicts detected, resolving..."
    
    # Check for conflicts
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        echo "Resolving merge conflicts..."
        
        # List conflicted files
        echo "Conflicted files:"
        git status --porcelain | grep "^UU\|^AA\|^DD"
        
        # Auto-resolve common conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            echo "Resolving conflict in $file"
            if [ -f "$file" ]; then
                # For most files, accept the incoming changes (from PR)
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                git add "$file"
            fi
        done
        
        # Commit the resolved merge
        git commit -m "Resolve merge conflicts for PR #15255: Create and deploy new content"
        echo "✅ Resolved conflicts for PR #15255"
    fi
fi

# Step 5: Push changes
echo "Step 5: Pushing merged changes to main..."
git push origin main

echo "✅ Successfully merged and pushed PR #15255 to main branch!"

# Step 6: Verify merge
echo "Step 6: Verifying merge..."
echo "Latest commits:"
git log --oneline -5

echo "=== PR Merge Process Complete ==="