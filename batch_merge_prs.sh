#!/bin/bash

# Efficient script to merge all open PRs in batches
set -e

echo "Starting batch PR merge process..."

# Function to extract PR numbers from open_prs.json
extract_pr_numbers() {
    grep -o '"number": [0-9]*' open_prs.json | grep -o '[0-9]*' | sort -n
}

# Function to process a batch of PRs
process_batch() {
    local pr_numbers=("$@")
    local batch_size=${#pr_numbers[@]}
    echo "Processing batch of $batch_size PRs..."
    
    for pr_number in "${pr_numbers[@]}"; do
        echo "Processing PR #$pr_number..."
        
        # Fetch the PR branch
        if git fetch origin "pull/$pr_number/head:pr-$pr_number" 2>/dev/null; then
            # Try to merge
            if git merge "pr-$pr_number" --no-ff -m "Merge PR #$pr_number" 2>/dev/null; then
                echo "✅ Successfully merged PR #$pr_number"
            else
                echo "⚠️  Merge conflict or already up to date for PR #$pr_number"
                # Reset to clean state
                git reset --hard HEAD
            fi
            
            # Clean up the PR branch
            git branch -D "pr-$pr_number" 2>/dev/null || true
        else
            echo "❌ Failed to fetch PR #$pr_number"
        fi
    done
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
    
    # Process in batches of 10
    batch_size=10
    for ((i=0; i<${#pr_numbers[@]}; i+=batch_size)); do
        batch=("${pr_numbers[@]:i:batch_size}")
        echo "Processing batch $((i/batch_size + 1))..."
        process_batch "${batch[@]}"
        echo "Batch completed. Pausing for 2 seconds..."
        sleep 2
    done
    
    echo "All PRs processed!"
    echo "Pushing changes to main branch..."
    git push origin main
}

# Run the main function
main "$@"