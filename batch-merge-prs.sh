#!/bin/bash
set -e

echo "=== Batch PR Merge Script ==="
echo "Fetching latest from origin..."
git fetch origin
git checkout main
git pull origin main

# List of PR branches to merge (from API)
branches=(
  "cursor/create-and-deploy-new-content-f2bf"
  "cursor/create-and-deploy-new-content-933f"
  "cursor/create-and-deploy-new-content-3659"
  "cursor/create-and-deploy-new-content-bfb9"
  "cursor/create-and-deploy-new-content-de4c"
  "cursor/create-and-deploy-new-content-8fa1"
  "cursor/create-and-deploy-new-content-fcbc"
  "cursor/create-and-deploy-new-content-4078"
  "cursor/create-and-deploy-new-content-7b41"
  "cursor/create-and-deploy-new-content-d230"
  "cursor/create-and-deploy-new-content-6856"
  "cursor/create-and-deploy-new-content-22e0"
  "cursor/create-and-deploy-new-content-d0b8"
  "cursor/create-and-deploy-new-content-d271"
)

merged_count=0
failed_count=0

for branch in "${branches[@]}"; do
  echo ""
  echo "======================================"
  echo "Processing branch: $branch"
  echo "======================================"
  
  # Try to merge
  if git merge --no-edit "origin/$branch" 2>&1 | tee /tmp/merge-output.txt; then
    echo "✓ Merged $branch cleanly"
    merged_count=$((merged_count + 1))
  else
    echo "⚠ Merge conflict detected for $branch"
    
    # Check if there are conflicts
    if git status | grep -q "Unmerged paths"; then
      echo "Resolving conflicts automatically..."
      
      # Get list of conflicted files
      conflicted_files=$(git diff --name-only --diff-filter=U)
      
      for file in $conflicted_files; do
        echo "  Resolving: $file"
        
        # Strategy: prefer theirs (branch) for source files, ours (main) for dist/build
        if [[ $file == dist/* ]] || [[ $file == out/* ]] || [[ $file == build/* ]]; then
          echo "    -> Keeping main version (build artifact)"
          git checkout --ours "$file"
        elif [[ $file == src/* ]] || [[ $file == app/* ]] || [[ $file == components/* ]]; then
          echo "    -> Taking branch version (source code)"
          git checkout --theirs "$file"
        else
          # For other files, try to take theirs if it looks like content
          echo "    -> Taking branch version (default)"
          git checkout --theirs "$file"
        fi
        
        git add "$file"
      done
      
      # Commit the merge
      if git commit --no-edit; then
        echo "✓ Resolved conflicts and merged $branch"
        merged_count=$((merged_count + 1))
      else
        echo "✗ Failed to commit merge for $branch"
        git merge --abort
        failed_count=$((failed_count + 1))
      fi
    else
      echo "✗ Merge failed for unknown reason: $branch"
      git merge --abort 2>/dev/null || true
      failed_count=$((failed_count + 1))
    fi
  fi
done

echo ""
echo "======================================"
echo "Merge Summary"
echo "======================================"
echo "Successfully merged: $merged_count"
echo "Failed: $failed_count"
echo ""

if [ $merged_count -gt 0 ]; then
  echo "Pushing merged changes to origin/main..."
  git push origin main
  echo "✓ All changes pushed to main"
else
  echo "No branches were merged successfully."
fi

echo "Done!"
