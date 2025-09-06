#!/bin/bash

echo "🔧 Resolving merge conflicts automatically..."

# Function to resolve conflicts by choosing incoming changes
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Check if file exists and has conflicts
