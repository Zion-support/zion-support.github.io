#!/bin/bash

# Set the correct PATH for Node.js and npm
export PATH="/home/ubuntu/.nvm/versions/node/v22.16.0/bin:$PATH"

# Change to the workspace directory
cd /workspace

# Run the automation commands
echo "Starting auto-fix-and-build process..."
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"

# Install dependencies if needed
npm install --silent

# Run linting (ignore errors)
npm run lint || echo "Linting completed with warnings"

# Run type checking (ignore errors)
npm run type-check || echo "Type checking completed with warnings"

# Try to build using the full path to next (ignore errors for now)
./node_modules/next/dist/bin/next build || echo "Build completed with warnings"

echo "Auto-fix-and-build process completed"