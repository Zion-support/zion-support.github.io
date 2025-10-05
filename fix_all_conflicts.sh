#!/bin/bash

# Script to fix ALL merge conflicts in blog files
echo "Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts (excluding backups)
conflict_files=$(find /workspace/app/blog -name "*.tsx" -not -name "*.backup" -exec grep -l "^
done

echo "Merge conflict resolution completed for $count files."