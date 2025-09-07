#!/bin/bash
echo "🔧 Resolving merge conflicts automatically..."
CONFLICTED_FILES=$(git status --porcelain | grep -E "^UU |^AA |^DD " | awk '{print $2}')
echo "Found conflicted files:"
echo "$CONFLICTED_FILES"

for file in $CONFLICTED_FILES; do
  echo "Resolving conflicts in: $file"
  git checkout --theirs "$file"
  git add "$file"
  echo "✅ Resolved conflicts in $file"
done

echo "🎉 All conflicts resolved!"
echo "Committing merge..."
git commit -m "Resolve merge conflicts - accept incoming changes"
echo "✅ Merge completed successfully!"