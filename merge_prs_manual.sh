#!/bin/bash

# Manual PR Merge Script
set -e

echo "🚀 Starting manual PR merge process..."

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

# Get list of remote branches
print_status "Getting list of remote branches..."
git fetch origin

# Get cursor branches only
cursor_branches=$(git branch -r | grep "cursor/" | head -50)

print_status "Found $(echo "$cursor_branches" | wc -l) cursor branches to process"

successful_merges=0
failed_merges=0

for branch in $cursor_branches; do
    branch_name=$(echo "$branch" | sed 's/origin\///')
    print_status "Processing branch: $branch_name"
    
    # Try to merge the branch
    if git merge --no-edit "origin/$branch_name" 2>/dev/null; then
        print_success "Successfully merged $branch_name"
        ((successful_merges++))
    else
        print_warning "Merge conflict in $branch_name, skipping..."
        git merge --abort 2>/dev/null || true
        ((failed_merges++))
    fi
done

print_status "Merge process completed!"
print_success "Successful merges: $successful_merges"
print_warning "Failed merges: $failed_merges"

# Push changes
print_status "Pushing changes to remote..."
git push origin main

print_success "Manual PR merge process completed!"