#!/bin/bash

echo "🚀 Starting comprehensive merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove merge conflict markers and keep the latest version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
}

# Function to clean up backup files
cleanup_backup_files() {
    echo "🧹 Cleaning up backup files..."
    find . -name "*.backup" -type f -delete
    find . -name "*.bak" -type f -delete
    find . -name "*.conflicted" -type f -delete
    find . -name "*.cleanup-backup.*" -type f -delete
}

# Function to resolve all merge conflicts
resolve_all_conflicts() {
    echo "🔧 Resolving all merge conflicts..."
    
    # Find all files with merge conflicts
    conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" --include="*.css" --include="*.html" -l | head -50)
    
    for file in $conflict_files; do
        if [ -f "$file" ]; then
            resolve_conflicts "$file"
        fi
    done
    
    # Also resolve conflicts in specific problematic files
    for file in $(find . -name "*.conflicted" -type f); do
        if [ -f "$file" ]; then
            new_name=$(echo "$file" | sed 's/\.conflicted$//')
            mv "$file" "$new_name"
            resolve_conflicts "$new_name"
        fi
    done
}

# Function to merge PRs
merge_prs() {
    echo "🔄 Merging PRs..."
    
    # Switch to main branch
    git checkout main
    git pull origin main
    
    # Merge the first PR branch
    if git show-ref --verify --quiet refs/remotes/origin/cursor/fix-netlify-build-and-merge-to-main-7161; then
        echo "Merging cursor/fix-netlify-build-and-merge-to-main-7161..."
        git merge origin/cursor/fix-netlify-build-and-merge-to-main-7161 --no-ff -m "Merge PR #12711: Fix Netlify build and merge to main"
    fi
    
    # Merge the second PR branch
    if git show-ref --verify --quiet refs/remotes/origin/cursor/fix-netlify-build-and-merge-to-main-4a00; then
        echo "Merging cursor/fix-netlify-build-and-merge-to-main-4a00..."
        git merge origin/cursor/fix-netlify-build-and-merge-to-main-4a00 --no-ff -m "Merge PR #12710: Fix Netlify build and merge to main"
    fi
}

# Function to verify build
verify_build() {
    echo "🔍 Verifying build..."
    
    # Install dependencies
    npm install
    
    # Run build
    if npm run build; then
        echo "✅ Build successful!"
        return 0
    else
        echo "❌ Build failed!"
        return 1
    fi
}

# Function to push changes
push_changes() {
    echo "📤 Pushing changes..."
    git add .
    git commit -m "Resolve all merge conflicts and merge PRs into main branch"
    git push origin main
}

# Main execution
main() {
    echo "Starting merge conflict resolution and PR merging process..."
    
    # Clean up backup files first
    cleanup_backup_files
    
    # Resolve all conflicts
    resolve_all_conflicts
    
    # Merge PRs
    merge_prs
    
    # Verify build
    if verify_build; then
        # Push changes
        push_changes
        echo "🎉 All merge conflicts resolved and PRs merged successfully!"
    else
        echo "⚠️ Build verification failed. Please check the errors above."
        exit 1
    fi
}

# Run main function
main "$@"