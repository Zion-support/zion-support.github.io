#!/bin/bash

# Aggressive Merge Conflict Resolution Script
# This script will aggressively resolve conflicts and merge all PRs

set -e

echo "🚀 Starting aggressive merge conflict resolution..."

# Function to resolve conflicts by keeping our version
resolve_conflicts_aggressive() {
    echo "⚡ Aggressively resolving conflicts by keeping our changes..."
    
    # For each conflicted file, keep our version (HEAD)
    git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in: $file"
            # Use our version (HEAD)
            git checkout --ours "$file" 2>/dev/null || true
            # Remove any remaining conflict markers
