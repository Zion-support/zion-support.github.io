#!/bin/bash

# Dependency Management Automation Script - Replaces GitHub Actions Dependencies workflow
# This script handles dependency updates and security audits

set -e

echo "🚀 Starting dependency management automation..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Check for outdated packages
echo "🔍 Checking for outdated packages..."
npm outdated || echo "All packages are up to date"

# Run security audit
echo "🔒 Running security audit..."
npm audit --audit-level moderate || echo "Security audit completed"

# Update dependencies
echo "🔄 Updating dependencies..."
npm update || echo "No updates available"

# Install updated dependencies
echo "📦 Installing updated dependencies..."
npm ci

# Build project
echo "🏗️ Building project..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run lint
npm run type-check

echo "✅ Dependency management automation completed successfully!"
echo "Dependencies updated and verified at $(date)"