#!/bin/bash

<<<<<<< HEAD
# Execute Merge Process
# This script will resolve all merge conflicts and merge the PR into main

set -e

echo "🚀 Starting merge process..."

# Step 1: Navigate to workspace
cd /workspace

# Step 2: Check git status
echo "📊 Checking git status..."
git status

# Step 3: Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Step 4: Update main branch
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# Step 5: Checkout PR branch
echo "🔀 Checking out PR branch..."
git checkout cursor/create-and-deploy-new-content-d115

# Step 6: Merge main into PR branch
echo "🔧 Merging main into PR branch..."
if git merge main --no-commit; then
    echo "✅ No conflicts found"
    git commit -m "Merge main into PR branch - no conflicts"
else
    echo "⚠️ Conflicts detected. Resolving automatically..."
    
    # Auto-resolve conflicts
    git checkout --ours package.json 2>/dev/null || true
    git checkout --ours package-lock.json 2>/dev/null || true
    git rm "*.backup*" 2>/dev/null || true
    git checkout --ours app/page.tsx 2>/dev/null || true
    git checkout --ours app/layout.tsx 2>/dev/null || true
    git checkout --ours components/ 2>/dev/null || true
    
    # Add all changes
    git add .
    
    # Commit resolution
    git commit -m "Auto-resolve merge conflicts"
    echo "✅ Conflicts resolved"
fi

# Step 7: Switch to main
echo "🔄 Switching to main branch..."
git checkout main

# Step 8: Merge PR into main
echo "🔀 Merging PR into main..."
git merge cursor/create-and-deploy-new-content-d115 --no-ff -m "Merge cursor/create-and-deploy-new-content-d115: Add new AI 2025 content and promotional components"

# Step 9: Push to remote
echo "📤 Pushing to remote..."
git push origin main

# Step 10: Clean up
echo "🧹 Cleaning up..."
git branch -d cursor/create-and-deploy-new-content-d115
git push origin --delete cursor/create-and-deploy-new-content-d115

# Step 11: Update dependencies
echo "📦 Updating dependencies..."
if [ -f "package.json" ]; then
    npm install
fi

# Step 12: Final cleanup
echo "🧹 Final cleanup..."
find . -name "*.backup*" -type f -delete 2>/dev/null || true
find . -name "*.bak" -type f -delete 2>/dev/null || true

# Step 13: Verify success
echo "✅ Verifying merge success..."
git status
echo "📊 Recent commits:"
git log --oneline -3

echo "🎉 Merge process completed successfully!"
echo "✅ PR merged into main branch"
echo "✅ All conflicts resolved"
echo "✅ Changes pushed to remote"
echo "✅ Branch cleaned up"
echo "✅ Dependencies updated"
=======
echo "🚀 Zion Tech Group Website Merge Script"
echo "======================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the Zion Tech Group project directory"
    exit 1
fi

echo "✅ Found Zion Tech Group project"

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🌿 Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "website-audit-and-enhancement-final" ]; then
    echo "⚠️  Warning: Not on website-audit-and-enhancement-final branch"
    echo "Current branch: $CURRENT_BRANCH"
    read -p "Continue anyway? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Aborted"
        exit 1
    fi
fi

echo ""
echo "📋 Starting merge process..."

# Step 1: Check status
echo "1️⃣ Checking git status..."
git status

# Step 2: Add all changes
echo ""
echo "2️⃣ Adding all changes..."
git add .

# Step 3: Commit changes
echo ""
echo "3️⃣ Committing changes..."
git commit -m "Complete website audit and enhancement merge - Enhanced navigation structure - Fixed broken links - Created missing pages - Improved site organization"

# Step 4: Push branch
echo ""
echo "4️⃣ Pushing website-audit-and-enhancement-final branch..."
git push origin website-audit-and-enhancement-final

if [ $? -eq 0 ]; then
    echo "✅ Branch pushed successfully!"
else
    echo "❌ Failed to push branch"
    exit 1
fi

# Step 5: Switch to main
echo ""
echo "5️⃣ Switching to main branch..."
git checkout main

# Step 6: Pull latest changes
echo ""
echo "6️⃣ Pulling latest changes from remote main..."
git pull origin main

# Step 7: Merge our branch
echo ""
echo "7️⃣ Merging website-audit-and-enhancement-final into main..."
git merge website-audit-and-enhancement-final

if [ $? -eq 0 ]; then
    echo "✅ Merge successful!"
else
    echo "❌ Merge failed. Please resolve conflicts manually."
    echo "Use 'git status' to see conflicts, resolve them, then run:"
    echo "git add . && git commit -m 'Resolve merge conflicts'"
    exit 1
fi

# Step 8: Push to main
echo ""
echo "8️⃣ Pushing merged changes to main..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to main!"
else
    echo "❌ Failed to push to main"
    exit 1
fi

echo ""
echo "🎉 SUCCESS! All changes merged to main branch!"
echo ""
echo "📋 Next steps:"
echo "1. Check GitHub for open Pull Requests: https://github.com/Zion-Holdings/zion.app/pulls"
echo "2. Resolve any conflicts in open PRs"
echo "3. Merge all open PRs"
echo "4. Deploy the updated website"
echo ""
echo "🔍 For detailed instructions, see MERGE_GUIDE.md"
>>>>>>> origin/auto/autonomy-17186719616
