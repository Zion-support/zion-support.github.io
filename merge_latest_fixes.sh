#!/bin/bash

echo "🚀 Starting targeted merge of latest fix-errors branches..."
echo "⏰ $(date)"

# Function to log with timestamp
log() {
    echo "[$(date '+%H:%M:%S')] $1"
}

# Ensure we're on main branch
log "📍 Current branch: $(git branch --show-current)"

# Get the most recent fix-errors branches (limit to 3 for efficiency)
log "🔍 Finding latest fix-errors branches..."
latest_branches=($(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -3 | sed 's|origin/||'))

log "📋 Processing ${#latest_branches[@]} latest branches:"
for branch in "${latest_branches[@]}"; do
    echo "  - $branch"
done

# Process each branch
merged_count=0
conflict_count=0

for branch in "${latest_branches[@]}"; do
    log "🔄 Processing branch: $branch"
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log "⏭️  Branch $branch is already merged, skipping"
        continue
    fi
    
    # Create local tracking branch
    log "🔧 Creating local branch for $branch"
    git checkout -b "$branch" "origin/$branch" 2>/dev/null || {
        git checkout "$branch" 2>/dev/null || {
            log "❌ Failed to checkout branch $branch"
            continue
        }
    }
    
    # Switch back to main for merge
    git checkout main
    
    # Attempt to merge
    log "🔀 Attempting to merge $branch into main..."
    if git merge "$branch" --no-edit 2>/dev/null; then
        log "✅ Successfully merged $branch"
        ((merged_count++))
        
        # Push the merge
        if git push origin main 2>/dev/null; then
            log "📤 Pushed merge to origin/main"
        else
            log "⚠️  Failed to push merge to origin"
        fi
        
        # Clean up local branch
        git branch -d "$branch" 2>/dev/null
    else
        log "⚠️  Merge conflict detected for $branch"
        ((conflict_count++))
        
        # Attempt simple conflict resolution
        log "🤖 Attempting automatic conflict resolution..."
        
        # Get conflicted files
        conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null)
        
        if [ -n "$conflict_files" ]; then
            log "📁 Found conflicted files:"
            echo "$conflict_files" | sed 's/^/  - /'
            
            # Strategy: Accept theirs for source files, ours for config files
            for file in $conflict_files; do
                if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.jsx ]]; then
                    log "🔧 Resolving $file (source file) - accepting theirs"
                    git checkout --theirs "$file" 2>/dev/null
                elif [[ "$file" == package*.json ]] || [[ "$file" == *.config.js ]] || [[ "$file" == *.config.ts ]]; then
                    log "🔧 Resolving $file (config file) - accepting ours"
                    git checkout --ours "$file" 2>/dev/null
                else
                    log "🔧 Resolving $file (other) - accepting theirs"
                    git checkout --theirs "$file" 2>/dev/null
                fi
                git add "$file" 2>/dev/null
            done
            
            # Try to commit the resolution
            if git commit --no-edit 2>/dev/null; then
                log "✅ Successfully resolved conflicts for $branch"
                ((merged_count++))
                
                # Push the resolved merge
                if git push origin main 2>/dev/null; then
                    log "📤 Pushed resolved merge to origin/main"
                else
                    log "⚠️  Failed to push resolved merge to origin"
                fi
                
                # Clean up local branch
                git branch -d "$branch" 2>/dev/null
            else
                log "❌ Failed to resolve conflicts automatically for $branch"
                git merge --abort 2>/dev/null
                
                # Save conflict info for manual review
                echo "CONFLICT: $branch" >> /workspace/conflicts.log
                git status --porcelain >> /workspace/conflicts.log
                echo "---" >> /workspace/conflicts.log
            fi
        else
            log "❌ No conflict files detected, aborting merge for $branch"
            git merge --abort 2>/dev/null
        fi
    fi
    
    # Ensure we're back on main
    git checkout main 2>/dev/null
done

# Summary
log "🎉 Targeted merge completed!"
log "📊 Summary:"
log "   Branches processed: ${#latest_branches[@]}"
log "   Successfully merged: $merged_count"
log "   Had conflicts: $conflict_count"

# Check for remaining conflicts
if [ -f "/workspace/conflicts.log" ]; then
    log "⚠️  Some conflicts require manual resolution:"
    cat /workspace/conflicts.log
fi

# Final status
log "📍 Current repository status:"
git status --short

echo "🚀 Targeted merge process completed!"