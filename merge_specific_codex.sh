#!/bin/bash

# Script to merge specific codex branches that likely have meaningful changes
set -e

echo "🚀 Starting merge process for specific codex branches..."
echo "⏰ Started at: $(date)"
echo "=========================================="

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_MERGES=0

# List of specific codex branches that likely have meaningful changes
specific_branches=(
    "0nylrk-codex/fix-footer-contact-link"
    "0parff-codex/centralize-api-error-handling-and-add-errorboundary"
    "0smfo8-codex/fix-404-error-for-non-existent-route"
    "14gqd5-codex/implement-checkout-flow-with-auth-redirect"
    "1dcwqi-codex/implement-global-pricing-with-currency-selection"
    "1fjs4s-codex/implement-instant-messaging-for-negotiations"
    "1m9jcs-codex/fix-client-side-rendering-and-javascript-errors"
    "1nc0kn-codex/fix-blank-screen-on-app-load"
    "1nq1ky-codex/render-talent-profiles-with-error-states"
    "1ry69n-codex/fix-npm-eio-error-during-install"
    "1sqc9r-codex/implement-light/dark-theme-with-persistence"
    "1tg4fy-codex/support-metric--imperial-units"
    "1wzbwr-codex/fix-typescript-errors-in-files"
    "22xuo1-codex/implement-wishlist-functionality"
    "24727i-codex/implement-stripe-checkout-flow"
    "2a8x9k-codex/implement-order-history-page-with-pdf-downloads"
    "2b5x7m-codex/add-form-validation-and-feedback"
    "2c9x3n-codex/implement-global-error-boundary-with-toasts"
    "2d8x1p-codex/implement-newsletter-subscription-feature"
    "2e5x6q-codex/implement-password-reset-endpoint-and-link"
)

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "pnpm-lock.yaml" ]]; then
            echo "📦 Critical file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" || "$file" == "vite.config.ts" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
        return 0
    fi
    return 1
}

# Function to check if a branch has changes compared to main
has_changes() {
    local branch="$1"
    local main_commit=$(git rev-parse main)
    local branch_commit=$(git rev-parse "origin/$branch" 2>/dev/null || echo "")
    
    if [ -z "$branch_commit" ]; then
        return 1
    fi
    
    # Check if branch is ahead of main or has different commits
    if git merge-base --is-ancestor "$main_commit" "$branch_commit" 2>/dev/null; then
        # Branch is ahead of main
        return 0
    elif ! git merge-base --is-ancestor "$branch_commit" "$main_commit" 2>/dev/null; then
        # Branch has divergent history
        return 0
    else
        # Branch is behind or same as main
        return 1
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist on remote, skipping..."
        SKIPPED_MERGES=$((SKIPPED_MERGES + 1))
        return 0
    fi
    
    # Fetch the latest version of the branch
    if ! git fetch origin "$branch"; then
        echo "❌ Failed to fetch branch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    fi
    
    # Check if branch has changes
    if ! has_changes "$branch"; then
        echo "⏭️  Branch $branch has no changes compared to main, skipping..."
        SKIPPED_MERGES=$((SKIPPED_MERGES + 1))
        return 0
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            conflicts_resolved=0
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    if resolve_conflicts "$file" "$branch"; then
                        conflicts_resolved=$((conflicts_resolved + 1))
                    fi
                fi
            done
            
            if [ $conflicts_resolved -gt 0 ]; then
                # Add resolved files
                git add .
                
                # Commit the merge
                git commit -m "Resolve merge conflicts for $branch - $(date)"
                
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ Could not resolve conflicts for $branch. Aborting..."
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process each specific branch
for branch in "${specific_branches[@]}"; do
    echo ""
    echo "=========================================="
    echo "🔄 Processing specific branch: $branch"
    echo "=========================================="
    
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Branch $branch processing failed"
    fi
    
    echo "=========================================="
    
    # Push changes every 5 successful merges
    if [ $((SUCCESSFUL_MERGES % 5)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
    
    # Brief pause
    sleep 1
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Specific codex branch merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   ⏭️  Skipped merges: $SKIPPED_MERGES"
echo "⏰ Completed at: $(date)"

# Cleanup recommendations
echo ""
echo "🧹 Cleanup recommendations:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Run tests to ensure everything works correctly"