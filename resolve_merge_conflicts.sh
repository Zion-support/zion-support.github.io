#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts by accepting remote changes
resolve_remote() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving $file - accepting remote changes"
        git checkout --theirs "$file"
        git add "$file"
    fi
}

# Function to resolve conflicts by accepting local changes
resolve_local() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving $file - accepting local changes"
        git checkout --ours "$file"
        git add "$file"
    fi
}

# Function to remove deleted files
remove_deleted() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Removing deleted file: $file"
        git rm "$file"
    fi
}

echo "1. Resolving critical files with local changes..."

# Keep local changes for critical files
resolve_local "app/page.tsx"
resolve_local "package.json"
resolve_local "tsconfig.json"
resolve_local "yarn.lock"

echo "2. Resolving component conflicts with remote changes..."

# Accept remote changes for most components
resolve_remote "components/"

echo "3. Resolving app directory conflicts with remote changes..."

# Accept remote changes for app directory
resolve_remote "app/"

echo "4. Resolving pages directory conflicts with remote changes..."

# Accept remote changes for pages directory
resolve_remote "pages/"

echo "5. Removing deleted files..."

# Remove files that were deleted in remote
remove_deleted "app/blog/ai-2025-edge-computing-revolution-ultimate-guide/page.tsx"
remove_deleted "app/blog/ai-2025-enterprise-transformation-complete-guide/page.tsx"
remove_deleted "app/case-studies/fortune-500-ai-transformation-2025-ultimate-success/page.tsx"
remove_deleted "app/components/AI2026AutonomousSystemsBanner.tsx"
remove_deleted "app/components/AI2026UltimateShowcaseBanner.tsx"
remove_deleted "app/resources/ai-implementation-checklist-2025/page.tsx"
remove_deleted "components/UltimateContentShowcase2025.tsx"

echo "6. Resolving temp_disabled conflicts with remote changes..."
resolve_remote "temp_disabled/"

echo "7. Resolving remaining conflicts..."

# Resolve all remaining conflicts by accepting remote changes
git status --porcelain | grep "^UU\|^AU\|^UA\|^DD\|^AA" | while read status file; do
    if [ -f "$file" ]; then
        echo "Resolving remaining conflict: $file"
        git checkout --theirs "$file"
        git add "$file"
    fi
done

echo "8. Final cleanup..."

# Remove any remaining untracked files that might cause issues
git clean -fd

echo "Merge conflict resolution completed!"
echo "Checking status..."
git status

echo "Committing resolved conflicts..."
git commit -m "Resolve all merge conflicts - integrate remote changes with local improvements"

echo "Merge conflict resolution script completed successfully!"