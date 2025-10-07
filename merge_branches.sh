#!/bin/bash

# Merge branches with unique commits
echo "Merging cursor/fix-errors-and-merge-to-main-ed71..."
git merge origin/cursor/fix-errors-and-merge-to-main-ed71 --no-edit

echo "Merging cursor/fix-errors-and-merge-to-main-f749..."
git merge origin/cursor/fix-errors-and-merge-to-main-f749 --no-edit

echo "All merges completed successfully!"