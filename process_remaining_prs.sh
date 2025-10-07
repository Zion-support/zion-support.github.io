#!/bin/bash

# Process remaining PR branches more efficiently
set -e

echo "Processing remaining PR branches..."

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -30)

successful=0
failed=0

for branch in $branches; do
    echo "Processing: $branch"
    
    if git checkout "$branch" 2>/dev/null; then
        # Try to merge with main
        if git merge origin/main --no-edit 2>/dev/null; then
            echo "  ✓ Merged successfully"
            ((successful++))
            
            # Try to push (may fail due to sandbox restrictions)
            git push origin "$branch" 2>/dev/null || echo "  ⚠ Push failed (sandbox restriction)"
        else
            echo "  ⚠ Merge conflict - attempting resolution"
            
            # Check for specific conflicts and resolve them
            if grep -q "process\.env\.NODE_ENV" components/PerformanceDashboard.tsx 2>/dev/null; then
                sed -i "s/process\.env\.NODE_ENV/process.env['NODE_ENV']/g" components/PerformanceDashboard.tsx
                git add components/PerformanceDashboard.tsx
                git commit -m "Fix TypeScript process.env access" 2>/dev/null || true
            fi
            
            # Try merge again
            if git merge origin/main --no-edit 2>/dev/null; then
                echo "  ✓ Resolved and merged"
                ((successful++))
            else
                echo "  ❌ Could not resolve conflicts"
                ((failed++))
            fi
        fi
    else
        echo "  ❌ Could not checkout"
        ((failed++))
    fi
done

echo ""
echo "Results: $successful successful, $failed failed"

# Return to main
git checkout main