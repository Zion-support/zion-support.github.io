#!/bin/bash

# Automated Deployment Script
set -e

echo "🚀 Starting automated deployment..."

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Not on main branch. Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests
echo "🧪 Running tests..."
npm run test

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build application
echo "🔨 Building application..."
npm run build

# Deploy to production
echo "🚀 Deploying to production..."
# Add your deployment commands here
# Example: npm run deploy

echo "✅ Deployment completed successfully!"
