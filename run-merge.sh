#!/bin/bash

echo "Starting PR merge process..."

# Make sure we're in the right directory
cd /workspace

# Check if Node.js is available
if command -v node >/dev/null 2>&1; then
    echo "Using Node.js to run merge script..."
    node merge-all-prs.js
else
    echo "Node.js not available, trying bash script..."
    chmod +x resolve-and-merge-prs.sh
    ./resolve-and-merge-prs.sh
fi

echo "Merge process completed!"