#!/bin/bash

# Deployment Script for Zion Tech Group
# Generated on 2025-09-03T13:59:38.579Z

set -e

echo "🚀 Starting deployment process..."

# Pre-deployment checks
echo "🔍 Running pre-deployment checks..."
npm install
npm run lint
npm run type-check
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
tar -czf deployment-$(date +%Y%m%d-%H%M%S).tar.gz .next public package.json package-lock.json

echo "✅ Deployment package created successfully"
echo "📋 Deployment ready for production"

# Optional: Deploy to production
# echo "🌐 Deploying to production..."
# # Add your deployment commands here
# # Example: rsync, scp, docker push, etc.

echo "🎉 Deployment process completed!"
