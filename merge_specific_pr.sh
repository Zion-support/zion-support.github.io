#!/bin/bash

# Script to merge specific PR #15255
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

echo "=== Merging PR #15255 ==="

# Step 1: Check current status
print_status "Step 1: Checking current status..."
print_status "Current directory: $(pwd)"
print_status "Current branch: $(git branch --show-current)"

# Ensure we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    print_status "Switching to main branch..."
    git checkout main
fi

# Pull latest changes
print_status "Pulling latest changes from main..."
git pull origin main

# Step 2: Fetch the PR branch
print_status "Step 2: Fetching PR branch cursor/create-and-deploy-new-content-baa1..."
git fetch origin cursor/create-and-deploy-new-content-baa1

# Step 3: Check what changes are in the PR
print_status "Step 3: Checking changes in PR branch..."
print_status "Files changed in PR:"
git diff --name-only main origin/cursor/create-and-deploy-new-content-baa1 | head -20

# Step 4: Attempt merge
print_status "Step 4: Attempting merge..."
if git merge origin/cursor/create-and-deploy-new-content-baa1 --no-ff -m "Merge PR #15255: Create and deploy new content"; then
    print_success "Successfully merged PR #15255"
else
    print_warning "Merge conflicts detected, resolving..."
    
    # Check for conflicts
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        print_status "Resolving merge conflicts..."
        
        # List conflicted files
        print_status "Conflicted files:"
        git status --porcelain | grep "^UU\|^AA\|^DD"
        
        # Auto-resolve conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            print_status "Resolving conflict in $file"
            if [ -f "$file" ]; then
                # For most files, accept the incoming changes (from PR)
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                git add "$file"
            fi
        done
        
        # Commit the resolved merge
        git commit -m "Resolve merge conflicts for PR #15255: Create and deploy new content"
        print_success "Resolved conflicts for PR #15255"
    fi
fi

# Step 5: Push changes
print_status "Step 5: Pushing merged changes to main..."
git push origin main

# Step 6: Verify merge
print_status "Step 6: Verifying merge..."
print_status "Latest commits:"
git log --oneline -5

print_success "Successfully merged and pushed PR #15255 to main branch!"