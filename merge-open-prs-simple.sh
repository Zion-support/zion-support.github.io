#!/bin/bash
set -euo pipefail

echo "=== Starting PR merge process ==="

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get list of recent branches that might be PRs
echo "Checking for branches to merge..."

# Look for branches that are not main, not backup branches, and not already merged
branches_to_check=(
    "origin/feat/more-services-and-futuristic-ui"
    "origin/feat/netlify-automations-futuristic"
    "origin/feat/new-autonomous-automations"
    "origin/feat/new-cloud-automations"
    "origin/feat/new-services-ads"
    "origin/feat/q2-2025-services"
    "origin/feat/q2-2035-services"
    "origin/feat/q3-services"
    "origin/feat/q4-2025-services"
    "origin/feat/q4-2026-services"
    "origin/feat/quote-wizard-service-fetching"
    "origin/feat/real-2032-expansions"
    "origin/feat/rss-automation"
    "origin/feat/seo-a11y-document"
    "origin/feat/seo-security-manifest"
    "origin/feat/service-expansion-2025"
    "origin/feat/service-expansion-2025-08-22"
    "origin/feat/service-expansion-2025-v2"
    "origin/feat/service-expansion-ads-pricing"
    "origin/feat/services-2025"
    "origin/feat/services-2025-futurize"
    "origin/feat/services-2027q3"
    "origin/feat/services-2029Q1"
    "origin/feat/services-2031-q1"
    "origin/feat/services-2034"
    "origin/feat/services-ads-2029"
    "origin/feat/services-ads-2029q1"
    "origin/feat/services-ads-futuristic-ui"
    "origin/feat/services-and-design-updates"
    "origin/feat/services-and-fixes"
    "origin/feat/services-aug-2025"
    "origin/feat/services-aug-2031"
    "origin/feat/services-design-enhancements"
    "origin/feat/services-design-futuristic"
    "origin/feat/services-expansion"
    "origin/feat/services-expansion-2025"
    "origin/feat/services-expansion-2032"
    "origin/feat/services-expansion-advertising-ui"
    "origin/feat/services-expansion-aug-2025"
    "origin/feat/services-expansion-aug2025"
    "origin/feat/services-expansion-aug22"
    "origin/feat/services-expansion-futuristic"
    "origin/feat/services-expansion-futuristic-ui"
    "origin/feat/services-expansion-futuristic-ui-aug22"
    "origin/feat/services-expansion-futurize"
    "origin/feat/services-expansion-ux"
    "origin/feat/services-expansion-v2"
    "origin/feat/services-expansion-zg"
    "origin/feat/services-futuristic"
    "origin/feat/services-futuristic-enhancements"
    "origin/feat/services-futuristic-ui"
    "origin/feat/services-futuristic-upgrade"
    "origin/feat/services-futurize"
    "origin/feat/services-marketing-ui"
    "origin/feat/services-nav-futurize"
    "origin/feat/services-q1-2036"
    "origin/feat/services-q2-2026"
    "origin/feat/services-q2-2030"
    "origin/feat/services-q3-2025"
    "origin/feat/services-q3-2027"
    "origin/feat/services-q4-2025"
    "origin/feat/services-site-improvements"
    "origin/feat/services-site-updates"
    "origin/feat/services-ui-2025"
    "origin/feat/services-ui-enhancements"
    "origin/feat/services-ui-enhancements-2025-08-22"
    "origin/feat/services-ui-enhancements-aug21"
    "origin/feat/services-ui-expansion"
    "origin/feat/services-ui-futuristic"
    "origin/feat/services-ui-futurize-2025-08-22"
    "origin/feat/services-ui-improvements"
    "origin/feat/services-ui-seo"
    "origin/feat/services-ui-updates"
    "origin/feat/services-ui-upgrades"
    "origin/feat/services-ui-upgrades-2025-08-22"
    "origin/feat/services-upgrade-2025"
    "origin/feat/site-improvements"
    "origin/feat/static-export-fixes-seo"
    "origin/feat/trust-reputation-engine"
    "origin/feat/verified-services-futuristic-ui"
)

merged_count=0
failed_count=0

for branch in "${branches_to_check[@]}"; do
    echo "Checking branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "$branch" main; then
        echo "  Branch $branch is already merged, skipping..."
        continue
    fi
    
    echo "  Attempting to merge $branch..."
    
    # Create a temporary branch for the merge
    temp_branch="temp-merge-$(basename "$branch")"
    git checkout -B "$temp_branch" main
    
    # Attempt to merge
    if git merge --no-ff -m "Merge $branch into main" "$branch" 2>/dev/null; then
        echo "  ✓ Successfully merged $branch"
        
        # Merge into main
        git checkout main
        if git merge --no-ff -m "Merge $branch into main" "$temp_branch"; then
            echo "  ✓ Integrated $branch into main"
            merged_count=$((merged_count + 1))
        else
            echo "  ✗ Failed to integrate $branch into main"
            failed_count=$((failed_count + 1))
        fi
        
        # Clean up temp branch
        git branch -D "$temp_branch"
    else
        echo "  ✗ Failed to merge $branch (conflicts or other issues)"
        git merge --abort 2>/dev/null || true
        git checkout main
        git branch -D "$temp_branch" 2>/dev/null || true
        failed_count=$((failed_count + 1))
    fi
done

echo "=== Merge Summary ==="
echo "Successfully merged: $merged_count branches"
echo "Failed to merge: $failed_count branches"

if [ $merged_count -gt 0 ]; then
    echo "Pushing changes to origin..."
    git push origin main
    echo "Changes pushed to origin"
fi

echo "PR merge process completed!"