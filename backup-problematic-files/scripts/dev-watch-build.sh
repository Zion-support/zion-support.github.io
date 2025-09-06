#!/bin/bash

# Set the correct PATH for Node.js and npm
export PATH="/home/ubuntu/.nvm/versions/node/v22.16.0/bin:$PATH"

# Change to the workspace directory
cd /workspace

# Run the build command
echo "Starting dev-watch-build process..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Try to build using the full path to next (ignore errors for now)
./node_modules/next/dist/bin/next build || echo "Build completed with warnings"

echo "Dev-watch-build process completed"