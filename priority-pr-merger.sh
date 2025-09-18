#!/bin/bash

# Priority PR Merger - Handle critical fixes first
set -e

echo "🚀 Priority PR Merger - Processing Critical Fixes First"
echo "======================================================"

cd /workspace

# Ensure we're on main and up to date
echo "📋 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Priority 1: Netlify and build-related fixes
echo "🔧 Processing Priority 1: Netlify and Build Fixes..."
NETLIFY_BRANCHES=$(git branch -r | grep -E "(netlify|build)" | grep -v "backup" | head -20 | sed 's/origin\///g')

# Priority 2: Critical bug fixes
echo "🐛 Processing Priority 2: Critical Bug Fixes..."
CRITICAL_FIXES=$(git branch -r | grep -E "(fix-|fix/)" | grep -v "backup" | head -30 | sed 's/origin\///g')

# Priority 3: Feature branches
echo "✨ Processing Priority 3: Feature Branches..."
FEATURE_BRANCHES=$(git branch -r | grep -E "(feat-|feature/)" | grep -v "backup" | head -20 | sed 's/origin\///g')

# Combine all priority branches
ALL_PRIORITY_BRANCHES="$NETLIFY_BRANCHES $CRITICAL_FIXES $FEATURE_BRANCHES"

echo "📊 Priority branches to process:"
echo "Netlify/Build: $(echo "$NETLIFY_BRANCHES" | wc -w)"
echo "Critical Fixes: $(echo "$CRITICAL_FIXES" | wc -w)"
echo "Features: $(echo "$FEATURE_BRANCHES" | wc -w)"
echo "Total: $(echo "$ALL_PRIORITY_BRANCHES" | wc -w)"

# Counter for tracking progress
PROCESSED=0
SUCCESS=0
FAILED=0

# Function to process a single branch
process_branch() {
    local branch="$1"
    local priority="$2"
    
    PROCESSED=$((PROCESSED + 1))
    echo ""
    echo "🔄 [$PROCESSED] [$priority] Processing: $branch"
    
    # Skip if it's main or empty
    if [ "$branch" = "main" ] || [ -z "$branch" ]; then
        echo "⏭️  Skipping $branch"
        return
    fi
    
    # Try to checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        echo "📥 Successfully checked out $branch"
        
        # Try to merge main into the branch
        if git merge main --no-edit 2>/dev/null; then
            echo "✅ Successfully merged main into $branch"
            
            # Push the updated branch
            if git push origin "$branch" 2>/dev/null; then
                echo "💾 Successfully pushed $branch"
                
                # Switch back to main
                git checkout main
                
                # Try to merge the branch into main
                if git merge "$branch" --no-edit 2>/dev/null; then
                    echo "🔀 Successfully merged $branch into main"
                    
                    # Push main
                    if git push origin main 2>/dev/null; then
                        echo "💾 Successfully pushed main"
                        SUCCESS=$((SUCCESS + 1))
                        echo "🎉 Successfully processed $branch"
                        
                        # Try to delete the remote branch to clean up
                        git push origin --delete "$branch" 2>/dev/null || true
                        
                    else
                        echo "❌ Failed to push main"
                        FAILED=$((FAILED + 1))
                    fi
                else
                    echo "❌ Failed to merge $branch into main"
                    git merge --abort 2>/dev/null || true
                    FAILED=$((FAILED + 1))
                fi
            else
                echo "❌ Failed to push $branch"
                FAILED=$((FAILED + 1))
            fi
        else
            echo "⚠️  Merge conflicts in $branch, resolving..."
            
            # Get conflicted files
            CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$CONFLICTED_FILES" ]; then
                echo "📋 Resolving conflicts in: $CONFLICTED_FILES"
                
                # Resolve conflicts by keeping our version for most files
                for file in $CONFLICTED_FILES; do
                    if [ -f "$file" ]; then
                        echo "🔧 Resolving conflicts in $file..."
                        
                        # For critical files, keep main version
                        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "netlify.toml" ]]; then
                            echo "📦 Critical file, keeping main version..."
                            git checkout --theirs "$file"
                        else
                            echo "📝 Regular file, keeping HEAD version..."
                            git checkout --ours "$file"
                        fi
                    fi
                done
                
                # Add resolved files and commit
                git add .
                git commit -m "Resolve merge conflicts with main branch - $(date)"
                echo "✅ Successfully resolved conflicts in $branch"
                
                # Continue with the merge process
                if git push origin "$branch" 2>/dev/null; then
                    git checkout main
                    if git merge "$branch" --no-edit 2>/dev/null; then
                        if git push origin main 2>/dev/null; then
                            SUCCESS=$((SUCCESS + 1))
                            echo "🎉 Successfully processed $branch with conflicts resolved"
                        else
                            FAILED=$((FAILED + 1))
                        fi
                    else
                        FAILED=$((FAILED + 1))
                    fi
                else
                    FAILED=$((FAILED + 1))
                fi
            else
                echo "❌ No conflicted files found, aborting merge..."
                git merge --abort 2>/dev/null || true
                git checkout main
                FAILED=$((FAILED + 1))
            fi
        fi
    else
        echo "❌ Could not checkout $branch, skipping..."
        FAILED=$((FAILED + 1))
    fi
    
    # Show progress every 5 branches
    if [ $((PROCESSED % 5)) -eq 0 ]; then
        echo ""
        echo "📊 Progress Update:"
        echo "  Processed: $PROCESSED"
        echo "  Success: $SUCCESS"
        echo "  Failed: $FAILED"
        echo "  Success Rate: $(( (SUCCESS * 100) / PROCESSED ))%"
        echo ""
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 2
}

# Process Netlify and build-related branches first
echo ""
echo "🔧 Processing Netlify and Build Fixes..."
for branch in $NETLIFY_BRANCHES; do
    process_branch "$branch" "NETLIFY"
done

# Process critical fixes
echo ""
echo "🐛 Processing Critical Bug Fixes..."
for branch in $CRITICAL_FIXES; do
    process_branch "$branch" "CRITICAL"
done

# Process feature branches
echo ""
echo "✨ Processing Feature Branches..."
for branch in $FEATURE_BRANCHES; do
    process_branch "$branch" "FEATURE"
done

echo ""
echo "🎉 Priority PR merge completed!"
echo "==============================="
echo "📊 Final Results:"
echo "  Total Processed: $PROCESSED"
echo "  Successful: $SUCCESS"
echo "  Failed: $FAILED"
echo "  Success Rate: $(( (SUCCESS * 100) / PROCESSED ))%"

echo ""
echo "📋 Current git status:"
git status --short

echo ""
echo "🔍 Checking build status..."
if npm run build 2>/dev/null; then
    echo "✅ Build is working correctly!"
else
    echo "⚠️  Build has issues, may need manual intervention"
fi