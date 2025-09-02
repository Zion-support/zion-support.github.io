#!/bin/bash

# Script to merge a small batch of branches first
set -e

echo "🚀 Starting small batch branch merge process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}$1${NC}"
}

# Get list of recent remote branches (limit to first 10)
get_recent_branches() {
    git branch -r | grep -v "origin/main" | grep -v "HEAD" | sed 's/origin\///' | head -10
}

# Function to merge a single branch
merge_branch() {
    local branch_name=$1
    local attempt=1
    local max_attempts=2
    
    print_status "Attempting to merge branch: $branch_name (attempt $attempt/$max_attempts)"
    
    while [ $attempt -le $max_attempts ]; do
        # Fetch the latest version of the branch
        git fetch origin $branch_name:$branch_name
        
        # Try to merge
        if git merge --no-ff $branch_name -m "Merge branch '$branch_name' into main"; then
            print_status "✅ Successfully merged $branch_name"
            return 0
        else
            print_warning "⚠️  Merge conflict detected in $branch_name (attempt $attempt)"
            
            # Check if there are merge conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                print_status "🔧 Resolving merge conflicts in $branch_name..."
                
                # Use our auto-fixer to resolve conflicts
                if node scripts/auto-fixer.js; then
                    print_status "✅ Auto-fixer resolved conflicts in $branch_name"
                    
                    # Add resolved files
                    git add .
                    
                    # Complete the merge
                    if git commit -m "Resolve merge conflicts in $branch_name"; then
                        print_status "✅ Successfully resolved conflicts and completed merge for $branch_name"
                        return 0
                    else
                        print_warning "⚠️  Failed to complete merge after conflict resolution"
                    fi
                else
                    print_warning "⚠️  Auto-fixer failed to resolve conflicts in $branch_name"
                fi
            fi
            
            # Abort the merge and try again
            git merge --abort
            print_warning "🔄 Aborted merge for $branch_name, will retry..."
            
            attempt=$((attempt + 1))
            if [ $attempt -le $max_attempts ]; then
                sleep 2
            fi
        fi
    done
    
    print_error "❌ Failed to merge $branch_name after $max_attempts attempts"
    return 1
}

# Main execution
main() {
    print_header "🔍 Starting small batch branch merge process..."
    
    # Ensure we're on main branch
    if [ "$(git branch --show-current)" != "main" ]; then
        print_error "❌ Not on main branch. Please checkout main first."
        exit 1
    fi
    
    # Get list of branches to merge (limited batch)
    branches=$(get_recent_branches)
    total_branches=$(echo "$branches" | wc -l)
    
    print_status "📊 Found $total_branches branches to merge in this batch"
    
    # Initialize counters
    successful_merges=0
    failed_merges=0
    
    # Process each branch
    while IFS= read -r branch; do
        if [ -z "$branch" ]; then
            continue
        fi
        
        print_header "🔄 Processing branch: $branch"
        
        # Check if branch already exists locally
        if git show-ref --verify --quiet refs/heads/$branch; then
            print_warning "⚠️  Branch $branch already exists locally, skipping..."
            continue
        fi
        
        # Try to merge the branch
        if merge_branch "$branch"; then
            successful_merges=$((successful_merges + 1))
            print_status "✅ Branch $branch merged successfully"
        else
            failed_merges=$((failed_merges + 1))
            print_error "❌ Failed to merge branch $branch"
        fi
        
        # Small delay between branches
        sleep 1
        
    done <<< "$branches"
    
    # Summary
    print_header "📊 Small Batch Merge Summary"
    echo "Total branches processed: $total_branches"
    echo "Successful merges: $successful_merges"
    echo "Failed merges: $failed_merges"
    
    if [ $failed_merges -eq 0 ]; then
        print_status "🎉 All branches in this batch merged successfully!"
    else
        print_warning "⚠️  Some branches failed to merge. Check the logs above."
    fi
}

# Run the main function
main "$@"