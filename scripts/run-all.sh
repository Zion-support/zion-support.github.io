#!/bin/bash

echo "🚀 Starting comprehensive automation run..."

# Create logs directory
mkdir -p automation/logs

# Run all automations
echo "📦 Installing dependencies..."
npm install

echo "🔧 Running type check..."
npm run type-check

echo "🧹 Running lint fix..."
npm run lint:fix

echo "🏗️ Building application..."
npm run build

echo "🧪 Running smoke tests..."
npm run test:smoke

echo "🔒 Running security audit..."
npm run security:audit

echo "⚡ Running performance monitor..."
npm run perf:monitor

echo "🔍 Running SEO optimizer..."
npm run automation:seo

echo "❤️ Running health check..."
npm run automation:health

echo "✨ Running quick improvements..."
node scripts/quick-app-improvements.cjs

echo "🚀 Running performance improver..."
node scripts/performance-improver.cjs

echo "🛡️ Running security improver..."
node scripts/security-improver.cjs

echo "📊 Checking git status..."
git status

echo "➕ Adding all changes..."
git add .

echo "💾 Committing changes..."
git commit -m "Automated improvements and fixes"

echo "📤 Pushing changes..."
git push origin main

echo "🎉 Comprehensive automation run completed!"