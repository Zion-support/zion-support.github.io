#!/bin/bash

# Execute Merge Process Script
# Simple script to execute the merge and improvement process

echo "🚀 Executing Merge Process..."
echo "⏰ Started at: $(date)"

# Make the master script executable
chmod +x master_merge_and_improve.sh

# Try to run the master script
if [ -f "master_merge_and_improve.sh" ]; then
    echo "✅ Found master script, executing..."
    ./master_merge_and_improve.sh
else
    echo "❌ Master script not found"
    exit 1
fi

echo "🎉 Merge process execution completed!"