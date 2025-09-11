#!/bin/bash

echo "🚀 Complete Merge Conflict Resolution and PR Merge Solution"
echo "=="
echo ""

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    if [[ -f "$file" ]]; then
        echo "📝 Resolving conflicts in: $file"
        
        # Keep incoming changes (after )
        sed -i '//d' "$file"
        sed -i '/
        
        # Clean up any remaining conflict markers
        sed -i '/
        sed -i '//d' "$file"
        sed -i '/
        
        echo "✅ Resolved: $file"
        return 0
    else
        echo "❌ File not found: $file"
        return 1
    fi
}

# Function to find and resolve all conflicts
resolve_all_conflicts() {
    echo "🔍 Finding files with merge conflicts..."
    
    # Find files with conflicts
    local conflicted_files=()
    while IFS= read -r -d '' file; do
        conflicted_files+=("$file")
    done < <(find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.sh" -o -name "*.cjs" -o -name "*.xml" \) -exec grep -l "
    
    echo "Found ${#conflicted_files[@]} files with conflicts"
    echo ""
    
    local resolved=0
    local errors=0
    
    for file in "${conflicted_files[@]}"; do
        if resolve_conflicts "$file"; then
            ((resolved++))
        else
            ((errors++))
        fi
    done
    
    echo ""
    echo "📊 Resolution Summary:"
    echo "✅ Successfully resolved: $resolved files"
    echo "❌ Errors: $errors files"
    echo ""
}

# Function to check GitHub for open PRs
check_github_prs() {
    echo "🔍 Checking GitHub for open PRs..."
    echo ""
    
    # Try to use GitHub CLI if available
    if command -v gh &> /dev/null; then
        echo "Using GitHub CLI to check PRs..."
        gh pr list --state open
        echo ""
    else
        echo "GitHub CLI not available. Please check manually at:"
        echo "https://github.com/Zion-Holdings/zion.app/pulls"
        echo ""
    fi
}

# Function to merge all open PRs
merge_open_prs() {
    echo "🔄 Attempting to merge open PRs..."
    echo ""
    
    if command -v gh &> /dev/null; then
        # Get list of open PRs
        local prs=($(gh pr list --state open --json number --jq '.[].number' 2>/dev/null))
        
        if [[ ${#prs[@]} -eq 0 ]]; then
            echo "No open PRs found."
            return 0
        fi
        
        echo "Found ${#prs[@]} open PRs: ${prs[*]}"
        echo ""
        
        for pr in "${prs[@]}"; do
            echo "🔄 Merging PR #$pr..."
            
            # Check if PR has conflicts
            if gh pr view "$pr" --json mergeable --jq '.mergeable' | grep -q "false"; then
                echo "⚠️  PR #$pr has conflicts. Resolving..."
                
                # Try to resolve conflicts automatically
                gh pr checkout "$pr" 2>/dev/null || continue
                
                # Merge main into the PR branch
                git merge main --no-edit 2>/dev/null || {
                    echo "❌ Could not merge main into PR #$pr"
                    git checkout main
                    continue
                }
                
                # Push the resolved changes
                git push origin HEAD 2>/dev/null || {
                    echo "❌ Could not push resolved changes for PR #$pr"
                    git checkout main
                    continue
                }
                
                git checkout main
            fi
            
            # Merge the PR
            if gh pr merge "$pr" --merge --delete-branch 2>/dev/null; then
                echo "✅ Successfully merged PR #$pr"
            else
                echo "❌ Failed to merge PR #$pr"
            fi
            echo ""
        done
    else
        echo "GitHub CLI not available. Please merge PRs manually at:"
        echo "https://github.com/Zion-Holdings/zion.app/pulls"
        echo ""
    fi
}

# Function to verify the final state
verify_merge_success() {
    echo "🔍 Verifying merge success..."
    echo ""
    
    # Check git status
    echo "Git status:"
    git status --porcelain
    echo ""
    
    # Check for remaining conflicts
    local remaining_conflicts=$(find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.sh" -o -name "*.cjs" -o -name "*.xml" \) -exec grep -l "
    
    if [[ $remaining_conflicts -eq 0 ]]; then
        echo "✅ No remaining merge conflicts found"
    else
        echo "⚠️  $remaining_conflicts files still have conflicts"
    fi
    
    # Test build if possible
    if [[ -f "package.json" ]]; then
        echo ""
        echo "🔨 Testing build process..."
        if npm run build 2>/dev/null; then
            echo "✅ Build successful"
        else
            echo "❌ Build failed"
        fi
    fi
    
    echo ""
}

# Main execution
main() {
    echo "Starting complete merge resolution process..."
    echo ""
    
    # Step 1: Resolve all merge conflicts
    echo "Step 1: Resolving merge conflicts"
    echo "--------------------------------"
    resolve_all_conflicts
    
    # Step 2: Stage and commit resolved files
    echo "Step 2: Staging resolved files"
    echo "-----------------------------"
    git add .
    git commit -m "Resolve all merge conflicts and prepare for PR merge" || echo "No changes to commit"
    echo ""
    
    # Step 3: Check GitHub for open PRs
    echo "Step 3: Checking GitHub for open PRs"
    echo "-----------------------------------"
    check_github_prs
    
    # Step 4: Merge open PRs
    echo "Step 4: Merging open PRs"
    echo "-----------------------"
    merge_open_prs
    
    # Step 5: Verify success
    echo "Step 5: Verifying merge success"
    echo "------------------------------"
    verify_merge_success
    
    echo ""
    echo "🎉 Complete merge resolution process finished!"
    echo ""
    echo "Next steps:"
    echo "1. Review the changes"
    echo "2. Test the application"
    echo "3. Push to main branch if needed"
    echo "4. Continue with improvements"
}

# Run the main function
main "$@"