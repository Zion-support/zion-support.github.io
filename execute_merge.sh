#!/bin/bash

# Execute Merge Script
# This script will execute the merge resolution process

echo "🚀 EXECUTE MERGE - Starting Merge Resolution Process..."

# Make scripts executable
chmod +x master_merge_resolver.sh
chmod +x github_pr_merger.py

# Check if we're in the right directory
if [ ! -f "master_merge_resolver.sh" ]; then
    echo "❌ Scripts not found. Please run from the correct directory."
    exit 1
fi

echo "📍 Current directory: $(pwd)"
echo "📋 Available scripts:"
ls -la *.sh *.py 2>/dev/null || echo "No scripts found"

# Execute the master merge resolver
echo "🔄 Executing Master Merge Resolver..."
./master_merge_resolver.sh

# Execute the GitHub PR merger
echo "🔄 Executing GitHub PR Merger..."
python3 github_pr_merger.py

echo "🎉 Merge resolution process completed!"
echo "📋 Check the log files for details."