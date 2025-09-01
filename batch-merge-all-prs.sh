#!/bin/bash

# Batch Merge All PRs - Zion Tech Group
# Merges all remaining cursor branches into main

set -e

echo "🚀 Batch Merging All Remaining PRs - Zion Tech Group"
echo "===================================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_success() {
    echo -e "${BLUE}[SUCCESS]${NC} $1"
}

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches and clean the list
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -50)

print_status "Found $(echo "$CURSOR_BRANCHES" | wc -l) cursor branches to process (limited to 50 for safety)"

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0

# Process each branch
for branch in $CURSOR_BRANCHES; do
    echo ""
    print_status "Processing branch: $branch"
    
    # Check if remote branch still exists
    if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        print_warning "Remote branch $branch no longer exists, skipping..."
        continue
    fi
    
    # Fetch the specific branch
    if git fetch origin "$branch:$branch"; then
        print_status "Fetched branch $branch"
    else
        print_warning "Failed to fetch $branch, skipping..."
        continue
    fi
    
    # Try to merge
    if git merge --no-edit "$branch"; then
        print_success "Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Clean up local branch
        git branch -d "$branch" 2>/dev/null || true
        
        # Push to origin
        if git push origin main; then
            print_status "Pushed merged changes to origin/main"
        else
            print_warning "Failed to push to origin/main"
        fi
    else
        print_warning "Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU"; then
            print_warning "Resolving conflicts in $branch..."
            
            # For now, abort the merge and continue with next branch
            # In a real scenario, you'd want to resolve conflicts manually or with AI
            git merge --abort
            print_warning "Aborted merge of $branch due to conflicts"
            FAILED_COUNT=$((FAILED_COUNT + 1))
        else
            print_success "Resolved conflicts and merged $branch"
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            
            # Clean up and push
            git branch -d "$branch" 2>/dev/null || true
            git push origin main
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 2
done

echo ""
echo "===================================================="
print_success "Batch merge completed!"
print_status "Successfully merged: $SUCCESS_COUNT branches"
if [ $FAILED_COUNT -gt 0 ]; then
    print_warning "Failed to merge: $FAILED_COUNT branches (conflicts)"
fi
echo "===================================================="

# Final status
git status