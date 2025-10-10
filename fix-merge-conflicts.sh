#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" /workspace/app/ /workspace/src/ | cut -d: -f1 | sort -u)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Fixing conflicts in $file..."
    # Use git merge-file with ours strategy or manually remove conflict markers
    # Remove conflict markers and keep the incoming version (after =======)
    perl -i -0777 -pe 's/\n(.*?)\n
    # Also handle nested conflicts
    perl -i -0777 -pe 's/\n.*?\n
  fi
done

echo "All merge conflicts have been resolved!"