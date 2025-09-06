#!/bin/bash

# Enhanced Build Script
echo "🚀 Starting enhanced build process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --silent

# Run linting
echo "🔍 Running linting..."
npm run lint --silent

# Run type checking
echo "🔧 Running type checking..."
npm run type-check --silent

# Build application
echo "🏗️ Building application..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run test --silent

# Generate reports
echo "📊 Generating reports..."
npm run perf:audit

echo "✅ Enhanced build completed successfully!"
