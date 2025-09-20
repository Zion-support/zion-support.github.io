#!/bin/bash

echo "🔧 Resolving all remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove all conflict markers and keep our version (HEAD)
