#!/bin/bash
# Development setup script
echo "🚀 Setting up development environment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p .next out logs

# Set up environment
echo "🔧 Setting up environment..."
if [ ! -f .env.local ]; then
    echo "Creating .env.local from .env.example..."
    cp .env.example .env.local 2>/dev/null || echo "No .env.example found"
fi

# Run initial build check
echo "🔨 Running build check..."
npm run build:check

echo "✅ Development environment ready!"
echo "Run 'npm run dev' to start development server"
