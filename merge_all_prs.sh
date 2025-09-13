#!/bin/bash

# Comprehensive PR Merge Script
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Function to handle errors
handle_error() {
    print_error "Error occurred at line $1"
    print_status "Current git status:"
    git status
    exit 1
}

trap 'handle_error $LINENO' ERR

echo "=== Comprehensive PR Merge Process ==="
echo ""

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

# Step 2: Get open PRs from GitHub API
print_status "Step 2: Fetching open PRs from GitHub..."
OPEN_PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open")

# Extract PR numbers and branch names
PR_NUMBERS=$(echo "$OPEN_PRS" | grep -o '"number": [0-9]*' | grep -o '[0-9]*')
BRANCH_NAMES=$(echo "$OPEN_PRS" | grep -o '"ref": "[^"]*"' | sed 's/"ref": "//g' | sed 's/"//g')

print_status "Found open PRs: $PR_NUMBERS"
print_status "Found branches: $BRANCH_NAMES"

# Step 3: Process each PR
for branch in $BRANCH_NAMES; do
    print_status "Processing branch: $branch"
    
    # Fetch the branch
    print_status "Fetching branch $branch..."
    git fetch origin $branch
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        print_status "Branch $branch exists locally"
    else
        print_status "Creating local branch $branch"
        git checkout -b $branch origin/$branch
    fi
    
    # Switch to the branch
    git checkout $branch
    
    # Merge main into the branch to resolve conflicts
    print_status "Merging main into $branch to resolve conflicts..."
    if git merge main --no-ff -m "Merge main into $branch to resolve conflicts"; then
        print_success "Successfully merged main into $branch"
    else
        print_warning "Merge conflicts detected in $branch, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            print_status "Resolving merge conflicts in $branch..."
            
            # List conflicted files
            print_status "Conflicted files:"
            git status --porcelain | grep "^UU\|^AA\|^DD"
            
            # Auto-resolve conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
                print_status "Resolving conflict in $file"
                if [ -f "$file" ]; then
                    # For most files, accept the incoming changes (from the branch)
                    git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file"
                fi
            done
            
            # Commit the resolved merge
            git commit -m "Resolve merge conflicts in $branch"
            print_success "Resolved conflicts for $branch"
        fi
    fi
    
    # Push the updated branch
    print_status "Pushing updated branch $branch..."
    git push origin $branch
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    print_status "Merging $branch into main..."
    if git merge $branch --no-ff -m "Merge PR from $branch"; then
        print_success "Successfully merged $branch into main"
    else
        print_warning "Merge conflicts detected when merging $branch into main, resolving..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            print_status "Resolving merge conflicts when merging $branch into main..."
            
            # List conflicted files
            print_status "Conflicted files:"
            git status --porcelain | grep "^UU\|^AA\|^DD"
            
            # Auto-resolve conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
                print_status "Resolving conflict in $file"
                if [ -f "$file" ]; then
                    # For most files, accept the incoming changes (from the branch)
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                    git add "$file"
                fi
            done
            
            # Commit the resolved merge
            git commit -m "Resolve merge conflicts when merging $branch into main"
            print_success "Resolved conflicts for $branch merge into main"
        fi
    fi
done

# Step 4: Push all changes to main
print_status "Step 4: Pushing all changes to main..."
git push origin main

# Step 5: Clean up local branches
print_status "Step 5: Cleaning up local branches..."
for branch in $BRANCH_NAMES; do
    if git show-ref --verify --quiet refs/heads/$branch; then
        print_status "Deleting local branch $branch"
        git branch -d $branch
    fi
done

# Step 6: Final verification
print_status "Step 6: Final verification..."
print_status "Latest commits:"
git log --oneline -10

print_status "Current git status:"
git status

print_success "=== All PRs merged successfully! ==="
print_status "Summary:"
print_status "- Processed all open PRs"
print_status "- Resolved all merge conflicts"
print_status "- Merged all changes into main"
print_status "- Pushed changes to remote"
print_status "- Cleaned up local branches"

echo ""
print_success "All done! All open PRs have been successfully merged into the main branch."