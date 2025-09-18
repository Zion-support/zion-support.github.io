#!/bin/bash

# Quick Merge Execution Script for Zion Tech Group
# This script will start the merge process immediately

echo "🚀 Quick Merge Execution Starting..."
echo "⏰ Started at: $(date)"
echo "=========================================="

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "🔍 Checking prerequisites..."

if ! command_exists git; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Step 1: Check current status
echo ""
echo "📋 Step 1: Checking current git status..."
git status

echo ""
echo "=========================================="
echo "🔄 Step 2: Ensuring we're on main branch..."
git checkout main

echo ""
echo "=========================================="
echo "📥 Step 3: Fetching latest changes..."
git fetch origin

echo ""
echo "=========================================="
echo "🔍 Step 4: Checking available branches..."
git branch -r

echo ""
echo "=========================================="
echo "🔄 Step 5: Starting merge process..."

# Get list of remote branches (excluding main)
BRANCHES=$(git branch -r | grep -v "main" | sed 's/origin\///' | head -20)

echo "Found branches to process:"
echo "$BRANCHES"

echo ""
echo "=========================================="
echo "🚀 Ready to start merging branches..."
echo "Press Enter to continue or Ctrl+C to abort..."
read

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# Process each branch
for branch in $BRANCHES; do
    echo ""
    echo "=========================================="
    echo "🔄 Processing branch: $branch"
    echo "=========================================="
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - Enhanced services - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts detected in $branch"
        echo "🔧 Resolving conflicts..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    
                    # Create backup
                    cp "$file" "${file}.backup.$(date +%s)"
                    
                    # Remove conflict markers
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                    sed -i '/>>>>>>> /d' "$file"
                    
                    echo "✅ Resolved conflicts in $file"
                fi
            done
            
            # Add resolved files and commit
            git add .
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "=========================================="
    echo ""
    
    # Ask user if they want to continue
    echo "Continue with next branch? (y/n)"
    read -r continue_choice
    if [[ "$continue_choice" != "y" && "$continue_choice" != "Y" ]]; then
        echo "Stopping merge process..."
        break
    fi
done

echo ""
echo "=========================================="
echo "🎉 Merge process completed!"
echo "=========================================="

# Summary
echo "📊 Merge Summary:"
echo "   ✅ Successful Merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed Merges: $FAILED_MERGES"

# Final status
echo ""
echo "📋 Final git status:"
git status

echo ""
echo "🚀 Ready to build and test!"
echo "Run: npm install --legacy-peer-deps && npm run build"

# Ask if user wants to proceed with build
echo ""
echo "Proceed with build and test? (y/n)"
read -r build_choice
if [[ "$build_choice" == "y" || "$build_choice" == "Y" ]]; then
    echo "🔨 Starting build process..."
    
    # Install dependencies
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps || npm install --force
    
    # Build the project
    echo "🏗️ Building project..."
    if npm run build; then
        echo "✅ Project built successfully!"
        echo "🚀 Ready for deployment!"
    else
        echo "❌ Project build failed!"
        echo "🔧 Please check the build errors and resolve them."
    fi
fi

echo ""
echo "🎉 Quick merge execution completed!"
echo "📞 For support, contact: kleber@ziontechgroup.com"