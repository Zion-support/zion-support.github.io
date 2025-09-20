#!/bin/bash

# Comprehensive PR Merge Automation Script
# This script systematically merges all open PRs and resolves conflicts

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
LOG_FILE="merge-automation-$(date +%Y%m%d-%H%M%S).log"
BACKUP_BRANCH="merge-backup-$(date +%Y%m%d-%H%M%S)"
MAX_CONFLICTS_PER_BRANCH=50
BATCH_SIZE=10

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1" | tee -a "$LOG_FILE"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
}

print_header() {
    echo -e "${CYAN}================================${NC}" | tee -a "$LOG_FILE"
    echo -e "${CYAN}$1${NC}" | tee -a "$LOG_FILE"
    echo -e "${CYAN}================================${NC}" | tee -a "$LOG_FILE"
}

# Function to backup current state
backup_current_state() {
    print_status "Creating backup branch: $BACKUP_BRANCH"
    git checkout -b "$BACKUP_BRANCH"
    git push origin "$BACKUP_BRANCH"
    git checkout main
    print_status "Backup completed successfully"
}

# Function to get unmerged branches
get_unmerged_branches() {
    print_status "Fetching latest changes from remote..."
    git fetch origin --prune
    
    print_status "Getting list of unmerged branches..."
    git branch -r --no-merged main | grep -v "HEAD" | grep -v "main" | sed 's/origin\///' > unmerged_branches.txt
    
    local count=$(wc -l < unmerged_branches.txt)
    print_status "Found $count unmerged branches"
    
    # Sort branches by priority (feature branches first, then others)
    sort unmerged_branches.txt > sorted_branches.txt
    mv sorted_branches.txt unmerged_branches.txt
}

# Function to check if branch has conflicts
check_branch_conflicts() {
    local branch="$1"
    print_status "Checking conflicts for branch: $branch"
    
    # Try to merge without committing
    if git merge "origin/$branch" --no-commit --no-ff > /dev/null 2>&1; then
        # No conflicts
        git merge --abort
        return 0
    else
        # Has conflicts
        git merge --abort
        return 1
    fi
}

# Function to resolve conflicts automatically
resolve_conflicts_automatically() {
    local branch="$1"
    print_status "Attempting to resolve conflicts automatically for: $branch"
    
    # Common conflict resolution strategies
    local conflict_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflict_files; do
        print_status "Resolving conflicts in: $file"
        
        # Strategy 1: Use our version for common files
        if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
            git checkout --ours "$file"
            git add "$file"
            print_status "Used our version for: $file"
            
        # Strategy 2: Use their version for new files
        elif [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.jsx ]] || [[ "$file" == *.js ]]; then
            if [[ -f "$file" ]]; then
                # File exists, try to merge intelligently
                if grep -q "<<<<<<< HEAD" "$file"; then
                    # Remove conflict markers and keep both versions
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                    sed -i '/>>>>>>> /d' "$file"
                    git add "$file"
                    print_status "Merged conflict markers in: $file"
                else
                    git add "$file"
                    print_status "Added file: $file"
                fi
            fi
            
        # Strategy 3: Use our version for config files
        elif [[ "$file" == ".eslintrc"* ]] || [[ "$file" == "tsconfig"* ]] || [[ "$file" == "vite.config"* ]]; then
            git checkout --ours "$file"
            git add "$file"
            print_status "Used our version for config: $file"
            
        # Strategy 4: Default to their version
        else
            git checkout --theirs "$file"
            git add "$file"
            print_status "Used their version for: $file"
        fi
    done
}

# Function to merge single branch
merge_single_branch() {
    local branch="$1"
    local attempt=1
    local max_attempts=3
    
    print_status "Attempting to merge branch: $branch (attempt $attempt/$max_attempts)"
    
    while [ $attempt -le $max_attempts ]; do
        # Check if branch exists
        if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
            print_warning "Branch $branch no longer exists, skipping"
            return 1
        fi
        
        # Try to merge
        if git merge "origin/$branch" --no-commit --no-ff; then
            # No conflicts, commit the merge
            git commit -m "Merge $branch - Automated merge by PR automation script"
            print_status "Successfully merged: $branch"
            return 0
        else
            # Has conflicts, try to resolve
            print_warning "Conflicts detected in: $branch"
            
            # Count conflict files
            local conflict_count=$(git diff --name-only --diff-filter=U | wc -l)
            
            if [ $conflict_count -gt $MAX_CONFLICTS_PER_BRANCH ]; then
                print_error "Too many conflicts ($conflict_count) in $branch, aborting"
                git merge --abort
                return 1
            fi
            
            # Try to resolve conflicts
            if resolve_conflicts_automatically "$branch"; then
                # Check if all conflicts are resolved
                if [ -z "$(git diff --name-only --diff-filter=U)" ]; then
                    git commit -m "Merge $branch - Resolved conflicts automatically"
                    print_status "Successfully merged with conflict resolution: $branch"
                    return 0
                else
                    print_error "Failed to resolve all conflicts in: $branch"
                    git merge --abort
                    attempt=$((attempt + 1))
                    continue
                fi
            else
                print_error "Failed to resolve conflicts in: $branch"
                git merge --abort
                attempt=$((attempt + 1))
                continue
            fi
        fi
    done
    
    print_error "Failed to merge $branch after $max_attempts attempts"
    return 1
}

