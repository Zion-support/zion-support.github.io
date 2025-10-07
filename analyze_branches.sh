#!/bin/bash
# analyze_branches.sh - Comprehensive branch analysis

set -e

echo "=== Repository Branch Analysis ==="
cd /workspace

# Basic statistics
echo "Current branch: $(git branch --show-current)"
echo "Total remote branches: $(git branch -r | wc -l)"
echo "Total local branches: $(git branch | wc -l)"

# Check if main is up to date
echo "Main branch status:"
git fetch origin
if git status | grep -q "Your branch is up to date"; then
    echo "✅ Main branch is up to date"
else
    echo "⚠️ Main branch is not up to date"
fi

# Categorize branches
echo "=== Branch Categories ==="
echo "Codex branches: $(git branch -r | grep 'codex/' | wc -l)"
echo "Feature branches: $(git branch -r | grep 'feat/' | wc -l)"
echo "Fix branches: $(git branch -r | grep 'fix/' | wc -l)"
echo "Chore branches: $(git branch -r | grep 'chore/' | wc -l)"
echo "Cursor branches: $(git branch -r | grep 'cursor/' | wc -l)"

# Check for stale branches (older than 30 days)
echo "=== Stale Branch Analysis ==="
stale_count=0
recent_count=0

for branch in $(git branch -r | grep -v HEAD | grep -v main | head -20); do
    if git log -1 --format=%ct $branch >/dev/null 2>&1; then
        last_commit=$(git log -1 --format=%ct origin/main)
        branch_commit=$(git log -1 --format=%ct $branch)
        
        if [ -n "$last_commit" ] && [ -n "$branch_commit" ]; then
            days_old=$(( (last_commit - branch_commit) / 86400 ))
            
            if [ $days_old -gt 30 ]; then
                echo "Stale: $branch (${days_old} days old)"
                ((stale_count++))
            else
                ((recent_count++))
            fi
        fi
    fi
done

echo "Recent branches (< 30 days): $recent_count"
echo "Stale branches (> 30 days): $stale_count"

# Check for merge conflicts
echo "=== Merge Conflict Analysis ==="
conflict_count=0
clean_count=0

for branch in $(git branch -r | grep -v HEAD | grep -v main | head -10); do
    branch_name=$(basename $branch)
    echo "Checking $branch_name for conflicts..."
    
    # Try to merge without committing
    if git merge-base --is-ancestor origin/main $branch 2>/dev/null; then
        echo "  ✅ $branch_name: No conflicts"
        ((clean_count++))
    else
        echo "  ⚠️ $branch_name: Potential conflicts"
        ((conflict_count++))
    fi
done

echo "Branches without conflicts: $clean_count"
echo "Branches with potential conflicts: $conflict_count"

# Build status check
echo "=== Build Status ==="
if command -v pnpm >/dev/null 2>&1; then
    echo "Checking build status..."
    if pnpm type-check >/dev/null 2>&1; then
        echo "✅ TypeScript compilation: PASSED"
    else
        echo "❌ TypeScript compilation: FAILED"
    fi
    
    if pnpm build >/dev/null 2>&1; then
        echo "✅ Vite build: PASSED"
    else
        echo "❌ Vite build: FAILED"
    fi
else
    echo "pnpm not available, skipping build checks"
fi

echo "=== Analysis Complete ==="