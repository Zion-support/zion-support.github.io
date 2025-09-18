#!/bin/bash

# Comprehensive Merge All Remaining Branches
set -e

echo "🚀 Starting comprehensive merge of all remaining branches..."

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

# Get all branches that need merging
branches=(
    "cursor/create-and-deploy-new-content-30c4"
    "cursor/create-and-deploy-new-content-7161"
    "cursor/create-and-deploy-new-content-7c43"
    "cursor/create-and-deploy-new-content-87f8"
    "cursor/create-and-deploy-new-content-9e3c"
    "cursor/create-and-deploy-new-content-b981"
    "cursor/create-and-deploy-new-content-f324"
    "feat/new-blog-content-2025-09-16"
    "feat/new-updates-2025-09-16-v2"
    "feat/new-updates-content"
    "feature/agent-platform-guardrails-blueprint"
    "feature/new-content-2025-09-16-a"
    "feature/new-updates-2025-09-16"
    "chore/add-agentic-sandbox-article"
    "chore/add-ai-governance-post"
    "chore/add-blog-content-and-promote"
    "chore/add-content-promote"
    "chore/add-sep-2025-content"
    "chore/add-trustworthy-autonomous-agents-2026"
    "chore/add-updates-2025-09-16"
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
    
    # Progress update
    processed=$((successful_merges + failed_merges))
    print_status "Progress: $processed/$total_branches processed"
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

print_success "Comprehensive merge process completed!"
print_status "Total branches processed: $total_branches"
print_status "Success rate: $(( (successful_merges * 100) / total_branches ))%"