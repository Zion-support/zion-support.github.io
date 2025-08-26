#!/bin/bash

# Extract PR numbers and branch names from GitHub API response
echo "Extracting PR information..."

# Extract PR numbers and branch names
echo "PR # | Branch Name"
echo "------|-------------"

# Use awk to parse the JSON and extract PR number and branch name
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && ref != "main") {
        printf "%-6s | %s\n", pr_number, ref
    }
}
' prs.json | head -20

echo ""
echo "Total PRs found:"
grep -c '"number":' prs.json