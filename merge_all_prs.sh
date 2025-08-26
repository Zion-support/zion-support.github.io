#!/bin/bash

echo "Starting automated PR merge process..."
echo "====================================="

# Get the list of open PRs
echo "Fetching open pull requests..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR numbers and branch names using awk
echo "Extracting PR information..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    printf "Processing PR #%s...\n", number
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url") {
        printf "  Branch: %s\n", ref
        
        # Fetch the branch
        printf "  Fetching branch...\n"
        cmd = "git fetch origin " ref " 2>/dev/null"
        system(cmd)
        
        if (system("git fetch origin " ref " 2>/dev/null") == 0) {
            printf "  Attempting to merge...\n"
            
            # Try to merge
            merge_cmd = "git merge origin/" ref " --no-edit 2>/dev/null"
            if (system(merge_cmd) == 0) {
                printf "  ✓ Successfully merged PR #%s\n", number
                printf "  Committing merge...\n"
                commit_cmd = "git commit -m \"Merge PR #" number ": " ref "\" 2>/dev/null"
                system(commit_cmd)
                printf "  ✓ Merge committed\n"
            } else {
                printf "  ✗ Merge failed for PR #%s\n", number
                printf "  Aborting merge and continuing...\n"
                system("git merge --abort 2>/dev/null")
            }
        } else {
            printf "  ✗ Failed to fetch branch %s\n", ref
        }
        
        printf "  ---\n"
    }
}
' prs.json

echo "All PRs processed. Pushing changes to main branch..."
git push origin main --force

echo "Process complete!"