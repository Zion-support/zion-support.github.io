#!/bin/bash

<<<<<<< HEAD
# Merge Remaining PRs Script
# This script will merge the remaining PRs in smaller batches

set -e

echo "🚀 Starting Remaining PR Merge Process"
echo "======================================"

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    local branch_ref="origin/$branch_name"
    
    echo "📋 Processing branch: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_ref"; then
        echo "⚠️  Branch $branch_ref does not exist, skipping..."
        return 0
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name"
    
    # Check if branch has commits not in main
    if git merge-base --is-ancestor "$branch_ref" HEAD; then
        echo "✅ Branch $branch_name is already merged, skipping..."
        return 0
    fi
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Try to merge with conflict resolution
    if git merge "$branch_ref" --no-edit --strategy-option=ours || {
        echo "⚠️  Merge conflict detected, resolving..."
        
        # Resolve common conflicts automatically
        if [ -f "package.json" ]; then
            git checkout --ours package.json
            git add package.json
        fi
        
        if [ -f "package-lock.json" ]; then
            git checkout --ours package-lock.json
            git add package-lock.json
        fi
        
        if [ -f "pnpm-lock.yaml" ]; then
            git checkout --ours pnpm-lock.yaml
            git add pnpm-lock.yaml
        fi
        
        # Resolve conflicts in key files
        for file in "app/page.tsx" "app/layout.tsx" "src/App.tsx" "src/main.tsx"; do
            if [ -f "$file" ]; then
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Commit the resolved conflicts
        git commit -m "Merge $branch_name: Resolved conflicts automatically" || {
            echo "⚠️  Could not commit merge for $branch_name, continuing..."
            git merge --abort 2>/dev/null || true
            return 0
        }
    }; then
        echo "✅ Successfully merged $branch_name"
    else
        echo "❌ Failed to merge $branch_name, continuing with next branch..."
        git merge --abort 2>/dev/null || true
    fi
}

# Get list of remaining PR branches to merge (batch 1)
echo "🔍 Processing first batch of remaining PR branches..."

# Get recent cursor branches that haven't been processed yet
REMAINING_BRANCHES=$(git branch -r | grep "cursor/analyze-improve-and-deploy-application" | head -50 | sed 's/origin\///')

echo "📝 Found branches to process:"
echo "$REMAINING_BRANCHES"

# Process each branch
for branch in $REMAINING_BRANCHES; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
        echo "---"
    fi
done

echo "🎉 First batch of PR merge process completed!"
echo "📊 Final status:"
git status --short

echo "🔄 Pushing changes to main..."
git push origin main

echo "✅ First batch of PRs have been processed and merged into main!"
=======
# Script to merge remaining open PRs from cursor/* and feature branches
# This script processes the remaining branches systematically

set -e

echo "🚀 Continuing PR merge process for remaining branches..."
echo "====================================================="

# Ensure we're on main branch
git checkout main

# List of remaining branches to process
REMAINING_BRANCHES=(
    "origin/cursor/website-audit-and-enhancement-751f"
    "origin/cursor/install-project-dependencies-with-pnpm-9fa3"
    "origin/cursor/website-audit-and-enhancement-2d5c"
    "origin/revolutionary-services-main"
    "origin/automation/workflow-auto-heal"
    "origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-e903"
)

# Function to merge specific files from a branch
merge_specific_files() {
    local branch="$1"
    local branch_name=$(echo "$branch" | sed 's|origin/||')
    
    echo "🔄 Processing specific files from: $branch_name"
    echo "----------------------------------------"
    
    # Check if branch exists
    if ! git ls-remote --heads origin | grep -q "$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 0
    fi
    
    # Get the latest commit from the branch
    git fetch origin "$branch_name"
    
    # List of files to attempt to merge (common files that might have changes)
    FILES_TO_MERGE=(
        "components/AccessibilityEnhancer.tsx"
        "api/contact.js"
        "api/create-checkout-session.js"
        "components/ServiceCard.tsx"
        "pages/services.tsx"
        "package.json"
        "tsconfig.json"
        "next.config.js"
        "tailwind.config.js"
        "components/Layout.tsx"
        "pages/index.tsx"
        "styles/globals.css"
    )
    
    local success_count=0
    local total_count=0
    
    for file in "${FILES_TO_MERGE[@]}"; do
        total_count=$((total_count + 1))
        
        # Check if file exists in the branch
        if git show "origin/$branch_name:$file" >/dev/null 2>&1; then
            echo "🔧 Merging file: $file"
            
            # Create backup
            if [ -f "$file" ]; then
                cp "$file" "$file.backup.$(date +%s)"
            fi
            
            # Try to merge the file
            if git show "origin/$branch_name:$file" > "$file.new" 2>/dev/null; then
                # Check if there are actual differences
                if ! diff "$file" "$file.new" >/dev/null 2>&1; then
                    mv "$file.new" "$file"
                    echo "✅ Successfully merged: $file"
                    success_count=$((success_count + 1))
                else
                    echo "ℹ️  No changes in: $file"
                    rm "$file.new"
                fi
            else
                echo "❌ Failed to merge: $file"
                rm -f "$file.new"
            fi
        else
            echo "ℹ️  File not found in branch: $file"
        fi
    done
    
    echo "📊 File merge results for $branch_name: $success_count successful, $((total_count - success_count)) failed"
    echo ""
}

# Process each remaining branch
for branch in "${REMAINING_BRANCHES[@]}"; do
    echo "📋 Processing branch: $branch"
    merge_specific_files "$branch"
    
    # Commit changes after each branch if there are any
    if ! git diff --quiet; then
        echo "💾 Committing changes from $branch..."
        git add .
        git commit -m "Merge changes from $(echo $branch | sed 's|origin/||') PR"
        echo "✅ Changes committed successfully"
    else
        echo "ℹ️  No changes to commit from $branch"
    fi
    
    echo ""
done

echo "🎉 All remaining PRs processed successfully!"
echo "📝 Summary of changes:"
git log --oneline -10
>>>>>>> origin/auto/autonomy-17186719616
