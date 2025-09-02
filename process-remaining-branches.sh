#!/bin/bash

# Process Remaining Branches - Zion Tech Group
# Efficiently processes remaining cursor branches

set -e

echo "🚀 Processing Remaining Branches - Zion Tech Group"
echo "=================================================="

# Colors
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

print_success() {
    echo -e "${BLUE}[SUCCESS]${NC} $1"
}

# Ensure we're on main branch
git checkout main
git pull origin main

# Get total count of cursor branches
TOTAL_BRANCHES=$(git branch -r | grep "origin/cursor/" | wc -l)
print_status "Total cursor branches found: $TOTAL_BRANCHES"

# Process branches in batches of 100
BATCH_SIZE=100
PROCESSED=0
SUCCESS_COUNT=0

for ((i=0; i<TOTAL_BRANCHES; i+=BATCH_SIZE)); do
    BATCH_NUM=$((i/BATCH_SIZE + 1))
    print_status "Processing batch $BATCH_NUM (branches $((i+1))-$((i+BATCH_SIZE)))"
    
    # Get current batch of branches
    CURRENT_BATCH=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sed -n "$((i+1)),$((i+BATCH_SIZE))p")
    
    for branch in $CURRENT_BATCH; do
        PROCESSED=$((PROCESSED + 1))
        
        # Check if remote branch still exists
        if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
            continue
        fi
        
        # Try to merge
        if git merge --no-edit "$branch" 2>/dev/null; then
            SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            print_success "Merged $branch ($PROCESSED/$TOTAL_BRANCHES)"
            
            # Clean up and push
            git branch -d "$branch" 2>/dev/null || true
            git push origin main >/dev/null 2>&1
        else
            # Abort merge and continue
            git merge --abort 2>/dev/null || true
        fi
    done
    
    print_status "Completed batch $BATCH_NUM. Progress: $PROCESSED/$TOTAL_BRANCHES branches processed"
    
    # Small delay between batches
    sleep 1
done

echo ""
echo "=================================================="
print_success "All branches processed!"
print_status "Total branches: $TOTAL_BRANCHES"
print_status "Successfully merged: $SUCCESS_COUNT"
print_status "Processed: $PROCESSED"
echo "=================================================="

# Final status
git status