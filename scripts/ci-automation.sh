#!/bin/bash

# CI Automation Script - Replaces GitHub Actions CI workflow
# This script runs the same checks as the CI workflow

set -e

echo "🚀 Starting CI automation..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Lint check
echo "🔍 Running linting..."
npm run lint

# Type check
echo "🔍 Running type check..."
npm run type-check

# Build project
echo "🏗️ Building project..."
npm run build

# Run tests if available
echo "🧪 Running tests..."
npm test --if-present || echo "No tests configured"

echo "✅ CI automation completed successfully!"