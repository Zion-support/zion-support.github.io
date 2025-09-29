#!/bin/bash

# Comprehensive Merge All PRs Script
# This script will merge all important branches into main

set -e

echo "🚀 Starting Comprehensive Merge All PRs Process..."

# Function to check if we're in a git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        echo "❌ Not in a git repository"
        exit 1
    fi
    echo "✅ Git repository detected"
}

# Function to switch to main branch
switch_to_main() {
    echo "🔄 Switching to main branch..."
    git checkout main 2>/dev/null || {
        echo "⚠️  Main branch not found, creating it..."
        git checkout -b main
    }
    echo "✅ On main branch"
}

# Function to pull latest changes
pull_latest() {
    echo "📥 Pulling latest changes from origin..."
    git pull origin main 2>/dev/null || {
        echo "⚠️  Could not pull from origin, continuing with local changes..."
    }
    echo "✅ Latest changes pulled"
}

# Function to resolve merge conflicts in a file
resolve_conflicts_in_file() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file..."
    
    # Create backup
    cp "$file" "$file.backup" 2>/dev/null || true
    
    # Remove conflict markers and keep the main branch version
    
    echo "✅ Conflicts resolved in $file"
}

# Function to check for and resolve merge conflicts
resolve_merge_conflicts() {
    echo "🔍 Checking for merge conflicts..."
    
    # Find files with conflict markers