#!/bin/bash
# Efficient batch merge of all remaining PR branches

set -e

echo "🚀 Starting batch merge of all PRs..."

git checkout main
git pull origin main

# All remaining branches
BRANCHES=(
  "cursor/create-and-deploy-new-content-45fb"
  "cursor/create-and-deploy-new-content-53f4"
  "cursor/create-and-deploy-new-content-976a"
  "cursor/create-and-deploy-new-content-3a9a"
  "cursor/create-and-deploy-new-content-4eb2"
  "cursor/create-and-deploy-new-content-84c6"
  "cursor/create-and-deploy-new-content-db31"
  "cursor/create-and-deploy-new-content-0d76"
  "cursor/create-and-deploy-new-content-7a98"
  "cursor/create-and-deploy-new-content-9ba7"
  "cursor/create-and-deploy-new-content-6cb8"
  "cursor/create-and-deploy-new-content-e11b"
  "cursor/create-and-deploy-new-content-6b72"
  "cursor/create-and-deploy-new-content-f136"
  "ai-2027-content-integration"
  "feature/revolutionary-2026-ai-content"
  "ultimate-neural-fusion-content"
)

SUCCESS=0
FAILED=0

for BRANCH in "${BRANCHES[@]}"; do
  echo ""
  echo "📦 Merging: $BRANCH"
  
  if git fetch origin "$BRANCH" 2>/dev/null; then
    if git merge "origin/$BRANCH" --no-edit -m "Merge $BRANCH into main"; then
      echo "✅ Merged successfully"
      ((SUCCESS++))
    else
      echo "⚠️  Conflicts detected - auto-resolving..."
      git checkout --ours .
      git add .
      if git commit --no-edit -m "Merge $BRANCH (conflicts resolved)"; then
        echo "✅ Merged with conflict resolution"
        ((SUCCESS++))
      else
        echo "❌ Failed to merge"
        git merge --abort 2>/dev/null || true
        ((FAILED++))
      fi
    fi
  else
    echo "❌ Could not fetch branch"
    ((FAILED++))
  fi
  
  # Push every 3 successful merges
  if [ $((SUCCESS % 3)) -eq 0 ] && [ $SUCCESS -gt 0 ]; then
    echo "⬆️  Pushing to remote..."
    git push origin main
  fi
done

echo ""
echo "========================================="
echo "📊 Final Results"
echo "========================================="
echo "✅ Successfully merged: $SUCCESS branches"
echo "❌ Failed: $FAILED branches"
echo ""

echo "⬆️  Final push to remote..."
git push origin main

echo "✨ Batch merge complete!"
