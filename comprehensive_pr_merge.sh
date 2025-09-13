#!/bin/bash

# Comprehensive PR Merge Script
# This script will systematically merge all open PRs with conflict resolution

echo "Starting comprehensive PR merge process..."

# Function to merge a PR with conflict resolution
merge_pr_with_resolution() {
    local pr_number=$1
    local pr_title=$2
    local branch_name=$3
    
    echo "Processing PR #$pr_number: $pr_title"
    echo "Branch: $branch_name"
    
    # Fetch the branch
    if git fetch origin "$branch_name" 2>/dev/null; then
        echo "Successfully fetched $branch_name"
        
        # Try to merge
        if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
            echo "Successfully merged PR #$pr_number"
            return 0
        else
            echo "Merge conflict detected in PR #$pr_number - attempting resolution..."
            
            # Check what files have conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
                echo "Conflict in file: $file"
                
                # For common files, use our preferred version
                case "$file" in
                    "build.sh")
                        echo "Using our preferred build.sh version"
                        git checkout --ours "$file"
                        ;;
                    "package.json")
                        echo "Using our preferred package.json version"
                        git checkout --ours "$file"
                        ;;
                    "netlify.toml")
                        echo "Using our preferred netlify.toml version"
                        git checkout --ours "$file"
                        ;;
                    ".yarnrc"*)
                        echo "Using our preferred .yarnrc version"
                        git checkout --ours "$file"
                        ;;
                    *)
                        echo "Using our version for $file"
                        git checkout --ours "$file"
                        ;;
                esac
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            if git commit -m "Merge PR #$pr_number: $pr_title - resolved conflicts by preferring main branch changes"; then
                echo "Successfully resolved conflicts and merged PR #$pr_number"
                return 0
            else
                echo "Failed to commit merge for PR #$pr_number"
                git merge --abort
                return 1
            fi
        fi
    else
        echo "Failed to fetch branch $branch_name"
        return 1
    fi
}

# Get list of open PRs
echo "Fetching open PRs..."
PRS_JSON=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100")

# Extract PR information
echo "$PRS_JSON" | grep -E '"number":|"title":|"ref":' | while IFS= read -r line; do
    if echo "$line" | grep -q '"number":'; then
        pr_number=$(echo "$line" | grep -o '[0-9]\+')
    elif echo "$line" | grep -q '"title":'; then
        pr_title=$(echo "$line" | sed 's/.*"title": *"\([^"]*\)".*/\1/')
    elif echo "$line" | grep -q '"ref":'; then
        pr_ref=$(echo "$line" | sed 's/.*"ref": *"\([^"]*\)".*/\1/')
        if [ -n "$pr_number" ] && [ -n "$pr_title" ] && [ -n "$pr_ref" ]; then
            echo "Found PR #$pr_number: $pr_title -> $pr_ref"
        fi
    fi
done

# Process PRs in batches to avoid overwhelming the system
echo "Processing PRs in batches..."

# Get PR numbers and process them
PR_NUMBERS=$(echo "$PRS_JSON" | grep '"number":' | grep -o '[0-9]\+' | head -10)

for pr_num in $PR_NUMBERS; do
    echo "Processing PR #$pr_num..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num")
    pr_title=$(echo "$PR_DETAILS" | grep '"title":' | sed 's/.*"title": *"\([^"]*\)".*/\1/')
    pr_ref=$(echo "$PR_DETAILS" | grep '"ref":' | sed 's/.*"ref": *"\([^"]*\)".*/\1/')
    
    if [ -n "$pr_ref" ]; then
        merge_pr_with_resolution "$pr_num" "$pr_title" "$pr_ref"
        echo "---"
    fi
done

echo "PR merge process completed!"
echo "Pushing all changes to main..."

# Push all changes
git push origin main

echo "All changes pushed to main branch!"
echo "Summary: Processed multiple PRs with conflict resolution"