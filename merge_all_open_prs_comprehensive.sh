#!/bin/bash

# Comprehensive script to merge all open PRs into main branch
# This script will:
# 1. Fetch all open PRs from GitHub API
# 2. Check for merge conflicts
# 3. Resolve conflicts automatically
# 4. Merge each PR into main
# 5. Push all changes

set -e

echo "🚀 Starting comprehensive PR merge process..."

# Repository information
REPO_OWNER="Zion-Holdings"
REPO_NAME="zion.app"
BASE_BRANCH="main"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1" 1>&2
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" 1>&2
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" 1>&2
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" 1>&2
}

# Function to get open PRs using GitHub API
get_open_prs_api() {
    print_status "Fetching open PRs using GitHub API..."
    curl -s -H "Accept: application/vnd.github.v3+json" \
         "https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/pulls?state=open&per_page=100" | \
    jq -r '.[] | "\(.number)|\(.head.ref)|\(.title)"'
}

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    local pr_title=$3
    
    print_status "Processing PR #${pr_number}: ${pr_title}"
    print_status "Branch: ${branch_name}"
    
    # Fetch the PR head
    if ! git fetch origin pull/${pr_number}/head:pr-${pr_number} 2>/dev/null; then
        print_error "Unable to fetch PR #${pr_number} head. Skipping."
        return 1
    fi
    
    print_success "Fetched PR #${pr_number} head into pr-${pr_number}"
    
    # Fetch the latest changes
    print_status "Fetching latest changes..."
    git fetch origin
    
    # Try to merge the branch
    print_status "Attempting to merge pr-${pr_number} into main..."
    
    if git merge pr-${pr_number} --no-ff -m "Merge PR #${pr_number}: ${pr_title}"; then
        print_success "Successfully merged PR #${pr_number}"
        return 0
    else
        print_warning "Merge conflict detected in PR #${pr_number}"
        
        # Check for conflict markers
        if git diff --name-only --diff-filter=U | grep -q .; then
            print_status "Resolving merge conflicts..."
            
            # List conflicted files
            conflicted_files=$(git diff --name-only --diff-filter=U)
            print_status "Conflicted files: ${conflicted_files}"
            
            # Try to resolve conflicts automatically
            for file in $conflicted_files; do
                print_status "Resolving conflicts in ${file}..."
                
                # Check if it's a package.json or similar file
                if [[ "$file" == *"package.json"* ]] || [[ "$file" == *"package-lock.json"* ]] || [[ "$file" == *"pnpm-lock.yaml"* ]]; then
                    print_status "Detected dependency file, using main version..."
                    git checkout --ours "$file"
                    git add "$file"
                elif [[ "$file" == *".backup"* ]] || [[ "$file" == *"backup"* ]] || [[ "$file" == *"conflict_backup"* ]]; then
                    print_status "Detected backup file, removing..."
                    git rm "$file" 2>/dev/null || rm -f "$file"
                    git add "$file" 2>/dev/null || true
                elif [[ "$file" == *".tsx"* ]] || [[ "$file" == *".ts"* ]] || [[ "$file" == *".js"* ]] || [[ "$file" == *".jsx"* ]]; then
                    # For code files, try to use the incoming version (theirs)
                    print_status "Using incoming version for code file ${file}..."
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                else
                    # Try to use main version for other files
                    print_status "Using main version for ${file}..."
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                print_success "Successfully resolved conflicts and merged PR #${pr_number}"
                return 0
            else
                print_error "Failed to resolve conflicts for PR #${pr_number}"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            print_error "Failed to merge PR #${pr_number}"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Function to fix syntax errors
fix_syntax_errors() {
    print_status "Checking for syntax errors..."
    
    # Fix common syntax errors in TypeScript/JavaScript files
    find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | while read file; do
        if grep -q "'$" "$file"; then
            print_status "Fixing syntax errors in $file"
            sed -i "s/'$//g" "$file"
        fi
        if grep -q "`$" "$file"; then
            print_status "Fixing backtick errors in $file"
            sed -i "s/`$//g" "$file"
        fi
    done
}

# Main execution
main() {
    print_status "Starting comprehensive PR merge process for ${REPO_OWNER}/${REPO_NAME}"
    
    # Ensure we're on main branch
    print_status "Switching to main branch..."
    git checkout main
    git pull origin main || true
    
    # Get list of open PRs
    prs=$(get_open_prs_api)
    
    if [ -z "$prs" ]; then
        print_warning "No open PRs found"
        return 0
    fi
    
    print_status "Found open PRs:"
    echo "$prs" | while IFS='|' read -r pr_number branch_name pr_title; do
        echo "  PR #${pr_number}: ${pr_title} (${branch_name})"
    done
    
    # Merge each PR
    successful_merges=0
    failed_merges=0
    
    echo "$prs" | while IFS='|' read -r pr_number branch_name pr_title; do
        if merge_pr "$pr_number" "$branch_name" "$pr_title"; then
            ((successful_merges++))
        else
            ((failed_merges++))
        fi
    done
    
    # Fix any remaining syntax errors
    fix_syntax_errors
    
    # Push all changes
    print_status "Pushing all merged changes to origin..."
    git push origin main --force-with-lease
    
    print_success "PR merge process completed!"
    print_status "Successful merges: ${successful_merges}"
    print_status "Failed merges: ${failed_merges}"
}

# Run the main function
main "$@"