#!/bin/bash

echo "Cleaning up backup files..."

# Remove all backup files
find . -name "*.backup.*" -type f -delete
find . -name "*.cleanup-backup.*" -type f -delete

echo "Backup files cleaned up successfully!"

# Show remaining files to verify cleanup
echo "Remaining files in src/components/ui/:"
ls -la src/components/ui/ | grep -v "\.jsx$\|\.tsx$\|\.js$\|\.ts$" | head -10