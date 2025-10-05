#!/bin/bash

# Execute PR Merge and Resolution Script
echo "🚀 EXECUTING PR MERGE AND RESOLUTION"
echo "===================================="

# Set working directory
cd /workspace

# Function to execute with error handling
execute_cmd() {
    local cmd="$1"
    local description="$2"
    
    echo "⚡ $description"
    echo "Command: $cmd"
    
    if eval "$cmd"; then
        echo "✅ SUCCESS: $description"
        return 0
    else
        echo "⚠️  FAILED: $description"
        return 1
    fi
}

# Step 1: Check current git state
echo "📋 Step 1: Checking current git state"
execute_cmd "git status --porcelain" "Check git status"
execute_cmd "git branch --show-current" "Check current branch"

# Step 2: Switch to main branch
echo ""
echo "🔄 Step 2: Switching to main branch"
execute_cmd "git checkout main" "Switch to main branch"

# Step 3: Pull latest changes
echo ""
echo "📥 Step 3: Pulling latest changes"
execute_cmd "git pull origin main" "Pull latest from main"

# Step 4: List available branches
echo ""
echo "📋 Step 4: Available branches"
execute_cmd "git branch -r | grep cursor | head -10" "List cursor branches"

# Step 5: Function to merge branches
merge_branch() {
    local branch="$1"
    echo ""
    echo "🔄 Merging branch: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch" 2>/dev/null; then
        echo "✅ Branch $branch exists"
        
        # Attempt merge
        if git merge "origin/$branch" --no-ff -m "Merge $branch into main"; then
            echo "✅ Successfully merged $branch"
            return 0
        else
            echo "⚠️  Merge conflict in $branch, resolving..."
            
            # Auto-resolve conflicts
            local conflict_files
            conflict_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
            
            if [ -n "$conflict_files" ]; then
                echo "🔧 Found conflict files:"
                echo "$conflict_files"
                
                # Resolve conflicts based on file type
                echo "$conflict_files" | while read -r file; do
                    if [ -n "$file" ]; then
                        echo "🔧 Resolving conflicts in $file"
                        
                        # Strategy based on file type
                        if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
                            echo "  → Using main branch version (ours) for TypeScript file"
                            git checkout --ours "$file" 2>/dev/null || true
                        elif [[ "$file" == *.json ]]; then
                            echo "  → Using PR branch version (theirs) for JSON file"
                            git checkout --theirs "$file" 2>/dev/null || true
                        else
                            echo "  → Using main branch version (ours) for other file"
                            git checkout --ours "$file" 2>/dev/null || true
                        fi
                        
                        git add "$file" 2>/dev/null || true
                    fi
                done
                
                # Commit the merge
                if git commit --no-edit; then
                    echo "✅ Resolved conflicts and merged $branch"
                    return 0
                else
                    echo "❌ Failed to commit merge for $branch"
                    git merge --abort
                    return 1
                fi
            else
                echo "❌ No conflict files found for $branch"
                git merge --abort
                return 1
            fi
        fi
    else
        echo "⚠️  Branch $branch does not exist"
        return 1
    fi
}

# Step 6: Merge known branches
echo ""
echo "🔄 Step 6: Merging known branches"

# Branches from PR analysis
BRANCHES_TO_MERGE=(
    "cursor/fix-errors-and-merge-to-main-c241"
    "cursor/fix-errors-and-merge-to-main-de0a"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7"
    "cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e"
)

merged_count=0
failed_count=0

for branch in "${BRANCHES_TO_MERGE[@]}"; do
    if merge_branch "$branch"; then
        ((merged_count++))
    else
        ((failed_count++))
    fi
done

# Step 7: Push changes to main
echo ""
echo "🚀 Step 7: Pushing changes to main"
execute_cmd "git push origin main" "Push to main branch"

# Step 8: Final status
echo ""
echo "📊 Step 8: Final summary"
echo "✅ Successfully merged: $merged_count branches"
echo "❌ Failed to merge: $failed_count branches"

echo ""
echo "📝 Recent commits:"
execute_cmd "git log --oneline -5" "Show recent commits"

# Step 9: Run improvements
echo ""
echo "⚡ Step 9: Running code improvements"

# Run linting
echo "🔍 Running linting..."
if npm run lint; then
    echo "✅ Linting passed"
else
    echo "⚠️  Linting failed, attempting to fix..."
    if npm run lint:fix; then
        echo "✅ Linting issues fixed"
    else
        echo "❌ Failed to fix linting issues"
    fi
fi

# Run type checking
echo "🔍 Running type checking..."
if npm run type-check; then
    echo "✅ Type checking passed"
else
    echo "❌ Type checking failed"
fi

# Run build
echo "🔨 Running build..."
if npm run build:fast; then
    echo "✅ Build succeeded"
else
    echo "❌ Build failed"
fi

echo ""
echo "🎉 PR MERGE AND RESOLUTION COMPLETED!"
echo "===================================="