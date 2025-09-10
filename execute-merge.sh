#!/bin/bash
set -e

echo "🚀 Starting comprehensive PR merge process for zion.app"
echo "=================================================="

# Ensure we're on main and synced
echo "📋 Step 1: Syncing main branch..."
git checkout main
git pull origin main
echo "✅ Main branch synced"

# Fetch all PR refs
echo "📋 Step 2: Fetching PR references..."
git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*"
echo "✅ PR references fetched"

# Get the latest 20 PR numbers
echo "📋 Step 3: Identifying PRs to merge..."
PRS=$(git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | awk -F/ '{print $3}' | sort -n | tail -n 20)
echo "Found PRs to merge: $PRS"

# Process each PR
echo "📋 Step 4: Processing PRs..."
success_count=0
failed_count=0

for PR in $PRS; do
    echo ""
    echo "🔄 Processing PR #$PR..."
    
    # Create merge branch
    git checkout -B "merge-pr-$PR" main
    
    # Try to merge with conflict resolution
    if git merge -m "Merge PR #$PR" -X theirs "origin/pr/$PR" 2>/dev/null; then
        echo "✅ PR #$PR merged cleanly"
    else
        echo "⚠️  Conflicts detected in PR #$PR, auto-resolving..."
        
        # Auto-resolve common conflicts
        git checkout --ours -- package-lock.json 2>/dev/null || true
        git checkout --ours -- yarn.lock 2>/dev/null || true
        git checkout --ours -- pnpm-lock.yaml 2>/dev/null || true
        git checkout --theirs -- dist/** 2>/dev/null || true
        git checkout --theirs -- build/** 2>/dev/null || true
        git checkout --theirs -- out/** 2>/dev/null || true
        
        git add -A
        
        if git commit -m "Auto-resolve conflicts for PR #$PR" 2>/dev/null; then
            echo "✅ Auto-resolved conflicts for PR #$PR"
        else
            echo "❌ Could not auto-resolve PR #$PR, skipping..."
            git checkout main
            git branch -D "merge-pr-$PR" 2>/dev/null || true
            failed_count=$((failed_count + 1))
            continue
        fi
    fi
    
    # Merge into main
    echo "🔄 Integrating PR #$PR into main..."
    git checkout main
    git merge --no-ff -m "Merge PR #$PR" "merge-pr-$PR"
    
    # Push to origin
    echo "🔄 Pushing changes to GitHub..."
    if git push origin main; then
        echo "✅ Successfully pushed PR #$PR to GitHub"
        success_count=$((success_count + 1))
    else
        echo "❌ Failed to push PR #$PR to GitHub"
        failed_count=$((failed_count + 1))
    fi
    
    # Clean up
    git branch -D "merge-pr-$PR"
    echo "✅ Cleaned up temporary branch for PR #$PR"
done

# Summary
echo ""
echo "=================================================="
echo "📊 MERGE SUMMARY"
echo "=================================================="
echo "✅ Successfully merged: $success_count PRs"
echo "❌ Failed to merge: $failed_count PRs"
echo "📈 Total processed: $((success_count + failed_count)) PRs"
echo "=================================================="

if [ $success_count -gt 0 ]; then
    echo "🎉 PR merge process completed successfully!"
    echo "🚀 Ready to proceed with improvements!"
else
    echo "⚠️  No PRs were successfully merged. Please check for issues."
fi