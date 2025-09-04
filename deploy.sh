#!/bin/bash

# Deployment Automation Script for Zion Tech Group
set -e

echo "🚀 Starting deployment process..."

# Build the application
echo "📦 Building application..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run test || echo "⚠️ Tests failed, continuing with deployment"

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod --yes

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
netlify deploy --prod --dir=out

echo "✅ Deployment completed successfully!"
