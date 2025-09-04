#!/bin/bash
set -euo pipefail

echo "🚀 Starting comprehensive PR merge automation..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log with colors
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] ✅${NC} $1"
}

warning() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] ⚠️${NC} $1"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ❌${NC} $1"
}

# Function to get open PRs
get_open_prs() {
    log "Fetching open PRs from GitHub..."
    curl -s -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" \
        | python3 -c "
import sys, json
data = json.load(sys.stdin)
for pr in data:
    print(f'{pr[\"number\"]}|{pr[\"title\"]}|{pr[\"head\"][\"ref\"]}|{pr[\"created_at\"]}')
"
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local pr_title=$2
    local branch_name=$3
    local created_at=$4
    
    log "Processing PR #$pr_number: $pr_title"
    log "Branch: $branch_name (created: $created_at)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet "refs/heads/$branch_name"; then
        log "Branch $branch_name exists locally"
    else
        log "Fetching branch $branch_name from remote..."
        if ! git fetch origin "$branch_name:$branch_name"; then
            warning "Failed to fetch branch $branch_name, skipping..."
            return 1
        fi
    fi
    
    # Switch to main and ensure it's up to date
    git checkout main
    git pull origin main
    
    # Attempt to merge
    log "Attempting to merge $branch_name into main..."
    if git merge --no-ff "$branch_name" -m "Merge PR #$pr_number: $pr_title"; then
        success "Successfully merged PR #$pr_number"
        
        # Push to main
        if git push origin main; then
            success "Pushed merged changes to main"
        else
            error "Failed to push to main"
            return 1
        fi
        
        # Clean up local branch
        git branch -d "$branch_name" 2>/dev/null || true
        
        return 0
    else
        warning "Merge conflict detected for PR #$pr_number"
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            log "Resolving merge conflicts..."
            
            # Try to resolve conflicts automatically
            if resolve_conflicts; then
                success "Conflicts resolved automatically"
                
                # Commit the merge
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number: $pr_title"
                
                # Push to main
                if git push origin main; then
                    success "Pushed resolved merge to main"
                else
                    error "Failed to push resolved merge to main"
                    return 1
                fi
                
                # Clean up
                git branch -d "$branch_name" 2>/dev/null || true
                return 0
            else
                error "Failed to resolve conflicts automatically for PR #$pr_number"
                
                # Abort merge
                git merge --abort
                return 1
            fi
        else
            error "Unknown merge issue for PR #$pr_number"
            git merge --abort
            return 1
        fi
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts() {
    log "Attempting automatic conflict resolution..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        log "Resolving conflicts in $file"
        
        # Check if it's a common file type we can handle
        case "$file" in
            *.json)
                resolve_json_conflicts "$file"
                ;;
            *.js|*.jsx|*.ts|*.tsx)
                resolve_js_conflicts "$file"
                ;;
            *.md)
                resolve_md_conflicts "$file"
                ;;
            package.json|package-lock.json)
                resolve_package_conflicts "$file"
                ;;
            *)
                # For other files, try to keep both versions or use a simple strategy
                resolve_generic_conflicts "$file"
                ;;
        esac
    done
    
    # Check if all conflicts are resolved
    if ! git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        return 0
    else
        return 1
    fi
}

# Function to resolve JSON conflicts
resolve_json_conflicts() {
    local file=$1
    log "Resolving JSON conflicts in $file"
    
    # Try to merge JSON files by combining arrays and objects
    python3 -c "
import json
import sys

try:
    with open('$file', 'r') as f:
        content = f.read()
    
    # Remove conflict markers and try to parse
    lines = content.split('\n')
    result = []
    in_conflict = False
    
    for line in lines:
        if line.startswith('<<<<<<<') or line.startswith('=======') or line.startswith('>>>>>>>'):
            in_conflict = not in_conflict
            continue
        if not in_conflict:
            result.append(line)
    
    # Try to parse as JSON
    json.loads('\n'.join(result))
    
    # Write the cleaned content
    with open('$file', 'w') as f:
        f.write('\n'.join(result))
        
    print('JSON conflicts resolved')
except Exception as e:
    print(f'Failed to resolve JSON conflicts: {e}')
    sys.exit(1)
"
}

# Function to resolve JS/TS conflicts
resolve_js_conflicts() {
    local file=$1
    log "Resolving JS/TS conflicts in $file"
    
    # Simple strategy: keep the newer version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
}

# Function to resolve Markdown conflicts
resolve_md_conflicts() {
    local file=$1
    log "Resolving Markdown conflicts in $file"
    
    # Keep both versions separated by horizontal rule
    sed -i 's/<<<<<<< HEAD/---/' "$file"
    sed -i 's/=======/\n---\n/' "$file"
    sed -i 's/>>>>>>> [^[:space:]]*/---/' "$file"
}

# Function to resolve package.json conflicts
resolve_package_conflicts() {
    local file=$1
    log "Resolving package.json conflicts in $file"
    
    if [[ "$file" == "package.json" ]]; then
        # For package.json, try to merge dependencies
        python3 -c "
import json
import sys

try:
    with open('$file', 'r') as f:
        content = f.read()
    
    # Remove conflict markers
    lines = content.split('\n')
    result = []
    in_conflict = False
    
    for line in lines:
        if line.startswith('<<<<<<<') or line.startswith('=======') or line.startswith('>>>>>>>'):
            in_conflict = not in_conflict
            continue
        if not in_conflict:
            result.append(line)
    
    # Parse and merge dependencies
    data = json.loads('\n'.join(result))
    
    # Write the cleaned content
    with open('$file', 'w') as f:
        json.dump(data, f, indent=2)
        
    print('package.json conflicts resolved')
except Exception as e:
    print(f'Failed to resolve package.json conflicts: {e}')
    sys.exit(1)
"
    fi
}

# Function to resolve generic conflicts
resolve_generic_conflicts() {
    local file=$1
    log "Resolving generic conflicts in $file"
    
    # Simple strategy: keep the version after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
}

# Main execution
main() {
    log "Starting PR merge automation..."
    
    # Ensure we're on main branch
    git checkout main
    git pull origin main
    
    # Get list of open PRs
    local prs=$(get_open_prs)
    
    if [[ -z "$prs" ]]; then
        success "No open PRs found"
        return 0
    fi
    
    local success_count=0
    local failure_count=0
    local total_count=0
    
    # Process each PR
    while IFS='|' read -r pr_number pr_title branch_name created_at; do
        if [[ -n "$pr_number" ]]; then
            total_count=$((total_count + 1))
            
            if merge_pr "$pr_number" "$pr_title" "$branch_name" "$created_at"; then
                success_count=$((success_count + 1))
            else
                failure_count=$((failure_count + 1))
            fi
            
            # Small delay between PRs
            sleep 2
        fi
    done <<< "$prs"
    
    # Summary
    log "Merge automation completed!"
    success "Successfully merged: $success_count PRs"
    if [[ $failure_count -gt 0 ]]; then
        warning "Failed to merge: $failure_count PRs"
    fi
    log "Total processed: $total_count PRs"
}

# Run main function
main "$@"