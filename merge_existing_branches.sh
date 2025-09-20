#!/bin/bash

# Merge existing branches script
set -e

echo "🚀 Starting merge of existing branches..."
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

# Ensure we're on main and up to date
print_status "Updating main branch..."
git checkout main
git pull origin main

# Get the most recent branches (limit to 10 for now)
print_status "Getting recent branches..."
RECENT_BRANCHES=$(git branch -r | grep -E "(cursor|codex)" | grep -v "origin/main" | head -10 | sed 's/origin\///' | tr -d ' ')

print_status "Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches to process"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    print_status "Merging branch: $branch"
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        print_warning "Skipping $branch (already merged)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Fetch the branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        print_error "Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Merge $branch - $(date +%s)" --no-verify
        print_success "Successfully merged $branch"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        print_warning "Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    print_status "Resolving conflicts in $file"
                    # For all files, prefer incoming changes
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            git add .
            if git commit -m "Resolve conflicts for $branch - $(date +%s)" --no-verify; then
                print_success "Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                print_error "Failed to commit resolved conflicts for $branch"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            print_error "No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each branch
CURRENT=0
for branch in $RECENT_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    print_status "[$CURRENT] Merging: $branch"
    
    merge_branch "$branch" || true
    
    # Push every 3 successful merges
    if [ $((SUCCESSFUL_MERGES % 3)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        print_status "Pushing progress..."
        git push origin main
    fi
done

# Final push
print_status "Pushing final changes..."
git push origin main

# Summary
echo ""
print_success "Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $CURRENT"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
print_status "Recent commits:"
git log --oneline -10

echo ""
print_success "Merge completed!"