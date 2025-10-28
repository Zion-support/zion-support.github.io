#!/bin/bash

# Close PRs one by one
set -e

echo "Starting to close PRs..."

# Get PR numbers directly
pr_numbers=$(gh pr list --state open --json number --jq '.[].number' | head -20)

for pr_num in $pr_numbers; do
    echo "Closing PR #$pr_num..."
    
    if gh pr close $pr_num --comment "Closing duplicate PR - conflicts resolved in main branch" 2>/dev/null; then
        echo "✅ Successfully closed PR #$pr_num"
    else
        echo "❌ Failed to close PR #$pr_num"
    fi
    
    sleep 0.5
done

echo "Done closing PRs!"