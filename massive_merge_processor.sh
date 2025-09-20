#!/bin/bash

# Massive Merge Processor - Handle thousands of branches efficiently
set -e

echo "🚀 Starting Massive Merge Processor..."
echo "⏰ Started at: $(date)"

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

# Ensure we're on main and it's up to date
print_status "Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Get all available branches (excluding main and HEAD) - process in batches
ALL_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ' | head -500)

print_status "Processing first 500 branches out of 19,387 total"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_PROCESSED=0
BATCH_SIZE=50

# Function to merge a branch with ultra-aggressive conflict resolution
merge_branch_ultra_aggressive() {
    local branch="$1"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        return 1
    }
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 0
    fi
    
    # Try to merge with ultra-aggressive strategy
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Auto-merge $branch - $(date)" 2>/dev/null || true
        return 0
    else
        # Ultra-aggressive conflict resolution - prefer incoming changes for everything
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$conflicted_files" ]; then
            for file in $conflicted_files; do
                # For package files, keep main version
                if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
                    git checkout --ours "$file" 2>/dev/null || true
                elif [[ "$file" == "netlify.toml" ]] || [[ "$file" == "next.config.js" ]] || [[ "$file" == "tsconfig.json" ]]; then
                    git checkout --ours "$file" 2>/dev/null || true
                else
                    # For all other files, prefer incoming changes
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            # Add all resolved files
            git add . 2>/dev/null || true
            
            # Commit the merge
            if git commit -m "Ultra-merge $branch - $(date)" 2>/dev/null; then
                return 0
            else
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Process branches in batches
BATCH_NUM=1
for branch in $ALL_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    
    # Process in batches of 50
    if [ $((TOTAL_PROCESSED % BATCH_SIZE)) -eq 1 ]; then
        print_status "Processing Batch $BATCH_NUM (branches $TOTAL_PROCESSED-$((TOTAL_PROCESSED + BATCH_SIZE - 1)))"
        BATCH_NUM=$((BATCH_NUM + 1))
    fi
    
    if merge_branch_ultra_aggressive "$branch"; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ]; then
            print_success "Merged $SUCCESSFUL_MERGES branches so far..."
        fi
    else
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    # Push changes every 100 successful merges
    if [ $((SUCCESSFUL_MERGES % 100)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        print_status "Pushing progress to remote... (Merged: $SUCCESSFUL_MERGES)"
        git push origin main 2>/dev/null || print_warning "Could not push main"
    fi
    
    # Show progress every 50 branches
    if [ $((TOTAL_PROCESSED % 50)) -eq 0 ]; then
        print_status "Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $TOTAL_PROCESSED processed"
    fi
done

# Final push
print_status "Pushing final changes to remote..."
git push origin main 2>/dev/null || print_warning "Could not push main"

# Summary
echo ""
print_success "Massive merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Total processed: $TOTAL_PROCESSED"
echo "   📊 Success rate: $(( (SUCCESSFUL_MERGES * 100) / TOTAL_PROCESSED ))%"
echo "⏰ Completed at: $(date)"

print_success "🎉 Massive merge processing completed!"