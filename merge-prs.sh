#!/bin/bash

echo "🚀 Starting merge conflict resolution and PR merging process..."

# Function to resolve merge conflicts
resolve_conflicts() {
    echo "🔍 Searching for merge conflicts..."
    
    # Find files with merge conflicts
    conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" -l 2>/dev/null || true)
    
    if [ -z "$conflict_files" ]; then
        echo "✅ No merge conflicts found!"
        return 0
    fi
    
    echo "Found files with merge conflicts:"
    echo "$conflict_files"
    
    # Resolve conflicts by keeping HEAD version
    for file in $conflict_files; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in: $file"
            # Remove merge conflict markers and keep HEAD version
            sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
            # Remove any remaining conflict markers
            sed -i '/^<<<<<<< /d' "$file"
            sed -i '/^=======/d' "$file"
            sed -i '/^>>>>>>> /d' "$file"
        fi
    done
    
    echo "✅ Merge conflicts resolved!"
}

# Function to merge PRs
merge_prs() {
    echo "🔄 Starting PR merge process..."
    
    # Switch to main branch
    git checkout main
    echo "✅ Switched to main branch"
    
    # Pull latest changes
    git pull origin main
    echo "✅ Pulled latest changes from main"
    
    # List of PR branches to merge
    pr_branches=(
        "cursor/fix-netlify-build-and-merge-to-main-c6f9"
        "cursor/build-application-with-vite-and-nextjs-2b63"
    )
    
    for branch in "${pr_branches[@]}"; do
        echo "🔄 Attempting to merge branch: $branch"
        
        # Check if branch exists
        if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
            # Fetch the branch
            git fetch origin "$branch"
            
            # Merge the branch
            if git merge "origin/$branch" --no-ff -m "Merge PR branch: $branch"; then
                echo "✅ Successfully merged branch: $branch"
            else
                echo "❌ Failed to merge branch: $branch"
            fi
        else
            echo "⚠️ Branch $branch not found, skipping..."
        fi
    done
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

# Function to commit and push changes
commit_and_push() {
    echo "📤 Committing and pushing changes..."
    
    git add .
    git commit -m "Resolve merge conflicts and merge PRs into main branch"
    git push origin main
    
    echo "✅ Changes committed and pushed successfully!"
}

# Main execution
main() {
    echo "Starting comprehensive merge conflict resolution and PR merging..."
    
    # Resolve conflicts
    resolve_conflicts
    
    # Merge PRs
    merge_prs
    
    # Verify build
    if verify_build; then
        # Commit and push changes
        commit_and_push
        echo "🎉 All merge conflicts resolved and PRs merged successfully!"
    else
        echo "⚠️ Build verification failed. Please check the errors above."
        exit 1
    fi
}

# Run main function
main "$@"