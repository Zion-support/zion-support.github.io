#!/bin/bash

# Script to automatically resolve merge conflicts by choosing HEAD version
# This is a quick fix for simple conflicts

echo "Starting automatic conflict resolution..."

# Find all files with merge conflicts
    sed -i '/=======/,/>>>>>>>/d' "$file"
    
