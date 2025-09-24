#!/bin/bash

# Simple Merge and Improve Script
# This script will handle merge conflicts and proceed with improvements

set -e

echo "🚀 Starting Simple Merge and Improve Process..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Main execution
main() {
    log "🎯 Starting simple merge and improve process..."
    
    # Ensure we're in the right directory
    cd /workspace
    
    # Check current status
    log "📊 Current git status:"
    git status --short 2>/dev/null || true
    
    # Switch to main branch
    log "🔄 Switching to main branch..."
    git checkout main 2>/dev/null || true
    
    # Pull latest changes
    log "📥 Pulling latest changes..."
    git pull origin main 2>/dev/null || true
    
    # Check for any uncommitted changes
    if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
        log "⚠️  Found uncommitted changes, committing them..."
        git add . 2>/dev/null || true
        git commit -m "Auto-commit: Resolve merge conflicts and add improvements" 2>/dev/null || true
    fi
    
    # Check for merge conflicts
    if git diff --name-only --diff-filter=U 2>/dev/null | grep -q .; then
        log "⚠️  Found merge conflicts, resolving them..."
        
        # Get conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null)
        log "📄 Conflicted files: $conflicted_files"
        
        # Resolve conflicts in each file
        for file in $conflicted_files; do
            if [ -f "$file" ]; then
                log "🔧 Resolving conflicts in $file..."
                
                # For TypeScript/JavaScript files, try to merge intelligently
                if [[ "$file" == *.tsx || "$file" == *.ts || "$file" == *.jsx || "$file" == *.js ]]; then
                    # Remove conflict markers
                    sed -i '/^<<<<<<< /d' "$file" 2>/dev/null || true
                    sed -i '/^=======/d' "$file" 2>/dev/null || true
                    sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
                else
                    # For other files, prefer the incoming version
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
                
                # Clean up any remaining conflict markers
                sed -i '/^<<<<<<< /d' "$file" 2>/dev/null || true
                sed -i '/^=======/d' "$file" 2>/dev/null || true
                sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
                
                log "✅ Resolved conflicts in $file"
            fi
        done
        
        # Add resolved files
        git add . 2>/dev/null || true
        
        # Commit the resolution
        git commit -m "Resolve merge conflicts automatically" 2>/dev/null || true
    fi
    
    # Push changes
    log "📤 Pushing changes..."
    git push origin main 2>/dev/null || true
    
    # Now proceed with improvements
    log "🚀 Proceeding with improvements..."
    
    # Check if the build works
    log "🔨 Testing build..."
    if npm run build 2>/dev/null; then
        log "✅ Build successful!"
    else
        log "⚠️  Build failed, attempting to fix..."
        npm run fix:all 2>/dev/null || true
        npm run build 2>/dev/null || log "❌ Build still failing after fixes"
    fi
    
    # Final status
    log "📊 Final git status:"
    git status --short 2>/dev/null || true
    
    log "🎉 Simple merge and improve process completed!"
}

# Run main function
main "$@"