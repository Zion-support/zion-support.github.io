#!/bin/bash
# Script to fix Netlify dependency installation issues

echo "Clearing yarn cache..."
yarn cache clean

echo "Removing node_modules and lock files..."
rm -rf node_modules
rm -f yarn.lock

echo "Installing dependencies with fresh cache..."
yarn install --no-cache

echo "Build test..."
npm run build:netlify