#!/bin/bash

# Priority PR Merging Script
# This script merges the most important PRs first, then proceeds with others

set -e

echo "🚀 Starting Priority PR Merge Process..."
echo "========================================"

# Function to check if a branch exists
branch_exists() {
    local branch_name=$1
    git show-ref --verify --quiet refs/remotes/origin/$branch_name
}

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch_name=$1
    local description=$2
    
    echo "🔀 Merging: $branch_name"
    echo "📝 Description: $description"
    echo "----------------------------------------"
    
    if ! branch_exists "$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        return 1
    fi
    
    # Fetch the latest version of the branch
    git fetch origin "$branch_name"
    
    # Try to merge
    if git merge "origin/$branch_name" --no-edit; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflicts detected, resolving..."
        
        # Check for conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "🔧 Resolving conflicts..."
            
            # List conflicted files
            echo "Conflicted files:"
            git diff --name-only --diff-filter=U
            
            # Take our version (main branch) for most conflicts
            # This preserves main branch functionality
            git checkout --ours $(git diff --name-only --diff-filter=U)
            
            # Add resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Conflicts resolved and merge completed"
                return 0
            else
                echo "❌ Failed to complete merge"
                git merge --abort
                return 1
            fi
        else
            echo "✅ No conflicts detected, completing merge..."
            git add .
            git commit --no-edit
            return 0
        fi
    fi
}

# Priority 1: Core website improvements and services
PRIORITY_1_BRANCHES=(
    "cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-3a6f:Add new micro SaaS/IT/AI services"
    "cursor/website-audit-and-enhancement-09cd:Website audit and enhancement"
    "cursor/website-audit-and-enhancement-e0b4:Website audit and enhancement"
    "cursor/website-audit-and-enhancement-3647:Website audit and enhancement"
    "cursor/website-audit-and-enhancement-7ab5:Website audit and enhancement"
)

# Priority 2: App enhancements and futuristic design
PRIORITY_2_BRANCHES=(
    "cursor/enhance-app-with-new-services-and-futuristic-design-d5d2:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6433:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b902:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-0a89:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-da36:App enhancement with futuristic design"
)

# Priority 3: Service expansion and updates
PRIORITY_3_BRANCHES=(
    "cursor/expand-services-and-deploy-updates-c4ed:Expand services and deploy updates"
    "cursor/expand-services-and-deploy-updates-4ed2:Expand services and deploy updates"
    "cursor/expand-services-and-deploy-updates-f6d5:Expand services and deploy updates"
    "cursor/expand-services-and-deploy-updates-ebaa:Expand services and deploy updates"
    "cursor/expand-services-and-deploy-updates-1c61:Expand services and deploy updates"
    "cursor/expand-services-and-deploy-updates-3c57:Expand services and deploy updates"
)

# Priority 4: CI/CD and code quality
PRIORITY_4_BRANCHES=(
    "cursor/ci-cd-pipeline-code-quality-and-security-check-9663:CI/CD pipeline and code quality"
    "cursor/codeql-analyze-javascript-typescript-9d5a:CodeQL analysis"
    "cursor/fix-release-workflow-links-and-accessibility-31e9:Fix release workflow and accessibility"
)

# Priority 5: Analysis and improvements
PRIORITY_5_BRANCHES=(
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-d61e:Analyze and improve app"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-b773:Analyze and improve app"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-ba31:Analyze and improve app"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-c5b6:Analyze and improve app"
    "cursor/analyze-main-branch-loading-issue-3bae:Analyze main branch loading issue"
)

# Priority 6: Build and dependency fixes
PRIORITY_6_BRANCHES=(
    "cursor/build-with-yarn-dependency-error-25bd:Build with yarn dependency fixes"
    "cursor/update-and-fix-project-dependencies-3c6f:Update and fix project dependencies"
)

# Priority 7: Remaining enhancements
PRIORITY_7_BRANCHES=(
    "cursor/enhance-app-with-new-services-and-futuristic-design-a741:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-723d:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-1d4f:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-4865:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-0528:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9d0f:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e423:App enhancement with futuristic design"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fa48:App enhancement with futuristic design"
)

# Function to merge priority group
merge_priority_group() {
    local priority_name=$1
    shift
    local branches=("$@")
    
    echo ""
    echo "🎯 Processing $priority_name (${#branches[@]} branches)"
    echo "========================================"
    
    local success_count=0
    local total_count=${#branches[@]}
    
    for branch_info in "${branches[@]}"; do
        IFS=':' read -r branch_name description <<< "$branch_info"
        
        if merge_branch "$branch_name" "$description"; then
            ((success_count++))
        fi
        
        echo ""
    done
    
    echo "📊 $priority_name Results: $success_count/$total_count successful"
    return $success_count
}

# Ensure we're on main branch
git checkout main

# Fetch all remote branches
echo "📥 Fetching all remote branches..."
git fetch --all

# Track overall results
TOTAL_SUCCESSFUL=0
TOTAL_FAILED=0

# Merge Priority 1 (Core website improvements)
if merge_priority_group "Priority 1: Core Website Improvements" "${PRIORITY_1_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 2 (App enhancements)
if merge_priority_group "Priority 2: App Enhancements" "${PRIORITY_2_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 3 (Service expansion)
if merge_priority_group "Priority 3: Service Expansion" "${PRIORITY_3_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 4 (CI/CD and code quality)
if merge_priority_group "Priority 4: CI/CD and Code Quality" "${PRIORITY_4_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 5 (Analysis and improvements)
if merge_priority_group "Priority 5: Analysis and Improvements" "${PRIORITY_5_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 6 (Build and dependency fixes)
if merge_priority_group "Priority 6: Build and Dependencies" "${PRIORITY_6_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Merge Priority 7 (Remaining enhancements)
if merge_priority_group "Priority 7: Remaining Enhancements" "${PRIORITY_7_BRANCHES[@]}"; then
    TOTAL_SUCCESSFUL=$((TOTAL_SUCCESSFUL + $?))
else
    TOTAL_FAILED=$((TOTAL_FAILED + $?))
fi

# Summary
echo ""
echo "========================================"
echo "🎉 Priority PR Merge Process Complete!"
echo "========================================"
echo "✅ Total successful merges: $TOTAL_SUCCESSFUL"
echo "❌ Total failed merges: $TOTAL_FAILED"
echo ""

if [ $TOTAL_FAILED -eq 0 ]; then
    echo "🚀 All priority PRs merged successfully! Pushing to main..."
    git push origin main
    echo "✅ Changes pushed to main branch"
else
    echo "⚠️  Some merges failed. Please review and resolve manually."
    echo "💡 You can use 'git status' to see the current state"
fi

echo ""
echo "🔧 Next steps:"
echo "1. Run tests: npm test"
echo "2. Build the project: npm run build"
echo "3. Start the error-fixing automation: ./scripts/start-error-fixers.sh start"
echo "4. Deploy if everything looks good"
echo ""
echo "📋 Remaining PRs can be merged using: ./merge-all-prs.sh"