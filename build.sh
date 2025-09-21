#!/bin/bash
set -e

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building application..."
NODE_OPTIONS="--openssl-legacy-provider" npm run build

echo "Exporting static files..."
NODE_OPTIONS="--openssl-legacy-provider" npx next export

echo "Build completed successfully!"