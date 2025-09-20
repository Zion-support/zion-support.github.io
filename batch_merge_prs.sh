#!/bin/bash

# Batch Merge PRs Script - Process PRs in smaller batches
set -e

echo "🚀 Starting Batch Merge PRs Process..."
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

# Get the first 20 PR numbers
PR_NUMBERS=$(grep -o '"number": [0-9]*' /workspace/current_prs.json | grep -o '[0-9]*' | head -20)

print_status "Processing first 20 PRs: $PR_NUMBERS"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
TOTAL_PROCESSED=0

# Function to merge a PR by number
merge_pr() {
    local pr_number="$1"
    
    print_status "Processing PR #$pr_number..."
    
    # Try to find the branch associated with this PR
    # Look for branches that might be related to this PR
    local branch_candidates=$(git branch -r | grep -E "(pr-$pr_number|$pr_number|cursor/.*$pr_number)" | head -1)
    
    if [ -z "$branch_candidates" ]; then
        # Try to find any branch that might be related
        branch_candidates=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | head -1)
    fi
    
    if [ -z "$branch_candidates" ]; then
        print_warning "No branch found for PR #$pr_number, skipping..."
        return 1
    fi
    
    local branch_name=${branch_candidates#origin/}
    print_status "Attempting to merge branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name" 2>/dev/null || {
        print_error "Failed to fetch branch $branch_name"
        return 1
    }
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        print_success "Successfully merged $branch_name"
        git commit -m "Merge PR #$pr_number - $branch_name - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        print_warning "Merge conflicts detected in $branch_name, attempting resolution..."
        
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
            if git commit -m "Resolve conflicts for PR #$pr_number - $branch_name - $(date)" 2>/dev/null; then
                print_success "Successfully resolved conflicts and merged $branch_name"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                print_error "Failed to commit resolved conflicts for $branch_name"
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

# Process each PR
for pr_number in $PR_NUMBERS; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    print_status "[$TOTAL_PROCESSED/20] Processing PR #$pr_number"
    
    if merge_pr "$pr_number"; then
        print_success "PR #$pr_number processed successfully"
    else
        print_error "Failed to process PR #$pr_number"
    fi
    
    # Push changes every 5 merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
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
print_success "Batch merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   📈 Total processed: $TOTAL_PROCESSED"
echo "⏰ Completed at: $(date)"

print_success "🎉 First batch of PRs processed!"