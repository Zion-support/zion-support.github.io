#!/bin/bash

# PM2 Automation Integration Helper Script
# This script helps integrate our enhanced PM2 automation into a clean branch

echo "🚀 PM2 Automation Integration Helper"
echo "====================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if we have uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    echo "   Please commit or stash them before proceeding"
    exit 1
fi

echo ""
echo "📋 Available Integration Options:"
echo "1. Create clean branch from remote main"
echo "2. Backup current PM2 automation files"
echo "3. Apply PM2 automation to clean branch"
echo "4. Test PM2 automation integration"
echo "5. Complete integration process"

echo ""
read -p "Select option (1-5): " choice

case $choice in
    1)
        echo "🔄 Creating clean branch from remote main..."
        
        # Fetch latest from remote
        git fetch origin
        
        # Create new clean branch
        git checkout -b pm2-automation-integration origin/main
        
        echo "✅ Clean branch 'pm2-automation-integration' created"
        echo "📍 You are now on the clean branch"
        ;;
        
    2)
        echo "💾 Backing up current PM2 automation files..."
        
        # Create backup directory
        BACKUP_DIR="pm2-automation-backup-$(date +%Y%m%d-%H%M%S)"
        mkdir -p "$BACKUP_DIR"
        
        # Backup PM2 scripts
        cp -r scripts/pm2/ "$BACKUP_DIR/"
        
        # Backup configuration files
        cp ecosystem.config.js "$BACKUP_DIR/"
        cp package.json "$BACKUP_DIR/"
        
        # Backup documentation
        cp PM2_AUTOMATION_README.md "$BACKUP_DIR/"
        cp PM2_AUTOMATION_MERGE_SUMMARY.md "$BACKUP_DIR/"
        
        echo "✅ Backup created in: $BACKUP_DIR"
        ;;
        
    3)
        echo "🔧 Applying PM2 automation to clean branch..."
        
        # Check if we're on the integration branch
        if [[ "$CURRENT_BRANCH" != "pm2-automation-integration" ]]; then
            echo "❌ Error: Please switch to 'pm2-automation-integration' branch first"
            exit 1
        fi
        
        # Create necessary directories
        mkdir -p scripts/pm2
        mkdir -p logs/pm2
        
        # Copy PM2 automation files
        echo "📁 Copying PM2 automation scripts..."
        cp -r ../pm2-automation-clean/scripts/pm2/* scripts/pm2/
        
        # Copy configuration files
        echo "⚙️  Copying configuration files..."
        cp ../pm2-automation-clean/ecosystem.config.js .
        cp ../pm2-automation-clean/package.json .
        
        # Copy documentation
        echo "📚 Copying documentation..."
        cp ../pm2-automation-clean/PM2_AUTOMATION_README.md .
        
        echo "✅ PM2 automation files applied"
        ;;
        
    4)
        echo "🧪 Testing PM2 automation integration..."
        
        # Check if PM2 is installed
        if ! command -v pm2 &> /dev/null; then
            echo "📦 Installing PM2..."
            npm install -g pm2
        fi
        
        # Install dependencies
        echo "📦 Installing dependencies..."
        npm install
        
        # Test PM2 configuration
        echo "🔍 Testing PM2 configuration..."
        pm2 start ecosystem.config.js --dry-run
        
        echo "✅ PM2 automation integration test completed"
        ;;
        
    5)
        echo "🎯 Completing integration process..."
        
        # Commit the changes
        echo "💾 Committing PM2 automation integration..."
        git add .
        git commit -m "feat: Integrate enhanced PM2 automation system
        
        - Add 12 intelligent automation processes
        - Implement AI-powered code quality monitoring
        - Add comprehensive security scanning
        - Include performance optimization tools
        - Add automated documentation generation
        - Implement health monitoring and alerts"
        
        echo "✅ Integration completed successfully!"
        echo "🚀 Your enhanced PM2 automation system is now ready"
        ;;
        
    *)
        echo "❌ Invalid option selected"
        exit 1
        ;;
esac

echo ""
echo "🎉 Process completed successfully!"
echo "📖 Check the documentation for usage instructions"