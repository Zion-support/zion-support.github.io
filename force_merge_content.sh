#!/bin/bash

# Force Merge Content Branches Script
set -e

echo "🚀 Starting force merge of content branches..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Ensure we're on main branch
print_status "Switching to main branch..."
git checkout main

# Pull latest changes
print_status "Pulling latest changes..."
git pull origin main

# Focus on content branches that are likely to have new content
content_branches=(
    "feat/new-content-sept16"
    "feat/new-blog-content-sept16"
    "feat/content-and-homepage-promos-20250916"
    "feat/new-updates-2025-09-16"
    "content/updates-and-blogs-2025-09-16"
    "chore/create-and-deploy-new-content"
    "chore/new-content-2025-09-16"
    "chore/add-updates-2025-09-16"
)

successful_merges=0
failed_merges=0

print_status "Processing ${#content_branches[@]} content branches..."

for branch in "${content_branches[@]}"; do
    print_status "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        # Try to merge with strategy to favor the incoming branch for content
        if git merge -X theirs --no-edit "origin/$branch" 2>/dev/null; then
            print_success "Successfully merged $branch"
            ((successful_merges++))
        else
            print_warning "Merge conflict in $branch, trying force merge..."
            # If normal merge fails, try to force merge by taking their changes
            git reset --hard HEAD
            if git merge -X theirs --no-edit "origin/$branch" 2>/dev/null; then
                print_success "Successfully force merged $branch"
                ((successful_merges++))
            else
                print_warning "Failed to merge $branch, skipping..."
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
    else
        print_warning "Branch $branch does not exist, skipping..."
    fi
done

print_status "Content merge process completed!"
print_success "Successful merges: $successful_merges"
print_warning "Failed merges: $failed_merges"

# Push changes
print_status "Pushing changes to remote..."
git push origin main

print_success "Content merge process completed!"