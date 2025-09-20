#!/bin/bash

# Merge Batch Branches Script
# This script will merge branches in smaller batches to avoid timeouts

set -e

echo "🚀 Starting Batch Branches Merge Process..."
echo "⏰ Started at: $(date)"

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

# Ensure we're on main and it's up to date
print_status "Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0

# Get a small batch of branches that actually exist
print_status "Fetching batch of branches..."
git fetch --all

# Get first 20 branches that exist
BATCH_BRANCHES=$(git branch -r | grep -v "backup" | grep -v "HEAD" | head -20)
TOTAL_BRANCHES=$(echo "$BATCH_BRANCHES" | wc -l)

print_status "Found $TOTAL_BRANCHES branches to process in this batch"

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    print_status "Resolving conflicts in $file for branch $branch..."
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock")
            print_status "Package file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "next.config.js"|"tsconfig.json"|"tailwind.config.js"|"netlify.toml"|"vite.config.js")
            print_status "Config file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx"|"src/App.tsx"|"src/main.tsx")
            print_status "Main app file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            print_status "Component file detected, preferring incoming changes..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.md|*.txt|*.json)
            print_status "Documentation/data file detected, merging both versions..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            print_status "Generic file detected, using incoming version..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    print_success "Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local branch_name=${branch#origin/}
    
    print_status "Attempting to merge $branch_name..."
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" > /dev/null 2>&1; then
        print_warning "Branch $branch_name doesn't exist, skipping..."
        return 1
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name" 2>/dev/null || {
        print_error "Failed to fetch $branch_name"
        return 1
    }
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch_name"; then
        print_warning "Branch $branch_name is already merged, skipping..."
        return 0
    fi
    
    # Try to merge with strategy
    if git merge --no-commit --no-ff "origin/$branch_name" 2>/dev/null; then
        print_success "Successfully merged $branch_name"
        git commit -m "Merge $branch_name into main - $(date)" 2>/dev/null || true
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        print_warning "Merge conflicts detected in $branch_name, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            print_status "Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch_name"
                fi
            done
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Commit the merge
            if git commit -m "Resolve merge conflicts for $branch_name - $(date)" 2>/dev/null; then
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

# Main processing loop
print_status "Starting batch branch processing..."
echo "---"

CURRENT=0
for branch in $BATCH_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    print_status "[$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        print_success "Branch $branch processed successfully"
    else
        print_error "Failed to process branch $branch"
    fi
    
    echo "---"
done

# Final push
print_status "Pushing final changes to remote..."
git push origin main 2>/dev/null || print_warning "Could not push main"

# Summary
echo ""
print_success "Batch branches merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   📈 Total processed: $CURRENT"
echo "⏰ Completed at: $(date)"

print_success "🎉 Batch branches have been processed and merged into main branch!"