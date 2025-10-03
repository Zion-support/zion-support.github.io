#!/bin/bash

# Simple script to merge all open PRs into main branch
set -e

echo "🚀 Starting PR merge process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Get open PRs
print_status "Fetching open PRs..."
prs=$(curl -s -H "Accept: application/vnd.github.v3+json" \
     "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | \
jq -r '.[] | "\(.number)|\(.head.ref)|\(.title)"')

if [ -z "$prs" ]; then
    print_warning "No open PRs found"
    exit 0
fi

print_status "Found open PRs:"
echo "$prs"

# Ensure we're on main branch
print_status "Switching to main branch..."
git checkout main
git pull origin main

# Merge each PR
successful_merges=0
failed_merges=0

echo "$prs" | while IFS='|' read -r pr_number branch_name pr_title; do
    print_status "Processing PR #${pr_number}: ${pr_title}"
    
    # Fetch the PR head
    if git fetch origin pull/${pr_number}/head:pr-${pr_number} 2>/dev/null; then
        print_success "Fetched PR #${pr_number}"
        
        # Try to merge
        if git merge pr-${pr_number} --no-ff -m "Merge PR #${pr_number}: ${pr_title}" 2>/dev/null; then
            print_success "Successfully merged PR #${pr_number}"
            ((successful_merges++))
        else
            print_warning "Merge conflict in PR #${pr_number}, attempting to resolve..."
            
            # Try to resolve conflicts automatically
            conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            if [ -n "$conflicted_files" ]; then
                for file in $conflicted_files; do
                    print_status "Resolving conflicts in ${file}..."
                    # Use incoming version for most files
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                if git commit --no-edit 2>/dev/null; then
                    print_success "Resolved conflicts and merged PR #${pr_number}"
                    ((successful_merges++))
                else
                    print_error "Failed to resolve conflicts for PR #${pr_number}"
                    git merge --abort 2>/dev/null || true
                    ((failed_merges++))
                fi
            else
                print_error "Failed to merge PR #${pr_number}"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
        
        # Clean up
        git branch -D pr-${pr_number} 2>/dev/null || true
    else
        print_error "Unable to fetch PR #${pr_number}"
        ((failed_merges++))
    fi
done

# Fix syntax errors
print_status "Fixing syntax errors..."
find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "'$" "$file"; then
        print_status "Fixing syntax errors in $file"
        sed -i "s/'$//g" "$file"
    fi
done

# Push all changes
print_status "Pushing all changes..."
git push origin main

print_success "PR merge process completed!"
print_status "Check git log for merged commits"