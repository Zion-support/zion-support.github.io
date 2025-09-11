#!/bin/bash

# Backup script to create a safety net before merging
# This creates a backup branch in case we need to rollback

set -e

echo "🛡️ Creating backup before merge process..."

# Create backup branch
backup_branch="backup-before-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$backup_branch"
git push origin "$backup_branch"

echo "✅ Created backup branch: $backup_branch"
echo "You can restore from this backup if needed with:"
echo "  git checkout $backup_branch"
echo "  git checkout -b main-restored"
echo "  git push origin main-restored"

# Switch back to main
git checkout main

echo "🔄 Switched back to main branch"
echo "Backup completed successfully!"