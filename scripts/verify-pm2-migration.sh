#!/bin/bash

# PM2 Migration Verification Script
# This script verifies that the PM2 migration is working correctly

echo "🔍 Verifying PM2 Migration..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
else
    echo "✅ PM2 is already installed"
fi

# Check if ecosystem.config.cjs exists
if [ -f "ecosystem.config.cjs" ]; then
    echo "✅ ecosystem.config.cjs found"
else
    echo "❌ ecosystem.config.cjs not found"
    exit 1
fi

# Check if automation scripts exist
if [ -f "scripts/automation/weekly-dependency-manager.cjs" ]; then
    echo "✅ weekly-dependency-manager.cjs found"
else
    echo "❌ weekly-dependency-manager.cjs not found"
    exit 1
fi

if [ -f "scripts/automation/weekly-security-analysis.cjs" ]; then
    echo "✅ weekly-security-analysis.cjs found"
else
    echo "❌ weekly-security-analysis.cjs not found"
    exit 1
fi

if [ -f "scripts/automation/workflow-status-monitor.cjs" ]; then
    echo "✅ workflow-status-monitor.cjs found"
else
    echo "❌ workflow-status-monitor.cjs not found"
    exit 1
fi

# Test the scripts
echo "🧪 Testing automation scripts..."

echo "Testing weekly-dependency-manager..."
node scripts/automation/weekly-dependency-manager.cjs

echo "Testing weekly-security-analysis..."
node scripts/automation/weekly-security-analysis.cjs

echo "Testing workflow-status-monitor..."
node scripts/automation/workflow-status-monitor.cjs

# Check if reports were generated
if [ -f "weekly-dependency-error-report.json" ]; then
    echo "✅ weekly-dependency-error-report.json generated"
else
    echo "❌ weekly-dependency-error-report.json not generated"
fi

if [ -f "weekly-security-analysis-report.json" ]; then
    echo "✅ weekly-security-analysis-report.json generated"
else
    echo "❌ weekly-security-analysis-report.json not generated"
fi

if [ -f "workflow-status-report.json" ]; then
    echo "✅ workflow-status-report.json generated"
else
    echo "❌ workflow-status-report.json not generated"
fi

echo "🚀 PM2 Migration verification completed!"
echo ""
echo "To start PM2 processes:"
echo "  pm2 start ecosystem.config.cjs"
echo ""
echo "To monitor processes:"
echo "  pm2 status"
echo ""
echo "To view logs:"
echo "  pm2 logs"