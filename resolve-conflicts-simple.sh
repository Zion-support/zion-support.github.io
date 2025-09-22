#!/usr/bin/env bash

echo "🔧 Resolving merge conflicts automatically..."

# Find all files with merge conflicts
conflict_files=$(git diff --name-only --diff-filter=U)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found"
    exit 0
fi

echo "📋 Found merge conflicts in:"
echo "$conflict_files"

# Resolve conflicts by accepting our changes (from the automation branch)
for file in $conflict_files; do
    echo "🔧 Resolving conflicts in $file..."
    
    # Use git checkout to accept our version (the automation branch version)
    git checkout --ours "$file"
    
    # Add the resolved file
    git add "$file"
    
    echo "✅ Resolved $file"
done

echo "🎉 All merge conflicts resolved!"
echo "📋 Resolved files:"
echo "$conflict_files"

# Commit the merge
git commit -m "resolve: merge conflicts resolved automatically

- Accepted automation branch changes for all conflicted files
- Preserved syntax fixes and improvements from automation system
- All automation scripts and fixes are now integrated into main branch

Resolved conflicts in:
$(echo "$conflict_files" | sed 's/^/- /')"

echo "✅ Merge completed successfully!"