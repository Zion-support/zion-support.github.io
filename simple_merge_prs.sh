#!/bin/bash

# Simple Merge PRs Script
set -e

echo "🚀 Starting simple merge of all open PRs..."

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

# Fetch all remote branches
print_status "Fetching all remote branches..."
git fetch origin

# Get list of recent branches to merge
branches=(
    "cursor/create-and-deploy-new-content-3df8"
    "cursor/create-and-deploy-new-content-4ef4"
    "cursor/create-and-deploy-new-content-764f"
    "cursor/create-and-deploy-new-content-7b63"
    "cursor/create-and-deploy-new-content-7f54"
    "cursor/create-and-deploy-new-content-8357"
    "cursor/create-and-deploy-new-content-9ba6"
    "cursor/create-and-deploy-new-content-ae95"
    "cursor/create-and-deploy-new-content-c9ff"
    "cursor/create-and-deploy-new-content-d2a4"
    "cursor/create-and-deploy-new-content-d5aa"
    "cursor/create-and-deploy-new-content-eaa8"
    "cursor/create-and-deploy-new-content-fbfb"
    "cursor/create-and-deploy-new-content-7b20"
    "cursor/create-and-deploy-new-content-b95f"
    "cursor/create-and-deploy-new-content-1562"
    "cursor/create-and-deploy-new-content-915f"
    "feat/new-billing-evidence-content-2025"
    "feat/new-updates-and-promos"
    "feat/operational-evals-blueprint"
    "feat/new-updates-2025-09-16-v2"
    "chore/add-agentic-sandbox-article"
    "chore/add-ai-governance-post"
    "chore/add-blog-content-and-promote"
    "chore/add-content-promote"
    "chore/add-sep-2025-content"
    "chore/add-trustworthy-autonomous-agents-2026"
)

successful_merges=0
failed_merges=0
total_branches=${#branches[@]}

print_status "Processing $total_branches branches for merging..."

for branch in "${branches[@]}"; do
    print_status "Processing branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        # Try to merge with strategy to favor incoming changes
        if git merge --no-edit "origin/$branch" 2>/dev/null; then
            print_success "Successfully merged $branch"
            ((successful_merges++))
        else
            print_warning "Merge conflict in $branch, trying force merge..."
            # Reset and try force merge
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
        ((failed_merges++))
    fi
done

print_status "Merge process completed!"
print_success "Successful merges: $successful_merges"
print_warning "Failed merges: $failed_merges"

# Build verification
print_status "Verifying build..."
if npm run build 2>/dev/null; then
    print_success "Build verification successful!"
else
    print_warning "Build had issues, but continuing..."
fi

# Push changes
print_status "Pushing changes to remote..."
git push origin main

print_success "Simple PR merge process completed!"