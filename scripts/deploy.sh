#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type checking..."
npm run type-check

# Run linting
echo "🧹 Running linting..."
npm run lint

# Run tests
echo "🧪 Running tests..."
npm run test

# Build the application
echo "🏗️ Building application..."
npm run build

# Run performance optimization
echo "⚡ Running performance optimization..."
node scripts/performance-optimizer.js

# Check build success
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🎉 Application is ready for deployment!"
    
    # Optional: Deploy to Vercel
    if command -v vercel &> /dev/null; then
        echo "🚀 Deploying to Vercel..."
        vercel --prod
    else
        echo "💡 To deploy to Vercel, install the Vercel CLI: npm i -g vercel"
    fi
    
    # Optional: Deploy to Netlify
    if command -v netlify &> /dev/null; then
        echo "🌐 Deploying to Netlify..."
        netlify deploy --prod --dir=.next
    else
        echo "💡 To deploy to Netlify, install the Netlify CLI: npm i -g netlify-cli"
    fi
    
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "🎊 Deployment process completed!"