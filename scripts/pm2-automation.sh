#!/bin/bash

# PM2 Automation Script to replace GitHub Actions
# This script orchestrates the entire CI/CD pipeline

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Starting PM2 Automation Pipeline..."

# Function to run simplified CI process
run_ci() {
    echo "📋 Running simplified CI process..."
    cd "$PROJECT_ROOT"
    bash scripts/simple-ci.sh
}

# Function to run tests (simplified)
run_tests() {
    echo "🧪 Running basic tests..."
    cd "$PROJECT_ROOT"
    
    # Check if build output exists
    if [ -d "dist" ] && [ -f "dist/index.html" ]; then
        echo "✅ Build output verified"
        echo "📁 Build contains:"
        ls -la dist/
        return 0
    else
        echo "❌ Build output not found or incomplete"
        return 1
    fi
}

# Function to run deployment
run_deploy() {
    echo "🚀 Running deployment..."
    cd "$PROJECT_ROOT"
    
    # Check build output
    if [ ! -d "dist" ]; then
        echo "❌ Build output not found. Run CI first."
        return 1
    fi
    
    echo "✅ Build output verified"
    echo "📁 Deployment ready with:"
    ls -la dist/
    
    # Save PM2 configuration
    pm2 save
    
    echo "🚀 Ready for deployment to your hosting platform"
    echo "📅 Deployment completed at $(date)"
    
    # Add your deployment commands here
    # Examples:
    # - AWS S3: aws s3 sync dist/ s3://your-bucket-name/
    # - Netlify: npx netlify-cli deploy --prod --dir=dist
    # - Vercel: npx vercel --prod --cwd=dist
    # - Custom script: ./scripts/deploy.sh
    
    echo "✅ Deployment process completed"
}

# Function to start PM2 processes
start_pm2() {
    echo "🔄 Starting PM2 processes..."
    cd "$PROJECT_ROOT"
    
    # Start the main application
    pm2 start "npm run dev" --name "zion-app"
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    echo "✅ PM2 processes started successfully"
}

# Function to monitor PM2 processes
monitor_pm2() {
    echo "📊 PM2 Status:"
    pm2 status
    
    echo "📈 PM2 Logs (last 50 lines):"
    pm2 logs --lines 50
}

# Function to restart PM2 processes
restart_pm2() {
    echo "🔄 Restarting PM2 processes..."
    pm2 restart all
    echo "✅ PM2 processes restarted"
}

# Function to stop PM2 processes
stop_pm2() {
    echo "🛑 Stopping PM2 processes..."
    pm2 stop all
    echo "✅ PM2 processes stopped"
}

# Function to run full pipeline
run_full_pipeline() {
    echo "🔄 Running full CI/CD pipeline..."
    
    # Run CI
    run_ci
    
    # Run tests
    run_tests
    
    # If CI and tests pass, run deployment
    if [ $? -eq 0 ]; then
        echo "✅ CI and tests passed, proceeding with deployment..."
        run_deploy
        
        # Restart PM2 processes after deployment
        restart_pm2
    else
        echo "❌ CI or tests failed, skipping deployment"
        exit 1
    fi
    
    echo "🎉 Full pipeline completed successfully!"
}

# Function to show help
show_help() {
    echo "PM2 Automation Script - GitHub Actions Replacement"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  ci          Run CI process (build, verify)"
    echo "  test        Run basic tests"
    echo "  deploy      Run deployment process"
    echo "  start       Start PM2 processes"
    echo "  stop        Stop PM2 processes"
    echo "  restart     Restart PM2 processes"
    echo "  monitor     Show PM2 status and logs"
    echo "  full        Run full CI/CD pipeline (default)"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 ci       # Run only CI"
    echo "  $0 deploy   # Run only deployment"
    echo "  $0          # Run full pipeline"
}

# Main script logic
case "${1:-full}" in
    "ci")
        run_ci
        ;;
    "test")
        run_tests
        ;;
    "deploy")
        run_deploy
        ;;
    "start")
        start_pm2
        ;;
    "stop")
        stop_pm2
        ;;
    "restart")
        restart_pm2
        ;;
    "monitor")
        monitor_pm2
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    "full"|*)
        run_full_pipeline
        ;;
esac