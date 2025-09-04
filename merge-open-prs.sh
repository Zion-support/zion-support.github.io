#!/bin/bash

echo "🔄 Open PR Merger"
echo "=================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log with timestamp
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log success
log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] ✅ $1${NC}"
}

# Function to log error
log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ❌ $1${NC}"
}

# Function to log warning
log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] ⚠️  $1${NC}"
}

# Initialize counters
prs_processed=0
prs_merged=0
errors=0

log "Starting PR merge process..."

# Step 1: Ensure we're on main branch
log "🔄 Switching to main branch..."
if git checkout main 2>/dev/null; then
    log_success "Switched to main branch"
else
    log_error "Failed to switch to main branch"
    exit 1
fi

# Step 2: Update main branch
log "📥 Updating main branch..."
if git pull origin main 2>/dev/null; then
    log_success "Main branch updated"
else
    log_warning "Failed to update main branch - continuing anyway"
fi

# Step 3: Process known PRs from prs.json if it exists
if [ -f "prs.json" ]; then
    log "📋 Found prs.json file - processing open PRs..."
    
    # Extract open PR numbers (first 10 for safety)
    pr_numbers=$(node -e "
        try {
            const prs = JSON.parse(require('fs').readFileSync('prs.json', 'utf8'));
            const openPrs = prs.filter(pr => pr.state === 'open' && !pr.draft).slice(0, 10);
            console.log(openPrs.map(pr => pr.number).join(' '));
        } catch(e) {
            console.log('');
        }
    " 2>/dev/null)
    
    if [ -n "$pr_numbers" ]; then
        log "📊 Found PR numbers: $pr_numbers"
        
        for pr_number in $pr_numbers; do
            log "🔄 Processing PR #$pr_number..."
            prs_processed=$((prs_processed + 1))
            
            # Create a temporary branch for the PR
            pr_branch="temp-pr-$pr_number"
            
            # Try to fetch the PR
            if git fetch origin "pull/$pr_number/head:$pr_branch" 2>/dev/null; then
                log_success "Fetched PR #$pr_number"
                
                # Try to merge the PR
                if git merge "$pr_branch" --no-edit -m "Merge PR #$pr_number" 2>/dev/null; then
                    log_success "Merged PR #$pr_number"
                    prs_merged=$((prs_merged + 1))
                else
                    log_error "Failed to merge PR #$pr_number - may have conflicts"
                    errors=$((errors + 1))
                    # Abort the merge attempt
                    git merge --abort 2>/dev/null
                fi
                
                # Clean up the temporary branch
                git branch -D "$pr_branch" 2>/dev/null
            else
                log_error "Failed to fetch PR #$pr_number"
                errors=$((errors + 1))
            fi
            
            # Small delay to avoid overwhelming the system
            sleep 1
        done
    else
        log "No valid PR numbers found in prs.json"
    fi
else
    log "📋 No prs.json file found - trying alternative approach..."
    
    # Alternative: Try to merge any cursor branches
    log "🔍 Looking for cursor branches to merge..."
    cursor_branches=$(git branch -r | grep "origin/cursor/" | head -5 | sed 's/origin\///' | tr -d ' ')
    
    if [ -n "$cursor_branches" ]; then
        for branch in $cursor_branches; do
            log "🔄 Processing branch: $branch"
            prs_processed=$((prs_processed + 1))
            
            # Try to merge the branch
            if git merge "origin/$branch" --no-edit -m "Merge branch $branch" 2>/dev/null; then
                log_success "Merged branch: $branch"
                prs_merged=$((prs_merged + 1))
            else
                log_error "Failed to merge branch: $branch"
                errors=$((errors + 1))
                # Abort the merge attempt
                git merge --abort 2>/dev/null
            fi
            
            sleep 1
        done
    else
        log "No cursor branches found to merge"
    fi
fi

# Step 4: Push changes if any PRs were merged
if [ $prs_merged -gt 0 ]; then
    log "🚀 Pushing merged changes to main..."
    if git push origin main 2>/dev/null; then
        log_success "Changes pushed successfully!"
    else
        log_error "Failed to push changes"
        errors=$((errors + 1))
    fi
else
    log "No PRs were merged - nothing to push"
fi

# Step 5: Summary
echo ""
echo "📈 PR MERGE SUMMARY"
echo "=================="
echo "📋 PRs processed: $prs_processed"
echo "✅ PRs merged: $prs_merged"
echo "❌ Errors encountered: $errors"
echo ""

if [ $prs_merged -gt 0 ]; then
    log_success "PR merge process completed successfully!"
    log_success "$prs_merged PRs were merged into main branch"
else
    log "No PRs were merged"
fi

if [ $errors -gt 0 ]; then
    log_warning "Some errors were encountered - please review manually"
    exit 1
else
    log_success "All operations completed successfully!"
    exit 0
fi