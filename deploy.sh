#!/bin/bash

echo "🚀 Starting deployment process..."

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
npm test -- --passWithNoTests

# Build application
echo "🏗️ Building application..."
npm run build

# Deploy to production
echo "🚀 Deploying to production..."
# Add your deployment commands here

echo "✅ Deployment completed successfully!"
