#!/bin/bash

# Deployment script for Zion Tech Group Website
set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build the application
echo "🔨 Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

# Run health check
echo "🏥 Running health check..."
npm run health-check || {
    echo "❌ Error: Health check failed."
    exit 1
}

echo "✅ Deployment completed successfully!"
echo "🌐 Application is ready at http://localhost:3000"
