#!/bin/bash

<<<<<<< HEAD
echo "🔧 Resolving Merge Conflicts and Syncing Repository..."

# Check current status
echo "📊 Current Git Status:"
git status

# Fetch latest changes
echo "📥 Fetching latest changes from origin..."
git fetch origin

# Check for diverged commits
echo "🔍 Checking for diverged commits..."
LOCAL_COMMITS=$(git rev-list --count HEAD..origin/main)
REMOTE_COMMITS=$(git rev-list --count origin/main..HEAD)

echo "Local commits ahead: $REMOTE_COMMITS"
echo "Remote commits ahead: $LOCAL_COMMITS"

if [ $LOCAL_COMMITS -gt 0 ] || [ $REMOTE_COMMITS -gt 0 ]; then
    echo "🔄 Diverged commits detected. Attempting to merge..."
    
    # Try to pull with merge strategy
    if git pull origin main --no-rebase; then
        echo "✅ Successfully merged remote changes"
    else
        echo "⚠️  Merge conflicts detected. Attempting to resolve..."
        
        # Check for merge conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "🔧 Resolving merge conflicts..."
            
            # List conflicted files
            echo "📁 Conflicted files:"
            git status --porcelain | grep "^UU"
            
            # Try to resolve common conflicts
            echo "🔄 Attempting to resolve conflicts..."
            
            # If there are still conflicts, abort and try rebase
            if ! git add . && git commit -m "Resolve merge conflicts"; then
                echo "🔄 Aborting merge and trying rebase..."
                git merge --abort
                git pull origin main --rebase
            fi
        fi
    fi
else
    echo "✅ Repository is up to date"
fi

# Final status check
echo "📊 Final Git Status:"
git status

# Check if we're now synchronized
if git status | grep -q "Your branch and 'origin/main' are up to date"; then
    echo "🎉 Repository successfully synchronized!"
else
    echo "⚠️  Repository still has issues that need manual attention"
fi

echo "✅ Merge conflict resolution script completed!"
=======
echo "🔧 Resolving merge conflicts automatically..."

# Find all files with merge conflict markers
echo "📁 Searching for files with merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep the newer version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Find and resolve conflicts in TypeScript/JavaScript files
find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        resolve_conflicts "$file"
    fi
done

# Find and resolve conflicts in other source files
find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .git | while read -r file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        resolve_conflicts "$file"
    fi
done

echo "🎉 All merge conflicts resolved!"
echo "📝 Please review the changes and test the application"
>>>>>>> a3738c60a936ae3429d333b32a8450c9ba7c9040
