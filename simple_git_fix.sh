#!/bin/bash

echo "🚀 Starting simple Git configuration and merge fix..."

# Configure Git for merge strategy
echo "🔧 Configuring Git..."
git config pull.rebase false
git config merge.tool vimdiff
git config merge.conflictstyle diff3

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin

# Switch to main and pull latest
echo "🔄 Switching to main branch..."
git checkout main
git pull origin main

# Try to merge a few specific branches
branches=(
  "0parff-codex/centralize-api-error-handling-and-add-errorboundary"
  "0smfo8-codex/fix-404-error-for-non-existent-route"
  "0t8m4m-codex/update-project-color-palette"
)

echo "🌿 Attempting to merge specific branches..."

for branch in "${branches[@]}"; do
  echo "Processing branch: $branch"
  
  # Try to merge the branch
  if git merge "origin/$branch" --no-ff -m "Merge $branch into main"; then
    echo "✅ Successfully merged $branch"
  else
    echo "❌ Failed to merge $branch"
    # Reset the merge attempt
    git merge --abort
  fi
  
  sleep 2
done

# Push changes
echo "🚀 Pushing changes to origin..."
git push origin main

echo "✅ Simple Git fix completed!"