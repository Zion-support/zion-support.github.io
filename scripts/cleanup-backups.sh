#!/bin/bash

# Cleanup script to remove backup and temporary files
echo "🧹 Starting cleanup of backup and temporary files..."

# Count files before cleanup
BACKUP_COUNT=$(find . -name "*.backup" -o -name "*.backup.*" | wc -l)
DISABLED_COUNT=$(find . -name "*.disabled" | wc -l)

echo "Found $BACKUP_COUNT backup files"
echo "Found $DISABLED_COUNT disabled files"

# Remove backup files
echo "Removing backup files..."
find . -name "*.backup" -type f -delete
find . -name "*.backup.*" -type f -delete

# Remove disabled files (but not directories)
echo "Removing disabled files..."
find . -name "*.disabled" -type f -delete

# Remove common temporary files
echo "Removing temporary files..."
find . -name "*.tmp" -type f -delete
find . -name "*.temp" -type f -delete
find . -name "*~" -type f -delete
find . -name ".DS_Store" -type f -delete

# Remove empty directories
echo "Removing empty directories..."
find . -type d -empty -delete 2>/dev/null || true

echo "✅ Cleanup complete!"
echo "Repository is now cleaner and more organized."