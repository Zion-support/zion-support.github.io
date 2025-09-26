#!/bin/bash

# Script to merge all unmerged branches with conflict resolution
echo "Starting comprehensive branch merge process..."

# Get all unmerged branches
branches=$(git branch -r --no-merged origin/main | head -50)

for branch in $branches; do
  echo "Processing $branch..."
  
  # Attempt merge
  if git merge "$branch" --no-ff -m "Merge $branch"; then
    echo "✅ Successfully merged $branch"
  else
    echo "⚠️  Conflict in $branch, resolving..."
    
    # Resolve common conflicts
    git rm .yarn/install-state.gz yarn.lock 2>/dev/null || true
    git rm .yarn/cache/*.zip 2>/dev/null || true
    
    # Keep main branch versions of package files
    git checkout --ours package.json package-lock.json 2>/dev/null || true
    
    # Add resolved files
    git add package.json package-lock.json 2>/dev/null || true
    
    # Commit resolution
    if git commit -m "Resolve merge conflicts in $branch"; then
      echo "✅ Resolved conflicts for $branch"
    else
      echo "❌ Failed to resolve conflicts for $branch"
      git merge --abort 2>/dev/null || true
    fi
  fi
done

echo "Branch merge process completed!"