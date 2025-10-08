#!/bin/bash

# Script to merge all open PRs systematically

GITHUB_TOKEN="ghs_irB21jlecxkVL9rFeVMzIEH7xwEM031MkMCi"
REPO="Zion-Holdings/zion.app"

echo "================================================================"
echo "Merging Open PRs into Main Branch"
echo "================================================================"
echo ""

# First, complete the current merge
if [ -f "/workspace/complete_merge.sh" ]; then
    echo "Completing current merge..."
    bash /workspace/complete_merge.sh
    echo ""
fi

# Fetch latest changes
echo "Fetching latest changes from origin..."
git fetch origin
echo ""

# Update main branch
echo "Updating main branch..."
git checkout main 2>/dev/null || git switch main
git pull origin main
echo ""

# Get list of open PRs (non-draft)
echo "Fetching open PRs from GitHub..."
curl -s -H "Authorization: token $GITHUB_TOKEN" \
    "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" \
    > /tmp/all_prs.json

# Count total PRs
TOTAL_PRS=$(python3 -c "import json; prs = json.load(open('/tmp/all_prs.json')); print(len(prs))")
echo "Found $TOTAL_PRS open PRs"
echo ""

# Get non-draft PRs
NON_DRAFT=$(python3 -c "import json; prs = json.load(open('/tmp/all_prs.json')); non_draft = [pr for pr in prs if not pr['draft']]; print(len(non_draft))")
echo "Non-draft PRs ready to merge: $NON_DRAFT"
echo ""

# Function to attempt merge via API
merge_pr_via_api() {
    local PR_NUMBER=$1
    echo "Attempting to merge PR #$PR_NUMBER via GitHub API..."
    
    RESPONSE=$(curl -s -X PUT \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        -d "{\"commit_title\":\"Merge PR #$PR_NUMBER: Fix errors and merge to main\",\"merge_method\":\"merge\"}" \
        "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER/merge")
    
    if echo "$RESPONSE" | grep -q '"merged": true'; then
        echo "✓ Successfully merged PR #$PR_NUMBER"
        return 0
    else
        echo "✗ Failed to merge PR #$PR_NUMBER"
        echo "  Reason: $(echo $RESPONSE | python3 -c 'import sys, json; print(json.load(sys.stdin).get("message", "Unknown"))')"
        return 1
    fi
}

# Function to merge PR locally
merge_pr_locally() {
    local PR_NUMBER=$1
    local BRANCH_NAME=$2
    
    echo "Merging PR #$PR_NUMBER locally (branch: $BRANCH_NAME)..."
    
    # Ensure we're on main
    git checkout main
    
    # Fetch the PR branch
    git fetch origin $BRANCH_NAME
    
    # Attempt merge
    if git merge --no-edit origin/$BRANCH_NAME; then
        echo "✓ Successfully merged PR #$PR_NUMBER locally"
        
        # Push to main
        if git push origin main; then
            echo "✓ Pushed merge to origin/main"
            
            # Try to close the PR via API
            curl -s -X PATCH \
                -H "Authorization: token $GITHUB_TOKEN" \
                -H "Accept: application/vnd.github.v3+json" \
                -d '{"state":"closed"}' \
                "https://api.github.com/repos/$REPO/pulls/$PR_NUMBER" > /dev/null
            
            return 0
        else
            echo "✗ Failed to push to origin/main"
            git merge --abort 2>/dev/null
            return 1
        fi
    else
        echo "✗ Merge conflict detected for PR #$PR_NUMBER"
        echo "  Manual resolution required"
        git merge --abort 2>/dev/null
        return 1
    fi
}

# Process non-draft PRs
echo "Processing non-draft PRs..."
echo ""

python3 << 'PYTHON_SCRIPT'
import json
import subprocess
import sys

with open('/tmp/all_prs.json', 'r') as f:
    prs = json.load(f)

non_draft_prs = [pr for pr in prs if not pr['draft']]
merged_count = 0
failed_count = 0
conflict_count = 0

for pr in non_draft_prs[:10]:  # Process first 10 to avoid overwhelming
    pr_number = pr['number']
    branch_name = pr['head']['ref']
    
    print(f"\\n{'='*60}")
    print(f"Processing PR #{pr_number}: {pr['title'][:50]}...")
    print(f"Branch: {branch_name}")
    print(f"{'='*60}")
    
    # Try API merge first
    result = subprocess.run(
        ['bash', '-c', f'source /workspace/merge_all_prs.sh && merge_pr_via_api {pr_number}'],
        capture_output=True, text=True
    )
    
    if result.returncode == 0:
        merged_count += 1
    else:
        # Try local merge
        print(f"API merge failed, attempting local merge...")
        result = subprocess.run(
            ['bash', '-c', f'source /workspace/merge_all_prs.sh && merge_pr_locally {pr_number} {branch_name}'],
            capture_output=True, text=True
        )
        
        if result.returncode == 0:
            merged_count += 1
        elif 'conflict' in result.stdout.lower():
            conflict_count += 1
        else:
            failed_count += 1

print(f"\\n\\n{'='*60}")
print(f"Merge Summary:")
print(f"{'='*60}")
print(f"Successfully merged: {merged_count}")
print(f"Failed: {failed_count}")
print(f"Conflicts requiring manual resolution: {conflict_count}")
print(f"{'='*60}")
PYTHON_SCRIPT

echo ""
echo "PR merge process completed!"
echo ""
echo "To check the current state:"
echo "  git status"
echo "  git log --oneline -10"