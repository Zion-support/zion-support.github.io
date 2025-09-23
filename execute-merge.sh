#!/bin/bash

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
