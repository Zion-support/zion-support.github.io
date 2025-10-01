#!/bin/bash
# manage_prs.sh - Automated PR management and conflict resolution

set -e

echo "=== Automated PR Management ==="
cd /workspace

# Configuration
BATCH_SIZE=5
MAX_BRANCHES=50
SLEEP_BETWEEN_BATCHES=10

# Statistics
processed=0
successful=0
failed=0
conflicts_resolved=0

# Function to safely merge a branch
merge_branch() {
    local branch=$1
    local branch_name=$(basename $branch)
    
    echo "Processing branch: $branch_name"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_name; then
        git checkout $branch_name
        git pull origin $branch_name
    else
        git fetch origin $branch_name:$branch_name
        git checkout $branch_name
    fi
    
    # Try to merge with main
    if git merge origin/main --no-commit >/dev/null 2>&1; then
        echo "  ✅ No conflicts in $branch_name"
        git commit -m "Merge main into $branch_name" >/dev/null 2>&1
        git push origin $branch_name >/dev/null 2>&1
        return 0
    else
        echo "  ❌ Conflicts in $branch_name"
        git merge --abort >/dev/null 2>&1
        return 1
    fi
}

# Function to resolve conflicts automatically where possible
resolve_conflicts() {
    local branch=$1
    local branch_name=$(basename $branch)
    
    echo "  Attempting to resolve conflicts in $branch_name"
    
    git checkout $branch_name >/dev/null 2>&1
    
    # Try merge again
    if git merge origin/main --no-commit >/dev/null 2>&1; then
        git commit -m "Merge main into $branch_name" >/dev/null 2>&1
        git push origin $branch_name >/dev/null 2>&1
        echo "  ✅ Conflicts resolved in $branch_name"
        return 0
    fi
    
    # List conflicted files
    conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
    
    if [ -n "$conflicted_files" ]; then
        echo "  Conflicted files: $conflicted_files"
        
        # Try automatic resolution strategies
        for file in $conflicted_files; do
            echo "    Resolving conflicts in $file"
            
            # For package.json, prefer main branch version
            if [[ $file == "package.json" ]]; then
                git checkout --theirs $file >/dev/null 2>&1
                git add $file >/dev/null 2>&1
            # For TypeScript files, prefer main branch version
            elif [[ $file == *.tsx ]] || [[ $file == *.ts ]]; then
                git checkout --theirs $file >/dev/null 2>&1
                git add $file >/dev/null 2>&1
            # For configuration files, prefer main branch version
            elif [[ $file == *.json ]] || [[ $file == *.toml ]] || [[ $file == *.yaml ]] || [[ $file == *.yml ]]; then
                git checkout --theirs $file >/dev/null 2>&1
                git add $file >/dev/null 2>&1
            else
                # For other files, prefer main branch version
                git checkout --theirs $file >/dev/null 2>&1
                git add $file >/dev/null 2>&1
            fi
        done
        
        # Complete merge if all conflicts resolved
        if git diff --check >/dev/null 2>&1; then
            git commit -m "Resolved merge conflicts in $branch_name" >/dev/null 2>&1
            git push origin $branch_name >/dev/null 2>&1
            echo "  ✅ Conflicts resolved in $branch_name"
            return 0
        else
            git merge --abort >/dev/null 2>&1
            echo "  ❌ Could not auto-resolve conflicts in $branch_name"
            return 1
        fi
    else
        git merge --abort >/dev/null 2>&1
        echo "  ❌ No conflicted files found in $branch_name"
        return 1
    fi
}

# Function to process branches in batches
process_branches() {
    local branches=($(git branch -r | grep -v HEAD | grep -v main | head -$MAX_BRANCHES))
    local total=${#branches[@]}
    
    echo "Processing $total branches in batches of $BATCH_SIZE..."
    
    for i in "${!branches[@]}"; do
        local branch=${branches[$i]}
        local branch_name=$(basename $branch)
        
        echo "[$((i+1))/$total] Processing $branch_name"
        
        # Skip if branch is already merged
        if git merge-base --is-ancestor $branch origin/main 2>/dev/null; then
            echo "  ⏭️ Branch $branch_name is already merged, skipping"
            ((processed++))
            continue
        fi
        
        # Try to merge
        if merge_branch $branch; then
            ((successful++))
            echo "  ✅ Successfully processed $branch_name"
        else
            # Try to resolve conflicts
            if resolve_conflicts $branch; then
                ((successful++))
                ((conflicts_resolved++))
                echo "  ✅ Successfully resolved conflicts in $branch_name"
            else
                ((failed++))
                echo "  ❌ Failed to process $branch_name"
            fi
        fi
        
        ((processed++))
        
        # Batch processing with sleep
        if [ $((processed % BATCH_SIZE)) -eq 0 ] && [ $processed -lt $total ]; then
            echo "  💤 Processed $processed branches, sleeping for ${SLEEP_BETWEEN_BATCHES}s..."
            sleep $SLEEP_BETWEEN_BATCHES
        fi
        
        # Return to main branch
        git checkout main >/dev/null 2>&1
    done
}

# Function to clean up merged branches
cleanup_merged_branches() {
    echo "=== Cleaning up merged branches ==="
    
    local merged_branches=($(git branch -r --merged origin/main | grep -v HEAD | grep -v main))
    
    if [ ${#merged_branches[@]} -gt 0 ]; then
        echo "Found ${#merged_branches[@]} merged branches to clean up"
        
        for branch in "${merged_branches[@]}"; do
            local branch_name=$(basename $branch)
            echo "Cleaning up merged branch: $branch_name"
            
            # Delete remote branch (if we have permission)
            if git push origin --delete $branch_name >/dev/null 2>&1; then
                echo "  ✅ Deleted remote branch $branch_name"
            else
                echo "  ⚠️ Could not delete remote branch $branch_name (permission or already deleted)"
            fi
            
            # Delete local branch if it exists
            if git show-ref --verify --quiet refs/heads/$branch_name; then
                git branch -D $branch_name >/dev/null 2>&1
                echo "  ✅ Deleted local branch $branch_name"
            fi
        done
    else
        echo "No merged branches found to clean up"
    fi
}

# Main execution function
main() {
    echo "Starting PR management process..."
    
    # Ensure we're on main and up to date
    git checkout main
    git pull origin main
    
    # Start processing
    process_branches
    
    # Clean up merged branches
    cleanup_merged_branches
    
    # Final statistics
    echo "=== Final Results ==="
    echo "Total processed: $processed"
    echo "Successful: $successful"
    echo "Failed: $failed"
    echo "Conflicts resolved: $conflicts_resolved"
    echo "Success rate: $(( (successful * 100) / processed ))%"
    
    if [ $failed -gt 0 ]; then
        echo "⚠️ $failed branches require manual intervention"
        echo "Review failed branches and resolve conflicts manually"
    fi
    
    echo "=== PR Management Complete ==="
}

# Error handling
trap 'echo "Error occurred. Rolling back to main branch..."; git checkout main; exit 1' ERR

# Run main function
main "$@"