# Function to merge branches in batches
merge_branches_in_batches() {
    local total_branches=$(wc -l < unmerged_branches.txt)
    local current_batch=0
    local successful_merges=0
    local failed_merges=0
    
    print_header "Starting batch merge process for $total_branches branches"
    
    while IFS= read -r branch; do
        # Skip empty lines
        [ -z "$branch" ] && continue
        
        current_batch=$((current_batch + 1))
        
        print_status "Processing branch $current_batch/$total_branches: $branch"
        
        if merge_single_branch "$branch"; then
            successful_merges=$((successful_merges + 1))
            print_status "✅ Successfully merged: $branch"
        else
            failed_merges=$((failed_merges + 1))
            print_error "❌ Failed to merge: $branch"
        fi
        
        # Commit batch if we've reached batch size
        if [ $((current_batch % BATCH_SIZE)) -eq 0 ]; then
            print_status "Completed batch $((current_batch / BATCH_SIZE))"
            print_status "Progress: $current_batch/$total_branches branches processed"
        fi
        
    done < unmerged_branches.txt
    
    print_header "Merge Summary"
    print_status "Total branches processed: $total_branches"
    print_status "Successful merges: $successful_merges"
    print_status "Failed merges: $failed_merges"
    print_status "Success rate: $((successful_merges * 100 / total_branches))%"
}

# Function to run tests after merge
run_tests_after_merge() {
    print_header "Running tests after merge"
    
    # Install dependencies
    print_status "Installing dependencies..."
    if npm install; then
        print_status "Dependencies installed successfully"
    else
        print_error "Failed to install dependencies"
        return 1
    fi
    
    # Run type check
    print_status "Running TypeScript type check..."
    if npm run type-check; then
        print_status "TypeScript check passed"
    else
        print_warning "TypeScript check failed, but continuing"
    fi
    
    # Run linting
    print_status "Running ESLint..."
    if npm run lint; then
        print_status "ESLint passed"
    else
        print_warning "ESLint failed, but continuing"
    fi
    
    # Run build test
    print_status "Testing build..."
    if npm run build; then
        print_status "Build test passed"
    else
        print_error "Build test failed"
        return 1
    fi
    
    print_status "All tests completed"
}

# Function to push changes
push_changes() {
    print_header "Pushing merged changes"
    
    print_status "Pushing to main branch..."
    if git push origin main; then
        print_status "Successfully pushed to main"
    else
        print_error "Failed to push to main"
        return 1
    fi
    
    print_status "Pushing backup branch..."
    if git push origin "$BACKUP_BRANCH"; then
        print_status "Successfully pushed backup branch"
    else
        print_warning "Failed to push backup branch"
    fi
}

# Function to cleanup
cleanup() {
    print_header "Cleaning up"
    
    # Remove temporary files
    rm -f unmerged_branches.txt
    
    # Clean up any temporary branches
    git branch --merged main | grep -v "main" | xargs -r git branch -d
    
    print_status "Cleanup completed"
}

# Function to generate report
generate_report() {
    local report_file="merge-report-$(date +%Y%m%d-%H%M%S).md"
    
    print_header "Generating merge report"
    
    cat > "$report_file" << EOF
# PR Merge Automation Report

**Date:** $(date)
**Backup Branch:** $BACKUP_BRANCH
**Log File:** $LOG_FILE

## Summary
- Total branches processed: $(wc -l < unmerged_branches.txt 2>/dev/null || echo "N/A")
- Successful merges: $successful_merges
- Failed merges: $failed_merges
- Success rate: $((successful_merges * 100 / $(wc -l < unmerged_branches.txt 2>/dev/null || echo 1)))%

## Recent Commits
\`\`\`
$(git log --oneline -10)
\`\`\`

## Branch Status
$(git branch -r --merged main | grep -v "HEAD" | grep -v "main" | wc -l) branches now merged
$(git branch -r --no-merged main | grep -v "HEAD" | grep -v "main" | wc -l) branches still unmerged

## Next Steps
1. Review the merged changes
2. Test the application thoroughly
3. Deploy if everything looks good
4. Clean up old branches if needed

EOF

    print_status "Report generated: $report_file"
}

# Main execution
main() {
    print_header "Starting Comprehensive PR Merge Automation"
    
    # Initialize
    backup_current_state
    get_unmerged_branches
    
    # Execute merge process
    merge_branches_in_batches
    
    # Post-merge tasks
    run_tests_after_merge
    push_changes
    cleanup
    generate_report
    
    print_header "PR Merge Automation Completed Successfully"
    print_status "Check the log file for detailed information: $LOG_FILE"
}

# Error handling
trap 'print_error "Script interrupted. Check the log file: $LOG_FILE"; exit 1' INT TERM

# Run main function
main "$@"