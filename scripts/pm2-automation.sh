#!/usr/bin/env bash
set -euo pipefail

mkdir -p logs

if ! command -v pm2 >/dev/null 2>&1; then
  npm i -g pm2
fi

# Build once before starting preview
npm run build || true

# Start/Reload ecosystem (avoid npm install in sub-scripts by setting CI)
export CI=true
pm2 startOrReload ecosystem.config.cjs --update-env
pm2 save

# Enable logrotate
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 14
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

echo "PM2 processes running:" | tee -a logs/pm2-bootstrap.log
pm2 status | cat
#!/bin/bash

# PM2 Automation Script - Replaces GitHub Actions
# This script handles building, testing, and quality checks

set -e

echo "🚀 Starting PM2 Automation Pipeline..."

# Function to run quality checks
run_quality_checks() {
    echo "🔍 Running quality checks..."
    
    # Install dependencies
    echo "📦 Installing dependencies..."
    npm install
    
    # Lint check
    echo "🧹 Running linting..."
    npm run lint
    
    # Type check
    echo "🔍 Running type check..."
    npm run type-check
    
    echo "✅ Quality checks completed successfully!"
}

# Function to build project
build_project() {
    echo "🏗️ Building project..."
    
    # Clean previous build
    if [ -d "dist" ]; then
        echo "🧹 Cleaning previous build..."
        rm -rf dist
    fi
    
    # Build project
    npm run build
    
    # Verify build output
    if [ ! -d "dist" ]; then
        echo "❌ Build failed: dist folder not found"
        exit 1
    fi
    
    echo "✅ Build successful! Found dist folder with:"
    ls -la dist/
    
    # Check for essential files
    if [ -f dist/index.html ]; then
        echo "✓ index.html found"
    else
        echo "✗ index.html not found"
        exit 1
    fi
    
    if [ -f dist/assets/index-*.css ] || [ -f dist/css/index-*.css ]; then
        echo "✓ CSS files found"
    else
        echo "✗ CSS files not found"
        exit 1
    fi
    
    if [ -f dist/assets/index-*.js ] || [ -f dist/js/index-*.js ]; then
        echo "✓ JavaScript files found"
    else
        echo "✗ JavaScript files not found"
        exit 1
    fi
    
    echo "✅ Build verification completed!"
}

# Function to run tests
run_tests() {
    echo "🧪 Running tests..."
    
    # Check if test script exists
    if npm run | grep -q "test"; then
        npm test
        echo "✅ Tests completed!"
    else
        echo "⚠️ No test script found, skipping tests"
    fi
}

# Function to deploy with PM2
deploy_with_pm2() {
    echo "🚀 Deploying with PM2..."
    
    # Stop existing processes
    pm2 stop bolt-zion-app 2>/dev/null || true
    pm2 delete bolt-zion-app 2>/dev/null || true
    
    # Start the application with PM2
    pm2 start ecosystem.config.js --env production
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 to start on system boot
    pm2 startup
    
    echo "✅ PM2 deployment completed!"
}

# Function to monitor application
monitor_application() {
    echo "📊 Monitoring application..."
    
    # Show PM2 status
    pm2 status
    
    # Show logs
    echo "📋 Recent logs:"
    pm2 logs bolt-zion-app --lines 10
    
    # Show system resources
    echo "💻 System resources:"
    pm2 monit
}

# Main execution
case "${1:-all}" in
    "quality")
        run_quality_checks
        ;;
    "build")
        build_project
        ;;
    "test")
        run_tests
        ;;
    "deploy")
        deploy_with_pm2
        ;;
    "monitor")
        monitor_application
        ;;
    "all")
        echo "🔄 Running complete pipeline..."
        run_quality_checks
        build_project
        run_tests
        deploy_with_pm2
        echo "🎉 Complete pipeline finished successfully!"
        ;;
    *)
        echo "Usage: $0 {quality|build|test|deploy|monitor|all}"
        echo "  quality  - Run quality checks (lint, type-check)"
        echo "  build    - Build the project"
        echo "  test     - Run tests"
        echo "  deploy   - Deploy with PM2"
        echo "  monitor  - Monitor application"
        echo "  all      - Run complete pipeline (default)"
        exit 1
        ;;
esac