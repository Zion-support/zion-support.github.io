#!/bin/bash

# Script to merge latest content branches
set -e

echo "🚀 Starting latest content merge process..."

# Get the most recent content branches
recent_branches=(
    "feat/new-content-2025-09-16"
    "feat/new-content-sept-2025"
    "feature/new-content-2025"
    "feat/new-content-and-advertise"
    "feat/new-content-promos"
    "feat/new-content-ads"
    "feat/new-content-sept16"
    "feat/new-content-2025-09"
    "feat/new-content-2025-09-16-v2"
    "feat/new-content-sept-16"
    "feat/new-content-sept-16-v2"
    "feat/new-content-sept16-2025"
    "feat/new-content-sept16-v2"
    "feat/new-content-sept16-2"
    "feat/new-content-sept16-b"
    "feat/new-content-sept16-content-updates"
    "feat/new-content-spotlight"
    "feat/new-content-evidence-hub"
    "feat/new-content-evidence-hub-2026"
    "feat/new-content-evidence-driven-lifecycle"
    "feat/new-content-rt-rag-benchmark"
    "feat/new-content-guardrail-metrics-and-incident-sim"
    "feat/new-content-incident-response-2026"
    "feat/new-content-production-evidence-hub"
    "feat/new-content-registry-sept-2025"
    "feat/new-content-spotlight-2025-09-16-new"
    "feat/new-content-update-2025-09-16"
    "feat/new-content-update-20250916"
    "feat/new-content-updates-2025-09-16"
    "feat/new-content-updates-20250916"
    "feat/new-content-updates-20250916-clean"
    "feat/new-content-2025-09-16-alt"
    "feat/new-content-2025-09-16-b"
    "feat/new-content-2025-09-16-v2"
    "feat/new-content-2025-09-17"
    "feat/new-content-20250916-a"
    "feat/new-content-ad-banner"
    "feat/new-content-ads-2"
)

successful_merges=0
failed_merges=0

# Process each branch
for branch in "${recent_branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict in $branch, resolving..."
        
        # Resolve conflicts by accepting our changes
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit -m "Resolve conflicts and merge $branch" 2>/dev/null; then
            echo "✅ Resolved conflicts and merged $branch"
            ((successful_merges++))
        else
            echo "❌ Failed to resolve conflicts for $branch"
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
    fi
    
    sleep 1
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push changes
echo ""
echo "🚀 Pushing changes to main..."
if git push origin main --force; then
    echo "✅ Successfully pushed all changes to main"
else
    echo "❌ Failed to push changes to main"
fi

echo ""
echo "🎉 Latest content merge process completed!"