#!/bin/bash

echo "=== Final Verification Script ==="
echo "Run this script to verify everything is ready for merge"
echo ""

# Check for remaining merge conflicts
echo "1. Checking for remaining merge conflicts..."
conflicts=$(find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null | wc -l)
if [ $conflicts -eq 0 ]; then
    echo "✅ No merge conflicts found"
else
    echo "❌ $conflicts files still have merge conflicts"
    find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null
fi

echo ""

# Check git status
echo "2. Checking git status..."
git status --short

echo ""

# Test build
echo "3. Testing build..."
if npm run build:netlify; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
fi

echo ""

# Check current branch
echo "4. Current branch:"
git branch --show-current

echo ""

# Show recent commits
echo "5. Recent commits:"
git log --oneline -5

echo ""
echo "=== Verification Complete ==="
echo ""
echo "If all checks pass, you can proceed with:"
echo "1. git add ."
echo "2. git commit -m 'Resolve merge conflicts and fix build issues'"
echo "3. git checkout main"
echo "4. git merge cursor/fix-netlify-build-and-merge-to-main-4141"
echo "5. git push origin main"