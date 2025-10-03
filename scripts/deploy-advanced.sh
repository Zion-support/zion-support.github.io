#!/bin/bash

# Advanced Deployment Script
echo "🚀 Starting advanced deployment..."

# Build optimization
echo "📦 Optimizing build..."
npm run build:production

# Performance testing
echo "⚡ Running performance tests..."
npm run test:performance

# Security audit
echo "🔒 Running security audit..."
npm audit --audit-level moderate

# Lighthouse audit
echo "🏗️ Running Lighthouse audit..."
npx lighthouse http://localhost:3000 --output=json --output-path=lighthouse-report.json

# Bundle analysis
echo "📊 Analyzing bundle..."
npm run analyze

# Deployment
echo "🚀 Deploying to production..."
npm run deploy

echo "✅ Advanced deployment completed!"
