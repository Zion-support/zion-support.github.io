#!/bin/bash

# Check and Merge Remaining PRs Script
echo "🔍 Checking for remaining PRs and branches to merge..."

# Function to print colored output
print_status() {
    echo -e "\033[0;34m[INFO]\033[0m $1"
}

print_success() {
    echo -e "\033[0;32m[SUCCESS]\033[0m $1"
}

print_warning() {
    echo -e "\033[1;33m[WARNING]\033[0m $1"
}

print_error() {
    echo -e "\033[0;31m[ERROR]\033[0m $1"
}

# Check git status
print_status "Checking git status..."
if git status --porcelain | grep -q .; then
    print_warning "Working directory has uncommitted changes"
    git status --short
else
    print_success "Working directory is clean"
fi

# Ensure we're on main branch
print_status "Ensuring we're on main branch..."
git checkout main 2>/dev/null || print_error "Could not checkout main branch"
git pull origin main 2>/dev/null || print_warning "Could not pull latest main"

# Fetch all branches
print_status "Fetching all remote branches..."
git fetch --all 2>/dev/null || print_warning "Could not fetch all branches"

# Get list of remote branches (potential PRs)
print_status "Getting list of remote branches..."
REMOTE_BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ')

if [ -z "$REMOTE_BRANCHES" ]; then
    print_success "No remote branches found to merge. All PRs are already merged!"
else
    echo "Found remote branches:"
    echo "$REMOTE_BRANCHES" | head -20
    echo "..."
    
    # Count total branches
    TOTAL_BRANCHES=$(echo "$REMOTE_BRANCHES" | wc -l)
    print_status "Total branches to process: $TOTAL_BRANCHES"
    
    # Process each branch
    SUCCESSFUL=0
    FAILED=0
    SKIPPED=0
    
    for branch in $REMOTE_BRANCHES; do
        print_status "Processing branch: $branch"
        
        # Check if branch is already merged
        if git branch --merged main | grep -q "$branch"; then
            print_warning "Branch $branch is already merged, skipping"
            SKIPPED=$((SKIPPED + 1))
            continue
        fi
        
        # Try to merge the branch
        if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
            print_success "Successfully merged $branch"
            git commit -m "Merge $branch into main - $(date)" 2>/dev/null || true
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            print_warning "Merge conflicts detected in $branch"
            
            # Try to resolve conflicts automatically
            CONFLICT_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
            
            if [ -n "$CONFLICT_FILES" ]; then
                print_status "Resolving conflicts in: $CONFLICT_FILES"
                
                # Resolve conflicts by taking incoming changes
                for file in $CONFLICT_FILES; do
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                done
                
                # Commit resolved conflicts
                if git commit -m "Resolve merge conflicts for $branch - $(date)" 2>/dev/null; then
                    print_success "Successfully resolved conflicts and merged $branch"
                    SUCCESSFUL=$((SUCCESSFUL + 1))
                else
                    print_error "Failed to commit resolved conflicts for $branch"
                    git merge --abort 2>/dev/null || true
                    FAILED=$((FAILED + 1))
                fi
            else
                print_error "No conflict files found but merge failed for $branch"
                git merge --abort 2>/dev/null || true
                FAILED=$((FAILED + 1))
            fi
        fi
    done
    
    # Summary
    echo ""
    print_status "Merge Summary:"
    echo "   ✅ Successful merges: $SUCCESSFUL"
    echo "   ❌ Failed merges: $FAILED"
    echo "   ⏭️  Skipped branches: $SKIPPED"
    echo "   📈 Total processed: $TOTAL_BRANCHES"
fi

# Final status
print_status "Final repository status:"
git status --porcelain 2>/dev/null || true

print_success "🎉 PR merge process completed!"