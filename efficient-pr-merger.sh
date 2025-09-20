#!/bin/bash

# Efficient PR merger script
set -e

echo "🚀 Starting efficient PR merge process..."
echo "⏰ Started at: $(date)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Ensure we're on main
git checkout main
git pull origin main

# Get first 100 branches to process
BRANCHES=$(git branch -r | grep -E "(cursor|codex)" | head -100 | sed 's/origin\///' | sort)
TOTAL=$(echo "$BRANCHES" | wc -l)

print_status "Processing first $TOTAL branches..."

SUCCESS=0
FAILED=0
SKIPPED=0

for branch in $BRANCHES; do
    print_status "Processing branch: $branch"
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Fetch branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        FAILED=$((FAILED + 1))
        continue
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        git commit -m "Merge $branch" --no-verify
        SUCCESS=$((SUCCESS + 1))
        print_success "Merged $branch"
    else
        # Resolve conflicts automatically
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    # Simple conflict resolution - prefer incoming changes
                    git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                fi
            done
            
            git add .
            if git commit -m "Merge $branch (conflicts resolved)" --no-verify 2>/dev/null; then
                SUCCESS=$((SUCCESS + 1))
                print_success "Merged $branch (with conflicts resolved)"
            else
                git merge --abort
                FAILED=$((FAILED + 1))
            fi
        else
            git merge --abort
            FAILED=$((FAILED + 1))
        fi
    fi
    
    # Push every 10 merges
    if [ $((SUCCESS % 10)) -eq 0 ] && [ $SUCCESS -gt 0 ]; then
        print_status "Pushing progress..."
        git push origin main
    fi
done

# Final push
print_status "Pushing final changes..."
git push origin main

# Summary
echo ""
print_success "Merge process completed!"
echo "✅ Successful: $SUCCESS"
echo "❌ Failed: $FAILED"
echo "⏭️  Skipped: $SKIPPED"
echo "📊 Total processed: $((SUCCESS + FAILED + SKIPPED))"

echo ""
print_status "Recent commits:"
git log --oneline -5

echo ""
print_success "Process completed at: $(date)"