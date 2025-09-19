#!/bin/bash

# Execute merge solution when system is available
echo "🚀 EXECUTE MERGE SOLUTION"
echo "⏰ Started at: $(date)"
echo ""

# Check if we can run commands
if ! command -v git > /dev/null 2>&1; then
    echo "❌ Git not available, cannot proceed"
    exit 1
fi

if ! command -v npm > /dev/null 2>&1; then
    echo "❌ npm not available, cannot proceed"
    exit 1
fi

echo "✅ System requirements met"
echo ""

# Make all scripts executable
echo "🔧 Making scripts executable..."
chmod +x *.sh

# Check current status
echo "📊 Checking current status..."
if [ -f "monitor-merge-progress.sh" ]; then
    ./monitor-merge-progress.sh
else
    echo "⚠️ Monitor script not found"
fi

echo ""
echo "🎯 Ready to execute merge solution!"
echo ""
echo "Choose an option:"
echo "1. Run complete automated solution (recommended)"
echo "2. Run step-by-step manual process"
echo "3. Just monitor current progress"
echo "4. Reset and start fresh"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Running complete automated solution..."
        if [ -f "complete-merge-solution.sh" ]; then
            ./complete-merge-solution.sh
        else
            echo "❌ Complete merge solution script not found"
            exit 1
        fi
        ;;
    2)
        echo "🔧 Running step-by-step manual process..."
        echo "Step 1: Resetting to clean state..."
        git rebase --abort 2>/dev/null || true
        git reset --hard HEAD 2>/dev/null || true
        git clean -fd 2>/dev/null || true
        
        echo "Step 2: Pulling latest changes..."
        git pull origin main --rebase
        
        echo "Step 3: Creating backup..."
        BACKUP_BRANCH="manual-backup-$(date +%Y%m%d-%H%M%S)"
        git checkout -b "$BACKUP_BRANCH"
        git push origin "$BACKUP_BRANCH"
        git checkout main
        
        echo "Step 4: Running merge scripts..."
        if [ -f "merge-specific-prs.sh" ]; then
            ./merge-specific-prs.sh
        fi
        
        if [ -f "resolve-all-conflicts.sh" ]; then
            ./resolve-all-conflicts.sh
        fi
        
        echo "✅ Manual process completed!"
        ;;
    3)
        echo "📊 Monitoring current progress..."
        if [ -f "monitor-merge-progress.sh" ]; then
            ./monitor-merge-progress.sh
        else
            echo "❌ Monitor script not found"
        fi
        ;;
    4)
        echo "🔄 Resetting and starting fresh..."
        git fetch origin
        git reset --hard origin/main
        git clean -fd
        
        echo "✅ Reset completed, ready to start fresh"
        echo "Run option 1 to start the complete solution"
        ;;
    *)
        echo "❌ Invalid choice, please run the script again"
        exit 1
        ;;
esac

echo ""
echo "🎉 Execution completed!"
echo "⏰ Finished at: $(date)"