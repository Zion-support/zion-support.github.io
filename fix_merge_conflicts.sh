#!/bin/bash

# Script to fix merge conflicts in blog files
# This script removes merge conflict markers and keeps the HEAD version

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(grep -l "^
    sed -i '/^
    
    echo "Fixed: $file"
done

echo "Merge conflict resolution completed for first 50 files."
echo "Run this script again to process more files if needed."