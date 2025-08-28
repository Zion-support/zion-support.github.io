#!/bin/bash

echo "🚀 Starting PM2 Automation System for Zion App..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Navigate to project root
cd "$(dirname "$0")/.."

echo "📁 Working directory: $(pwd)"

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the main application
echo "🚀 Starting main Zion app..."
pm2 start ecosystem.config.js --only zion-app

# Start the backend server
echo "🚀 Starting backend server..."
pm2 start ecosystem.config.js --only zion-backend

# Start all automation processes
echo "🤖 Starting automation processes..."

# Start console error fixer first (highest priority)
echo "🔧 Starting console error fixer..."
pm2 start ecosystem.config.js --only console-error-fixer

# Start other automations
echo "🔍 Starting quality checks..."
pm2 start ecosystem.config.js --only quality-checks

echo "🔗 Starting link checker..."
pm2 start ecosystem.config.js --only link-checker

echo "🔗 Starting link integrity checker..."
pm2 start ecosystem.config.js --only link-integrity

echo "📊 Starting performance monitor..."
pm2 start ecosystem.config.js --only performance-monitor

echo "🔒 Starting security audit..."
pm2 start ecosystem.config.js --only security-audit

echo "📦 Starting dependency updates..."
pm2 start ecosystem.config.js --only dependency-updates

echo "🔄 Starting continuous improvement..."
pm2 start ecosystem.config.js --only continuous-improvement

echo "🏗️ Starting daily build test..."
pm2 start ecosystem.config.js --only daily-build-test

echo "📈 Starting front maximizer..."
pm2 start ecosystem.config.js --only front-maximizer

echo "🗺️ Starting sitemap runner..."
pm2 start ecosystem.config.js --only sitemap-runner

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "📋 PM2 Logs:"
pm2 logs --lines 5

echo ""
echo "✅ PM2 Automation System started successfully!"
echo ""
echo "🔧 Console Error Fixer: Runs every 15 minutes"
echo "🔍 Quality Checks: Runs every 3 hours"
echo "🔗 Link Checker: Runs every 30 minutes"
echo "🔗 Link Integrity: Runs every 2 hours"
echo "📊 Performance Monitor: Runs every 2 hours"
echo "🔒 Security Audit: Runs every 4 hours"
echo "📦 Dependency Updates: Runs every 6 hours"
echo "🔄 Continuous Improvement: Runs every 2 hours"
echo "🏗️ Daily Build Test: Runs every hour"
echo "📈 Front Maximizer: Runs every 4 hours"
echo "🗺️ Sitemap Runner: Runs every 6 hours"
echo ""
echo "📖 Useful commands:"
echo "  pm2 status                    - Show all processes"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 logs console-error-fixer  - Show error fixer logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Remove all processes"
echo ""
echo "🔧 The console error fixer will automatically:"
echo "  - Scan for TypeScript/JavaScript errors every 15 minutes"
echo "  - Auto-fix import path issues"
echo "  - Auto-fix syntax errors"
echo "  - Auto-fix type errors"
echo "  - Auto-fix runtime errors"
echo "  - Auto-fix reference errors"
echo "  - Run build tests to verify fixes"
echo "  - Generate detailed error reports"
echo ""
echo "🚀 All automations are now running autonomously!"
