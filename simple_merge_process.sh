#!/bin/bash

# Simple Merge Process Script
# This script handles the merge process step by step

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

# Step 1: Check current status
print_status "Checking current git status..."
git status

# Step 2: Resolve critical conflicts
print_status "Resolving critical merge conflicts..."
python3 resolve_critical_conflicts.py

# Step 3: Check status again
print_status "Checking status after conflict resolution..."
git status

# Step 4: Try to merge main
print_status "Attempting to merge main branch..."
git checkout main
git pull origin main

# Step 5: Check for any remaining conflicts
print_status "Checking for remaining conflicts..."
if git status | grep -q "both modified"; then
    print_warning "Still have conflicts, attempting to resolve..."
    python3 resolve_critical_conflicts.py
fi

# Step 6: Final status check
print_status "Final status check..."
git status
git log --oneline -5

print_success "Merge process completed!"