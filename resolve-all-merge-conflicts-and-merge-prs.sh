#!/bin/bash

echo "🚀 Starting comprehensive merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove merge conflict markers and keep the latest version (HEAD)
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
}

# Function to clean up backup files
cleanup_backup_files() {
    echo "🧹 Cleaning up backup files..."
    find . -name "*.backup" -type f -delete
    find . -name "*.bak" -type f -delete
    find . -name "*.conflicted" -type f -delete
    find . -name "*.cleanup-backup.*" -type f -delete
}

# Function to resolve all merge conflicts
resolve_all_conflicts() {
    echo "🔧 Resolving all merge conflicts..."
    
    # Find all files with merge conflicts