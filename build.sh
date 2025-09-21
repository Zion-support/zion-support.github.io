#!/bin/bash
set -euo pipefail

echo "Starting Netlify/Vite build process (npm) ..."

# Ensure we're in the workspace
cd /workspace

# Use npm consistently to mirror netlify.toml
if [ "${NETLIFY:-false}" = "true" ]; then
  echo "Detected Netlify environment - installing dependencies with npm ci..."
  npm ci --ignore-scripts --no-audit
else
  echo "Local environment - cleaning and installing dependencies with npm ci..."
  rm -rf node_modules dist .npm _cache .pnpm-store .yarn .yarn-cache
  npm ci --ignore-scripts --no-audit
fi

echo "Building project with npm run build:netlify ..."
npm run build:netlify
echo "Build completed successfully!"
