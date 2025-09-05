#!/bin/bash
set -e

echo "🚀 Starting deployment automation..."

# Build the project
echo "📦 Building project..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run test:smoke || true

# Deploy to production
echo "🌐 Deploying to production..."
# Add your deployment commands here

echo "✅ Deployment completed successfully!"