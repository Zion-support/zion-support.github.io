#!/bin/bash
echo "🚀 Deploying to Netlify..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
  echo "❌ Netlify CLI not found. Please install it with: npm install -g netlify-cli"
  exit 1
fi

# Deploy to Netlify
echo "🚀 Deploying to Netlify..."
netlify deploy --prod --dir=.next

echo "✅ Deployment to Netlify completed"
