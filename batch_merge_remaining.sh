#!/bin/bash

# Batch Merge Remaining PRs Script
set -e

echo "🚀 Starting batch merge of remaining PRs..."

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

# Get list of recent cursor branches
print_status "Getting recent cursor branches..."
git fetch origin

# Focus on the most recent branches first
recent_branches=(
    "cursor/create-and-deploy-new-content-b497"
    "cursor/create-and-deploy-new-content-db92"
    "feat/new-content-sept-2025"
    "feature/new-content-2026"
    "feature/new-content-sep-2025"
    "feature/revolutionary-content-2026"
    "revolutionary-content-2026"
    "feat/new-content-ads"
    "feat/new-blog-content-sept16"
    "feat/new-content-sept16"
    "feat/content-and-homepage-promos-20250916"
    "feat/new-sept-2025-blog"
    "feat/add-sept16-content-promos"
    "feat/new-updates-2025-09-16"
    "content/updates-and-blogs-2025-09-16"
    "chore/create-and-deploy-new-content"
    "chore/new-content-2025-09-16"
    "chore/add-updates-2025-09-16"
)

successful_merges=0
failed_merges=0

print_status "Processing ${#recent_branches[@]} priority branches..."

for branch in "${recent_branches[@]}"; do
    print_status "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        # Try to merge the branch
        if git merge --no-edit "origin/$branch" 2>/dev/null; then
            print_success "Successfully merged $branch"
            ((successful_merges++))
        else
            print_warning "Merge conflict in $branch, skipping..."
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
    else
        print_warning "Branch $branch does not exist, skipping..."
    fi
done

print_status "Batch merge process completed!"
print_success "Successful merges: $successful_merges"
print_warning "Failed merges: $failed_merges"

# Push changes
print_status "Pushing changes to remote..."
git push origin main

print_success "Batch merge process completed!"