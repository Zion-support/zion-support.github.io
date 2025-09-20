#!/bin/bash

# Merge Available Branches Script
set -e

echo "🚀 Starting Merge Available Branches Process..."
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

# Get available branches (excluding main and HEAD)
AVAILABLE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ' | head -50)

print_status "Found $(echo "$AVAILABLE_BRANCHES" | wc -l) branches to process"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_PROCESSED=0

# Function to merge a branch
merge_branch() {
    local branch="$1"
    
    print_status "Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        print_error "Failed to fetch branch $branch"
        return 1
    }
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        print_warning "Branch $branch is already merged, skipping..."
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        print_success "Successfully merged $branch"
        git commit -m "Merge branch $branch - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        print_warning "Merge conflicts detected in $branch, attempting resolution..."
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$conflicted_files" ]; then
            print_status "Resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts by preferring main branch for config files
            for file in $conflicted_files; do
                if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
                    git checkout --ours "$file" 2>/dev/null || true
                elif [[ "$file" == "netlify.toml" ]] || [[ "$file" == "next.config.js" ]] || [[ "$file" == "tsconfig.json" ]]; then
                    git checkout --ours "$file" 2>/dev/null || true
                else
                    # For other files, try to merge both versions
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Commit the merge
            if git commit -m "Resolve conflicts for branch $branch - $(date)" 2>/dev/null; then
                print_success "Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                print_error "Failed to commit resolved conflicts for $branch"
                git merge --abort 2>/dev/null || true
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            print_error "No conflicted files found, but merge failed. Aborting..."
            git merge --abort 2>/dev/null || true
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each branch
for branch in $AVAILABLE_BRANCHES; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    print_status "[$TOTAL_PROCESSED] Processing branch: $branch"
    
    if merge_branch "$branch"; then
        print_success "Branch $branch processed successfully"
    else
        print_error "Failed to process branch $branch"
    fi
    
    # Push changes every 10 merges
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        print_status "Pushing progress to remote..."
        git push origin main 2>/dev/null || print_warning "Could not push main"
    fi
    
    echo "---"
done

# Final push
print_status "Pushing final changes to remote..."
git push origin main 2>/dev/null || print_warning "Could not push main"

# Summary
echo ""
print_success "Branch merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Total processed: $TOTAL_PROCESSED"
echo "⏰ Completed at: $(date)"

print_success "🎉 All available branches have been processed!"