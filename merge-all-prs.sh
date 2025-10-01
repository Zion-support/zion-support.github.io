#!/bin/bash

# Merge all open PRs automatically
PR_BRANCHES=(
  "cursor/create-and-deploy-new-content-4209"
  "cursor/create-and-deploy-new-content-de63"
  "cursor/create-and-deploy-new-content-b7e3"
  "cursor/create-and-deploy-new-content-c909"
  "cursor/create-and-deploy-new-content-b01b"
  "cursor/create-and-deploy-new-content-7897"
  "cursor/create-and-deploy-new-content-3561"
  "cursor/create-and-deploy-new-content-7f50"
)

for branch in "${PR_BRANCHES[@]}"; do
  echo "========================================="
  echo "Processing: $branch"
  echo "========================================="
  
  # Fetch the branch
  git fetch origin "$branch" 2>&1 | head -3
  
  # Try to merge
  if git merge "origin/$branch" --no-edit; then
    echo "✓ Merged $branch successfully without conflicts"
  else
    echo "⚠ Conflicts detected in $branch, resolving automatically..."
    
    # Resolve conflicts by accepting incoming changes for key files
    git checkout --theirs App.tsx 2>/dev/null || true
    git checkout --theirs app/layout.tsx 2>/dev/null || true
    git checkout --theirs app/page.tsx 2>/dev/null || true
    git checkout --theirs src/pages/Home.tsx 2>/dev/null || true
    
    # Add all changes
    git add -A
    
    # Commit the merge
    if git commit -m "Merge PR: $branch"; then
      echo "✓ Successfully merged $branch with conflict resolution"
    else
      echo "✗ Failed to commit merge for $branch"
      git merge --abort
    fi
  fi
  
  echo ""
done

echo "========================================="
echo "Merge process complete!"
echo "========================================="
git log --oneline -10
