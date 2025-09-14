#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
# This script will systematically merge important branches and resolve conflicts

set -e

echo "🚀 Starting comprehensive merge conflict resolution..."

# Function to print status
print_status() {
    echo "✅ $1"
}

print_error() {
    echo "❌ $1"
}

# Function to resolve conflicts by taking the newer version
resolve_conflicts_newer() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file by taking newer version..."
        # Use git checkout to take the version from the branch being merged
        git checkout --theirs "$file" 2>/dev/null || true
        git add "$file" 2>/dev/null || true
    fi
}

# Function to resolve conflicts by taking our version
resolve_conflicts_ours() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "Resolving conflicts in $file by taking our version..."
        git checkout --ours "$file" 2>/dev/null || true
        git add "$file" 2>/dev/null || true
    fi
}

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch="$1"
    local description="$2"
    
    echo "🔄 Attempting to merge $branch ($description)..."
    
    if git merge "$branch" --no-ff -m "Merge $branch: $description" 2>/dev/null; then
        print_status "Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # List conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "Conflicted files:"
            echo "$conflicted_files"
            
            # Resolve conflicts based on file type
            echo "$conflicted_files" | while read -r file; do
                if [ -n "$file" ]; then
                    case "$file" in
                        *.json|*.js|*.ts|*.tsx|*.jsx)
                            echo "Resolving JS/TS file: $file"
                            resolve_conflicts_newer "$file"
                            ;;
                        *.md|*.txt)
                            echo "Resolving documentation: $file"
                            resolve_conflicts_newer "$file"
                            ;;
                        *.sh|*.yml|*.yaml)
                            echo "Resolving config file: $file"
                            resolve_conflicts_newer "$file"
                            ;;
                        package.json|yarn.lock|package-lock.json)
                            echo "Resolving package file: $file"
                            resolve_conflicts_newer "$file"
                            ;;
                        *)
                            echo "Resolving other file: $file"
                            resolve_conflicts_newer "$file"
                            ;;
                    esac
                fi
            done
            
            # Commit the resolved conflicts
            if git commit -m "Resolve merge conflicts in $branch" 2>/dev/null; then
                print_status "Successfully resolved conflicts in $branch"
                return 0
            else
                print_error "Failed to resolve conflicts in $branch"
                git merge --abort
                return 1
            fi
        else
            print_error "No conflicted files found but merge failed"
            git merge --abort
            return 1
        fi
    fi
}

# Main merge process
echo "📋 Starting systematic branch merging..."

# List of important branches to merge (in order of priority)
branches=(
    "origin/cursor/enhance-pm2-automations-for-development-and-deployment-2dee:PM2 automation enhancements"
    "origin/cursor/expand-services-advertise-and-build-project-87fb:Service expansion and advertising"
    "origin/cursor/website-audit-content-update-and-deployment-004d:Website audit and content updates"
    "origin/cursor/fix-errors-and-automate-with-pm2-2f65:Error fixing and PM2 automation"
    "origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-e68e:Website enhancements"
)

# Merge each branch
for branch_info in "${branches[@]}"; do
    IFS=':' read -r branch description <<< "$branch_info"
    
    echo ""
    echo "🔄 Processing branch: $branch"
    echo "Description: $description"
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" 2>/dev/null || {
        print_error "Failed to fetch $branch"
        continue
    }
    
    # Attempt to merge
    if merge_branch "$branch" "$description"; then
        print_status "Successfully merged $branch"
    else
        print_error "Failed to merge $branch, skipping..."
    fi
done

# Final status check
echo ""
echo "📊 Final status:"
git status

echo ""
echo "🎉 Merge conflict resolution completed!"
echo "📝 Summary of actions:"
echo "   - Attempted to merge important branches"
echo "   - Resolved conflicts by taking newer versions"
echo "   - Committed resolved changes"

# Push changes if everything looks good
read -p "Do you want to push the merged changes to origin/main? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Pushing changes to origin/main..."
    git push origin main
    print_status "Changes pushed successfully!"
else
    echo "⏸️  Changes not pushed. You can review and push manually later."
fi
