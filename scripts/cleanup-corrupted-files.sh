#!/bin/bash

echo "Starting cleanup of corrupted files and directories..."

# Remove corrupted directories
echo "Removing corrupted directories..."
rm -rf pages.disabled
rm -rf pages.disabled_auto
rm -rf pages.corrupted.1756905863
rm -rf pages.disabled.full
rm -rf pages.broken
rm -rf pages.blog.disabled
rm -rf pages._archive_corrupted
rm -rf pages._quarantine
rm -rf pages-disabled
rm -rf pages-quarantine
rm -rf pages.__backup
rm -rf src.pages.disabled
rm -rf temp_broken_files
rm -rf temp-backup
rm -rf temp_working

# Remove empty or corrupted files
echo "Removing empty and corrupted files..."
find . -name "*.tsx" -size 0 -delete
find . -name "*.ts" -size 0 -delete
find . -name "*.js" -size 0 -delete
find . -name "*.jsx" -size 0 -delete

# Remove files with only merge conflict markers
find . -name "*.tsx" -exec grep -l "^<<<<<<< HEAD" {} \; | xargs rm -f
find . -name "*.ts" -exec grep -l "^<<<<<<< HEAD" {} \; | xargs rm -f
find . -name "*.js" -exec grep -l "^<<<<<<< HEAD" {} \; | xargs rm -f
find . -name "*.jsx" -exec grep -l "^<<<<<<< HEAD" {} \; | xargs rm -f

echo "Cleanup completed!"