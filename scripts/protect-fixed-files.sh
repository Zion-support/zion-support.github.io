#!/bin/bash

# Protect Fixed Files Script
# This script creates backups of fixed files and prevents automation from overwriting them

set -e

echo "🛡️  Protecting Fixed Files from Automation Overwrites"
echo "="

# Create backup directory
BACKUP_DIR="backups/fixed-files"
mkdir -p "$BACKUP_DIR"

# Files that have been fixed and need protection
FIXED_FILES=(
    "components/ErrorBoundary.tsx"
    "components/PerformanceMonitor.tsx"
    "pages/index.tsx"
)

# Create backups with timestamp
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")

for file in "${FIXED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "📋 Backing up: $file"
        cp "$file" "$BACKUP_DIR/${file##*/}.fixed.$TIMESTAMP"
        
        # Create a symlink to the fixed version
        if [ -L "$file.fixed" ]; then
            rm "$file.fixed"
        fi
        ln -s "$(pwd)/$file" "$file.fixed"
        
        echo "✅ Protected: $file"
    else
        echo "⚠️  File not found: $file"
    fi
done

echo ""
echo "🔒 Protection Summary:"
echo "   - Backups created in: $BACKUP_DIR"
echo "   - Fixed versions linked as: *.fixed"
echo "   - Use restore-fixed-files.sh to restore if needed"
echo ""
echo "✅ File protection completed!"