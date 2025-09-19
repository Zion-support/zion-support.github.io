#!/bin/bash

# Efficient script to merge all open PRs with batch processing
set -e

echo "🚀 Starting efficient merge of all open PRs..."
echo "⏰ Started at: $(date)"
echo "---"

# Configuration
BATCH_SIZE=50
MAX_BRANCHES_PER_RUN=500
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"

# Create a backup branch
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0
TOTAL_PROCESSED=0

# Get all cursor branches and limit the number
echo "📋 Fetching cursor branches (limited to $MAX_BRANCHES_PER_RUN)..."
git fetch --all

# Get branches and store in a temporary file, limited to MAX_BRANCHES_PER_RUN
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | sed 's/origin\///' | head -n $MAX_BRANCHES_PER_RUN > /tmp/cursor_branches.txt

TOTAL_BRANCHES=$(wc -l < /tmp/cursor_branches.txt)
echo "📊 Processing first $TOTAL_BRANCHES branches (out of 8770 total)"

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)" 2>/dev/null || true
    
    # Strategy: prefer main branch for config files, prefer incoming for components
    case "$file" in
        "package.json"|"package-lock.json"|"yarn.lock"|"pnpm-lock.yaml"|"netlify.toml"|"tsconfig.json")
            echo "📦 Config file - keeping main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Component file - preferring incoming changes"
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "📄 Other file - using main version"
            git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    echo "✅ Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch with timeout
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Set a timeout for the merge operation
    timeout 30 bash -c "
        git fetch origin '$branch' 2>/dev/null || exit 1
        
        if git merge --no-commit --no-ff 'origin/$branch' 2>/dev/null; then
            echo '✅ Successfully merged $branch'
            git commit -m 'Merge $branch into main - $(date)' 2>/dev/null || true
            exit 0
        else
            echo '⚠️  Merge conflicts detected in $branch, resolving...'
            
            CONFLICTED_FILES=\$(git diff --name-only --diff-filter=U | head -5)
            
            if [ -n \"\$CONFLICTED_FILES\" ]; then
                for file in \$CONFLICTED_FILES; do
                    if [ -f \"\$file\" ]; then
                        case \"\$file\" in
                            'package.json'|'package-lock.json'|'yarn.lock'|'netlify.toml'|'tsconfig.json')
                                git checkout --ours \"\$file\" 2>/dev/null || true
                                ;;
                            *.tsx|*.ts|*.jsx|*.js)
                                git checkout --theirs \"\$file\" 2>/dev/null || git checkout --ours \"\$file\" 2>/dev/null || true
                                ;;
                            *)
                                git checkout --ours \"\$file\" 2>/dev/null || true
                                ;;
                        esac
                    fi
                done
                
                git add . 2>/dev/null || true
                
                if git commit -m 'Resolve merge conflicts for $branch - $(date)' 2>/dev/null; then
                    echo '✅ Successfully resolved conflicts and merged $branch'
                    exit 0
                else
                    echo '❌ Failed to commit resolved conflicts for $branch'
                    git merge --abort 2>/dev/null || true
                    exit 1
                fi
            else
                echo '❌ No conflicted files found, but merge failed. Aborting...'
                git merge --abort 2>/dev/null || true
                exit 1
            fi
        fi
    " 2>/dev/null
    
    local exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        FAILED_MERGES=$((FAILED_MERGES + 1))
        # Clean up any partial merge state
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main processing loop
echo "🔄 Starting batch processing..."
echo "---"

# Process branches in batches
while IFS= read -r branch; do
    TOTAL_PROCESSED=$((TOTAL_PROCESSED + 1))
    echo "📋 [$TOTAL_PROCESSED/$TOTAL_BRANCHES] Processing: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update every 10 branches
    if [ $((TOTAL_PROCESSED % 10)) -eq 0 ]; then
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_BRANCHES skipped"
        echo "---"
    fi
    
    # Push changes every 50 successful merges
    if [ $((SUCCESSFUL_MERGES % 50)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
        echo "---"
    fi
    
done < /tmp/cursor_branches.txt

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Cleanup
rm -f /tmp/cursor_branches.txt

# Summary
echo ""
echo "🎉 Efficient merge process completed!"
echo "📊 Final Summary:"
echo "   📋 Total branches processed: $TOTAL_PROCESSED"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

echo ""
echo "🧹 Next steps:"
echo "   1. Review the merged changes: git log --oneline -20"
echo "   2. Test the application thoroughly"
echo "   3. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
echo "   4. Run additional merge batches if needed for remaining branches"