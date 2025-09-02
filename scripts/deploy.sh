#!/bin/bash

# Automated Deployment Script
echo "🚀 Starting automated deployment..."

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Not on main branch. Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm run test

# Build application
echo "🏗️ Building application..."
npm run build

# Deploy to production
echo "🚀 Deploying to production..."
pm2 restart ecosystem.config.cjs --env production

# Health check
echo "🏥 Running health check..."
sleep 10
curl -f http://localhost:3000/api/health || exit 1

echo "✅ Deployment completed successfully!"
