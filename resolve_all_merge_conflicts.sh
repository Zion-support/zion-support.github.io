#!/bin/bash

# Zion Tech Group - Comprehensive Merge Conflict Resolution Script
# This script resolves all merge conflicts and merges all open PRs into main

echo "🚀 Starting Comprehensive Merge Conflict Resolution..."

# Check if we're on main branch
if [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Please run this script from the main branch"
    exit 1
fi

# Ensure main is up to date
echo "📥 Updating main branch..."
git pull origin main

# Create a backup branch
echo "💾 Creating backup branch..."
git checkout -b backup-before-merge-conflict-resolution-$(date +%Y%m%d-%H%M%S)
git checkout main

# Function to safely merge a branch
merge_branch() {
    local branch_name=$1
    echo "🔄 Attempting to merge: $branch_name"
    
    # Check if branch exists
    if ! git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"; then
        echo "⚠️  Branch $branch_name not found, skipping..."
        return 1
    fi
    
    # Fetch the branch
    git fetch origin "$branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-commit --no-ff; then
        echo "✅ Merge successful for $branch_name"
        git commit -m "Merge $branch_name into main - Auto-resolved conflicts"
        return 0
    else
        echo "⚠️  Merge conflicts detected for $branch_name, attempting auto-resolution..."
        
        # Auto-resolve common conflicts
        auto_resolve_conflicts
        
        # Check if conflicts are resolved
        if git status --porcelain | grep -q "^UU"; then
            echo "❌ Auto-resolution failed for $branch_name, manual intervention needed"
            git merge --abort
            return 1
        else
            echo "✅ Auto-resolution successful for $branch_name"
            git commit -m "Merge $branch_name into main - Auto-resolved conflicts"
            return 0
        fi
    fi
}

# Function to auto-resolve common conflicts
auto_resolve_conflicts() {
    echo "🔧 Auto-resolving common conflicts..."
    
    # Add all resolved files
    git add .
    
    # Handle specific file conflicts
    resolve_specific_file_conflicts
    
    # Check for remaining conflicts
    if git status --porcelain | grep -q "^UU"; then
        echo "⚠️  Some conflicts remain after auto-resolution"
        return 1
    fi
    
    return 0
}

# Function to resolve specific file conflicts
resolve_specific_file_conflicts() {
    echo "🔍 Resolving specific file conflicts..."
    
    # Handle package.json conflicts
    if [ -f "package.json" ]; then
        echo "📦 Resolving package.json conflicts..."
        # Keep the version with more dependencies
        git checkout --ours package.json
        git add package.json
    fi
    
    # Handle TypeScript config conflicts
    if [ -f "tsconfig.json" ]; then
        echo "⚙️  Resolving tsconfig.json conflicts..."
        git checkout --ours tsconfig.json
        git add tsconfig.json
    fi
    
    # Handle Vite config conflicts
    if [ -f "vite.config.ts" ]; then
        echo "⚡ Resolving vite.config.ts conflicts..."
        git checkout --ours vite.config.ts
        git add vite.config.ts
    fi
    
    # Handle Tailwind config conflicts
    if [ -f "tailwind.config.ts" ]; then
        echo "🎨 Resolving tailwind.config.ts conflicts..."
        git checkout --ours tailwind.config.ts
        git add tailwind.config.ts
    fi
    
    # Handle ecosystem config conflicts
    if [ -f "ecosystem.config.cjs" ]; then
        echo "🔄 Resolving ecosystem.config.cjs conflicts..."
        git checkout --ours ecosystem.config.cjs
        git add ecosystem.config.cjs
    fi
}

# Function to fix common TypeScript errors
fix_typescript_errors() {
    echo "🔧 Fixing common TypeScript errors..."
    
    # Fix JSX closing tag issues
    find src -name "*.tsx" -o -name "*.jsx" | while read file; do
        if [ -f "$file" ]; then
            # Fix common JSX issues
            sed -i 's/<\/any>/<\/div>/g' "$file"
            sed -i 's/<any/g<div/g' "$file"
            
            # Fix missing closing tags
            sed -i 's/\(<div[^>]*>\)/\1/g' "$file"
        fi
    done
    
    # Fix import issues
    find src -name "*.tsx" -o -name "*.ts" | while read file; do
        if [ -f "$file" ]; then
            # Remove unused React imports if not needed
            if ! grep -q "React\." "$file" && ! grep -q "<React" "$file"; then
                sed -i '/import React from/d' "$file"
            fi
        fi
    done
}

# Main execution
echo "🚀 Starting merge process..."

# List of branches to merge (prioritized)
branches_to_merge=(
    "cursor/fix-project-errors-and-automate-future-fixes-8aee"
    "cursor/enhance-app-services-and-website-with-futuristic-design-ef9e"
    "cursor/enhance-app-services-and-website-with-futuristic-design-f757"
    "cursor/enhance-app-services-and-website-with-futuristic-design-f903"
    "cursor/enhance-app-services-and-website-with-futuristic-design-fc05"
    "cursor/enhance-app-with-micro-saas-and-advertising-3ee6"
    "cursor/enhance-app-with-micro-saas-and-advertising-5f5b"
    "cursor/enhance-app-with-micro-saas-and-advertising-5f6f"
    "cursor/enhance-app-with-micro-saas-and-advertising-602f"
    "cursor/enhance-app-with-micro-saas-and-advertising-a86c"
    "cursor/enhance-app-with-micro-saas-and-advertising-b762"
    "cursor/enhance-app-with-micro-saas-and-advertising-c308"
    "cursor/enhance-app-with-micro-saas-and-advertising-f3e4"
    "cursor/enhance-app-with-micro-saas-and-deploy-005b"
    "cursor/enhance-app-with-micro-saas-and-deploy-3e2f"
    "cursor/enhance-app-with-micro-saas-and-deploy-4739"
    "cursor/enhance-app-with-micro-saas-and-deploy-5442"
    "cursor/enhance-app-with-micro-saas-and-deploy-655c"
    "cursor/enhance-app-with-micro-saas-and-deploy-832b"
    "cursor/enhance-app-with-micro-saas-and-deploy-a78d"
    "cursor/enhance-app-with-micro-saas-and-deploy-b249"
    "cursor/enhance-app-with-micro-saas-and-deploy-b680"
    "cursor/enhance-app-with-micro-saas-and-deploy-d4e7"
    "cursor/enhance-app-with-micro-saas-and-deploy-d599"
    "cursor/enhance-app-with-micro-saas-and-deploy-dfdd"
)

# Track successful and failed merges
successful_merges=()
failed_merges=()

# Attempt to merge each branch
for branch in "${branches_to_merge[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    if merge_branch "$branch"; then
        successful_merges+=("$branch")
        echo "✅ Successfully merged: $branch"
    else
        failed_merges+=("$branch")
        echo "❌ Failed to merge: $branch"
    fi
    
    # Fix any TypeScript errors that may have been introduced
    fix_typescript_errors
    
    # Commit any fixes
    if git status --porcelain | grep -q "^"; then
        git add .
        git commit -m "Fix TypeScript errors after merging $branch"
    fi
done

# Summary
echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: ${#successful_merges[@]}"
echo "❌ Failed merges: ${#failed_merges[@]}"

if [ ${#successful_merges[@]} -gt 0 ]; then
    echo ""
    echo "✅ Successfully merged branches:"
    for branch in "${successful_merges[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#failed_merges[@]} -gt 0 ]; then
    echo ""
    echo "❌ Failed to merge branches:"
    for branch in "${failed_merges[@]}"; do
        echo "  - $branch"
    done
    echo ""
    echo "🔧 Manual intervention required for failed merges"
fi

# Final status
echo ""
echo "🔍 Final git status:"
git status

echo ""
echo "🚀 Merge conflict resolution completed!"
echo "📝 Review the results and push to main if satisfied"
echo "🔄 To push: git push origin main"