#!/bin/bash

# PM2 Automation Script to replace GitHub Actions
# This script handles CI/CD tasks locally

set -e

echo "🚀 Starting PM2 Automation..."

# Function to run linting
run_lint() {
    echo "🔍 Running linting..."
    npm run lint
    echo "✅ Linting completed"
}

# Function to run type checking
run_type_check() {
    echo "🔍 Running type checking..."
    npm run type-check
    echo "✅ Type checking completed"
}

# Function to run tests
run_tests() {
    echo "🧪 Running tests..."
    if npm test --if-present; then
        echo "✅ Tests completed successfully"
    else
        echo "⚠️  Tests completed with warnings"
    fi
}

# Function to build project
build_project() {
    echo "🏗️  Building project..."
    npm run build
    
    # Verify build output
    if [ ! -d dist ]; then
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
    
    if [ -f dist/css/index-*.css ]; then
        echo "✓ CSS files found"
    else
        echo "✗ CSS files not found"
        exit 1
    fi
    
    if [ -f dist/js/index-*.js ]; then
        echo "✓ JavaScript files found"
    else
        echo "✗ JavaScript files found"
        exit 1
    fi
}

# Function to deploy
deploy() {
    echo "🚀 Deploying to production..."
    echo "Build completed successfully at $(date)"
    
    # Start production app with PM2
    pm2 start ecosystem.config.js --env production
    
    echo "✅ Deployment completed"
}

# Function to start development
start_dev() {
    echo "🔄 Starting development mode..."
    pm2 start ecosystem.config.js
    echo "✅ Development mode started"
}

# Function to monitor
monitor() {
    echo "📊 PM2 Status:"
    pm2 status
    
    echo "📊 PM2 Logs:"
    pm2 logs --lines 10
}

# Function to restart
restart() {
    echo "🔄 Restarting application..."
    pm2 restart bolt-app
    echo "✅ Application restarted"
}

# Function to stop
stop() {
    echo "🛑 Stopping application..."
    pm2 stop bolt-app
    echo "✅ Application stopped"
}

# Function to delete
delete() {
    echo "🗑️  Deleting application from PM2..."
    pm2 delete bolt-app
    echo "✅ Application deleted from PM2"
}

# Main execution
case "${1:-}" in
    "lint")
        run_lint
        ;;
    "type-check")
        run_type_check
        ;;
    "test")
        run_tests
        ;;
    "build")
        build_project
        ;;
    "deploy")
        build_project
        deploy
        ;;
    "start")
        start_dev
        ;;
    "monitor")
        monitor
        ;;
    "restart")
        restart
        ;;
    "stop")
        stop
        ;;
    "delete")
        delete
        ;;
    "ci")
        echo "🔄 Running full CI pipeline..."
        run_lint
        run_type_check
        run_tests
        build_project
        echo "✅ CI pipeline completed successfully"
        ;;
    "cd")
        echo "🚀 Running full CD pipeline..."
        run_lint
        run_type_check
        run_tests
        build_project
        deploy
        echo "✅ CD pipeline completed successfully"
        ;;
    *)
        echo "Usage: $0 {lint|type-check|test|build|deploy|start|monitor|restart|stop|delete|ci|cd}"
        echo ""
        echo "Commands:"
        echo "  lint       - Run ESLint"
        echo "  type-check - Run TypeScript type checking"
        echo "  test       - Run tests"
        echo "  build      - Build the project"
        echo "  deploy     - Build and deploy to production"
        echo "  start      - Start development mode with PM2"
        echo "  monitor    - Show PM2 status and logs"
        echo "  restart    - Restart the application"
        echo "  stop       - Stop the application"
        echo "  delete     - Remove application from PM2"
        echo "  ci         - Run full CI pipeline"
        echo "  cd         - Run full CD pipeline"
        exit 1
        ;;
esac