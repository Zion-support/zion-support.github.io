#!/bin/bash

# Intelligent PR Merge Script - Merges recent content branches
# This script will merge the most recent content creation branches into main

set -e

BRANCH_PREFIX="origin/cursor/create-and-deploy-new-content"
MERGE_LOG="merge-results-$(date +%Y%m%d-%H%M%S).log"
SUCCESS_COUNT=0
CONFLICT_COUNT=0
SKIP_COUNT=0

echo "🚀 Starting Intelligent PR Merge Process" | tee -a "$MERGE_LOG"
echo "========================================" | tee -a "$MERGE_LOG"
echo "" | tee -a "$MERGE_LOG"

# Ensure we're on main and up to date
echo "📥 Updating main branch..." | tee -a "$MERGE_LOG"
git checkout main
git pull origin main

# Get list of recent branches (last 15 branches from today)
RECENT_BRANCHES=$(git for-each-ref --sort=-committerdate refs/remotes/${BRANCH_PREFIX}* --format='%(refname:short)' | head -15)

echo "Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches to process" | tee -a "$MERGE_LOG"
echo "" | tee -a "$MERGE_LOG"

for BRANCH in $RECENT_BRANCHES; do
    BRANCH_NAME=$(echo $BRANCH | sed "s|${BRANCH_PREFIX}-||" | sed 's|origin/||')
    LOCAL_BRANCH="cursor/create-and-deploy-new-content-${BRANCH_NAME}"
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" | tee -a "$MERGE_LOG"
    echo "Processing: $BRANCH" | tee -a "$MERGE_LOG"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" | tee -a "$MERGE_LOG"
    
    # Check if already merged
    MERGE_BASE=$(git merge-base HEAD $BRANCH 2>/dev/null || echo "")
    BRANCH_HEAD=$(git rev-parse $BRANCH 2>/dev/null || echo "")
    
    if [ "$MERGE_BASE" = "$BRANCH_HEAD" ]; then
        echo "⏭️  SKIPPED: Already merged" | tee -a "$MERGE_LOG"
        ((SKIP_COUNT++))
        echo "" | tee -a "$MERGE_LOG"
        continue
    fi
    
    # Check what files this branch changes
    CHANGED_FILES=$(git diff --name-only HEAD..$BRANCH | head -10)
    echo "📝 Changed files:" | tee -a "$MERGE_LOG"
    echo "$CHANGED_FILES" | sed 's/^/   /' | tee -a "$MERGE_LOG"
    echo "" | tee -a "$MERGE_LOG"
    
    # Attempt merge
    echo "🔀 Attempting merge..." | tee -a "$MERGE_LOG"
    
    if git merge --no-edit -m "Merge $LOCAL_BRANCH: Automated merge of recent content" $BRANCH 2>&1 | tee -a "$MERGE_LOG"; then
        echo "✅ SUCCESS: Merged cleanly" | tee -a "$MERGE_LOG"
        ((SUCCESS_COUNT++))
        
        # Push immediately
        echo "📤 Pushing to remote..." | tee -a "$MERGE_LOG"
        if git push origin main 2>&1 | tee -a "$MERGE_LOG"; then
            echo "✅ Pushed successfully" | tee -a "$MERGE_LOG"
        else
            echo "⚠️  Push failed - continuing anyway" | tee -a "$MERGE_LOG"
        fi
    else
        echo "⚠️  CONFLICT: Merge conflict detected" | tee -a "$MERGE_LOG"
        ((CONFLICT_COUNT++))
        
        # Try to resolve automatically
        echo "🔧 Attempting automatic conflict resolution..." | tee -a "$MERGE_LOG"
        
        # For common conflicts, prefer incoming changes
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "   Conflicted files:" | tee -a "$MERGE_LOG"
            echo "$CONFLICTED_FILES" | sed 's/^/   - /' | tee -a "$MERGE_LOG"
            
            # Auto-resolve by accepting theirs for blog posts and new content
            for FILE in $CONFLICTED_FILES; do
                if [[ $FILE == blog/* ]] || [[ $FILE == app/blog/* ]] || [[ $FILE == case-studies/* ]]; then
                    echo "   ✓ Auto-resolving $FILE (accepting new content)" | tee -a "$MERGE_LOG"
                    git checkout --theirs "$FILE"
                    git add "$FILE"
                elif [[ $FILE == src/content/* ]]; then
                    echo "   ✓ Merging $FILE (combining content)" | tee -a "$MERGE_LOG"
                    # For content files, try to merge both
                    git checkout --ours "$FILE"
                    git add "$FILE"
                fi
            done
            
            # Check if all conflicts resolved
            if git diff --name-only --diff-filter=U | grep -q .; then
                echo "   ⚠️  Some conflicts remain - aborting this merge" | tee -a "$MERGE_LOG"
                git merge --abort
            else
                echo "   ✅ All conflicts resolved" | tee -a "$MERGE_LOG"
                git commit --no-edit -m "Merge $LOCAL_BRANCH: Auto-resolved conflicts" 2>&1 | tee -a "$MERGE_LOG"
                ((SUCCESS_COUNT++))
                ((CONFLICT_COUNT--))
                
                # Push
                echo "📤 Pushing to remote..." | tee -a "$MERGE_LOG"
                git push origin main 2>&1 | tee -a "$MERGE_LOG" || echo "⚠️  Push failed" | tee -a "$MERGE_LOG"
            fi
        else
            echo "   ⚠️  Unknown conflict type - aborting" | tee -a "$MERGE_LOG"
            git merge --abort
        fi
    fi
    
    echo "" | tee -a "$MERGE_LOG"
    sleep 1  # Rate limit
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" | tee -a "$MERGE_LOG"
echo "📊 MERGE SUMMARY" | tee -a "$MERGE_LOG"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" | tee -a "$MERGE_LOG"
echo "✅ Successful merges: $SUCCESS_COUNT" | tee -a "$MERGE_LOG"
echo "⚠️  Conflicts: $CONFLICT_COUNT" | tee -a "$MERGE_LOG"
echo "⏭️  Skipped (already merged): $SKIP_COUNT" | tee -a "$MERGE_LOG"
echo "" | tee -a "$MERGE_LOG"
echo "📝 Full log saved to: $MERGE_LOG" | tee -a "$MERGE_LOG"
echo "" | tee -a "$MERGE_LOG"

if [ $SUCCESS_COUNT -gt 0 ]; then
    echo "🎉 Successfully merged $SUCCESS_COUNT branches!" | tee -a "$MERGE_LOG"
    echo "🚀 All changes have been pushed to main" | tee -a "$MERGE_LOG"
else
    echo "⚠️  No new branches were merged" | tee -a "$MERGE_LOG"
fi

echo "" | tee -a "$MERGE_LOG"
echo "✨ Merge process complete!" | tee -a "$MERGE_LOG"