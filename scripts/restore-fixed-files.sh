#!/bin/bash

# Restore Fixed Files Script
# This script restores the fixed files from backups

set -e

echo "🔄 Restoring Fixed Files from Backups"
echo "====================================="

# Backup directory
BACKUP_DIR="backups/fixed-files"

# Files that need to be restored
FIXED_FILES=(
    "components/ErrorBoundary.tsx"
    "components/PerformanceMonitor.tsx"
    "pages/index.tsx"
)

if [ ! -d "$BACKUP_DIR" ]; then
    echo "❌ Backup directory not found: $BACKUP_DIR"
    exit 1
fi

# Find the most recent backup for each file
for file in "${FIXED_FILES[@]}"; do
    filename=$(basename "$file")
    latest_backup=$(ls -t "$BACKUP_DIR"/${filename}.fixed.* 2>/dev/null | head -1)
    
    if [ -n "$latest_backup" ]; then
        echo "📋 Restoring: $file from $latest_backup"
        cp "$latest_backup" "$file"
        echo "✅ Restored: $file"
    else
        echo "⚠️  No backup found for: $file"
    fi
done

echo ""
echo "✅ File restoration completed!"
echo "💡 Run 'npm run build' to verify the fixes are working"