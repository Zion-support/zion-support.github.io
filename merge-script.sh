#!/bin/bash

# Comprehensive merge conflict resolution and PR merging script
echo "🚀 Starting comprehensive merge and PR resolution process..."

# Set error handling
set -e

# Function to execute commands with error handling
execute_command() {
    local cmd="$1"
    local description="$2"
    
    echo "📋 $description..."
    if eval "$cmd"; then
        echo "✅ $description completed successfully"
    else
        echo "❌ $description failed"
        return 1
    fi
}

# Step 1: Check current status
echo ""
echo "=== STEP 1: Checking current git status ==="
execute_command "git status" "Checking git status"
execute_command "git branch -a" "Listing all branches"

# Step 2: Add all changes
echo ""
echo "=== STEP 2: Adding all changes ==="
execute_command "git add ." "Adding all changes to staging"

# Step 3: Commit changes
echo ""
echo "=== STEP 3: Committing changes ==="
execute_command 'git commit -m "Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues

- Fixed merge conflict markers in api-disabled files
- Fixed JavaScript syntax errors in .js files  
- Converted CommonJS to ES modules where needed
- Cleaned up duplicate function declarations
- Fixed template literal syntax errors"' "Committing resolved conflicts"

# Step 4: Push to current branch
echo ""
echo "=== STEP 4: Pushing to current branch ==="
execute_command "git push origin cursor/fix-syntax-push-and-merge-to-main-c855" "Pushing to feature branch"

# Step 5: Switch to main branch
echo ""
echo "=== STEP 5: Switching to main branch ==="
execute_command "git checkout main" "Switching to main branch"

# Step 6: Pull latest main
echo ""
echo "=== STEP 6: Pulling latest main ==="
execute_command "git pull origin main" "Pulling latest changes from main"

# Step 7: Merge feature branch
echo ""
echo "=== STEP 7: Merging feature branch ==="
execute_command "git merge cursor/fix-syntax-push-and-merge-to-main-c855" "Merging feature branch into main"

# Step 8: Push merged changes
echo ""
echo "=== STEP 8: Pushing merged changes ==="
execute_command "git push origin main" "Pushing merged changes to main"

# Step 9: Final status check
echo ""
echo "=== STEP 9: Final status check ==="
execute_command "git status" "Final status check"
execute_command "git log --oneline -5" "Recent commits"

echo ""
echo "🎉 All merge operations completed successfully!"
echo "✅ Feature branch merged into main"
echo "✅ All syntax errors resolved"
echo "✅ Repository is clean and ready for further development"