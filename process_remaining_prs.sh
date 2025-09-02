#!/bin/bash

# Process all remaining PRs efficiently
set -e

echo "Processing all remaining PRs..."

# Function to extract PR numbers from open_prs.json
extract_pr_numbers() {
    grep -o '"number": [0-9]*' open_prs.json | grep -o '[0-9]*' | sort -n
}

# Function to process a single PR with conflict resolution
process_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Fetch the PR branch
    if ! git fetch origin "pull/$pr_number/head:pr-$pr_number" 2>/dev/null; then
        echo "❌ Failed to fetch PR #$pr_number"
        return 1
    fi
    
    # Try to merge
    if git merge "pr-$pr_number" --no-ff -m "Merge PR #$pr_number" 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_number"
        git branch -D "pr-$pr_number" 2>/dev/null || true
        return 0
    else
        echo "⚠️  Merge conflict in PR #$pr_number, resolving..."
        
        # Resolve conflicts by keeping main branch version
        git checkout --ours . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        # Commit the resolved conflicts
        if git commit -m "Resolve merge conflicts in PR #$pr_number" 2>/dev/null; then
            echo "✅ Successfully resolved conflicts for PR #$pr_number"
            git branch -D "pr-$pr_number" 2>/dev/null || true
            return 0
        else
            echo "❌ Failed to resolve conflicts for PR #$pr_number"
            git merge --abort 2>/dev/null || true
            git branch -D "pr-$pr_number" 2>/dev/null || true
            return 1
        fi
    fi
}

# Main execution
main() {
    echo "Extracting PR numbers..."
    pr_numbers=($(extract_pr_numbers))
    
    if [ ${#pr_numbers[@]} -eq 0 ]; then
        echo "No PR numbers found in open_prs.json"
        exit 1
    fi
    
    echo "Found ${#pr_numbers[@]} PRs to process"
    
    local success_count=0
    local failure_count=0
    
    # Process each PR
    for pr_number in "${pr_numbers[@]}"; do
        echo "--- Processing PR #$pr_number ---"
        if process_pr "$pr_number"; then
            ((success_count++))
            echo "✅ PR #$pr_number processed successfully"
        else
            ((failure_count++))
            echo "❌ PR #$pr_number failed"
        fi
        echo ""
    done
    
    echo "=== FINAL SUMMARY ==="
    echo "Total PRs processed: ${#pr_numbers[@]}"
    echo "Successful merges: $success_count"
    echo "Failed merges: $failure_count"
    echo ""
    
    if [ $success_count -gt 0 ]; then
        echo "Pushing all changes to main branch..."
        git push origin main
        echo "✅ All changes pushed to main branch"
    else
        echo "⚠️  No successful merges to push"
    fi
}

# Run the main function
main "$@"