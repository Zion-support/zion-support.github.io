#!/bin/bash

# Script to merge all open PRs systematically
# This script will resolve conflicts and merge PRs into main

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Set GitHub token from environment variable
export GH_TOKEN="${GITHUB_TOKEN:-}"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    
    print_status "Processing PR #$pr_number: $pr_title"
    
    # Get PR details
    local pr_details=$(gh pr view "$pr_number" --json headRefName,title,state)
    local branch_name=$(echo "$pr_details" | jq -r '.headRefName')
    local state=$(echo "$pr_details" | jq -r '.state')
    
    if [ "$state" != "OPEN" ]; then
        print_warning "PR #$pr_number is not open (state: $state), skipping..."
        return 0
    fi
    
    print_status "Branch: $branch_name"
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    if [ $? -ne 0 ]; then
        print_error "Failed to fetch branch $branch_name"
        return 1
    fi
    
    # Try to merge the PR
    print_status "Attempting to merge PR #$pr_number..."
    
    # Use GitHub CLI to merge the PR
    gh pr merge "$pr_number" --merge --delete-branch
    
    if [ $? -eq 0 ]; then
        print_success "Successfully merged PR #$pr_number"
        return 0
    else
        print_warning "Failed to merge PR #$pr_number automatically, trying manual merge..."
        
        # Try manual merge
        git checkout main
        git pull origin main
        
        # Try to merge the branch
        git merge "origin/$branch_name" --no-edit
        
        if [ $? -eq 0 ]; then
            print_success "Successfully merged PR #$pr_number manually"
            git push origin main
            return 0
        else
            print_error "Failed to merge PR #$pr_number - conflicts detected"
            
            # Try to resolve conflicts automatically
            print_status "Attempting to resolve conflicts automatically..."
            
            # Use our automation to fix conflicts
            ./pm2-automation.sh quick-fix
            
            # Check if conflicts are resolved
            git status --porcelain | grep -q "^UU\|^AA\|^DD"
            if [ $? -ne 0 ]; then
                print_success "Conflicts resolved automatically"
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number"
                git push origin main
                return 0
            else
                print_error "Could not resolve conflicts automatically for PR #$pr_number"
                git merge --abort
                return 1
            fi
        fi
    fi
}

# Check if GITHUB_TOKEN is provided
if [ -z "$GITHUB_TOKEN" ]; then
    print_error "❌ GITHUB_TOKEN environment variable is required"
    exit 1
fi

# Main execution
print_status "Starting systematic PR merge process..."

# Get list of open PRs
pr_list=$(gh pr list --state open --json number,title --jq '.[] | "\(.number)|\(.title)"')

if [ -z "$pr_list" ]; then
    print_warning "No open PRs found"
    exit 0
fi

# Count total PRs
total_prs=$(echo "$pr_list" | wc -l)
print_status "Found $total_prs open PRs to process"

# Process each PR
success_count=0
failed_count=0

while IFS= read -r pr_line; do
    if [ -n "$pr_line" ]; then
        pr_number=$(echo "$pr_line" | cut -d'|' -f1)
        pr_title=$(echo "$pr_line" | cut -d'|' -f2-)
        
        merge_pr "$pr_number" "$pr_title"
        
        if [ $? -eq 0 ]; then
            ((success_count++))
        else
            ((failed_count++))
        fi
        
        # Small delay between merges
        sleep 2
    fi
done <<< "$pr_list"

# Summary
print_status "Merge process completed!"
print_success "Successfully merged: $success_count PRs"
if [ $failed_count -gt 0 ]; then
    print_error "Failed to merge: $failed_count PRs"
fi

# Final status check
print_status "Checking final repository status..."
git status
git log --oneline -5