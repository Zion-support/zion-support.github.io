#!/bin/bash

# PR Merge Batch Script
echo "Starting PR merge batch at $(date)" > /workspace/batch_log.txt

# Function to merge PR
merge_pr() {
    local pr_num=$1
    echo "Merging PR #$pr_num..." >> /workspace/batch_log.txt
    
    curl -s -X PUT \
        -H "Authorization: token ghs_2CijlF4cOrlTIwzwz3nvWrTnWL9uZC0Q24TL" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num/merge" \
        -d "{\"commit_title\":\"Merge PR #$pr_num\",\"merge_method\":\"merge\"}" \
        >> /workspace/merge_$pr_num.json 2>&1
    
    if grep -q '"merged":true' /workspace/merge_$pr_num.json; then
        echo "✅ PR #$pr_num merged successfully" >> /workspace/batch_log.txt
    else
        echo "❌ PR #$pr_num merge failed" >> /workspace/batch_log.txt
    fi
}

# Merge the PRs
merge_pr 12994
sleep 2
merge_pr 12993

echo "Batch completed at $(date)" >> /workspace/batch_log.txt