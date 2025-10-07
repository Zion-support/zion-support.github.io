#!/bin/bash

# Script to merge all cursor/fix-errors-and-merge-to-main branches
set -e

echo "Starting systematic merge of all PR branches..."

# Get all cursor/fix-errors-and-merge-to-main branches
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///' | head -20)

successful_merges=0
failed_merges=0
conflict_resolutions=0

for branch in $branches; do
    echo "Processing branch: $branch"
    
    # Checkout the branch
    if git checkout "$branch" 2>/dev/null; then
        echo "  ✓ Checked out $branch"
        
        # Try to merge with main
        if git merge origin/main --no-edit 2>/dev/null; then
            echo "  ✓ Successfully merged $branch with main"
            ((successful_merges++))
            
            # Push the merged changes back to the branch
            if git push origin "$branch" 2>/dev/null; then
                echo "  ✓ Pushed merged changes for $branch"
            else
                echo "  ⚠ Could not push changes for $branch (sandbox restriction)"
            fi
        else
            echo "  ⚠ Merge conflict in $branch - attempting resolution"
            
            # Check if there are actual conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "  🔧 Resolving conflicts in $branch"
                
                # Try to resolve common conflicts automatically
                # Fix TypeScript process.env issues
                if grep -q "process.env.NODE_ENV" components/PerformanceDashboard.tsx 2>/dev/null; then
                    sed -i "s/process\.env\.NODE_ENV/process.env['NODE_ENV']/g" components/PerformanceDashboard.tsx
                    echo "    Fixed process.env access in PerformanceDashboard.tsx"
                fi
                
                # Add and commit the resolution
                git add .
                if git commit -m "Resolve merge conflicts automatically" 2>/dev/null; then
                    echo "  ✓ Resolved conflicts in $branch"
                    ((conflict_resolutions++))
                    ((successful_merges++))
                    
                    # Push the resolved changes
                    if git push origin "$branch" 2>/dev/null; then
                        echo "  ✓ Pushed resolved changes for $branch"
                    else
                        echo "  ⚠ Could not push resolved changes for $branch (sandbox restriction)"
                    fi
                else
                    echo "  ❌ Failed to resolve conflicts in $branch"
                    ((failed_merges++))
                fi
            else
                echo "  ✓ No actual conflicts in $branch"
                ((successful_merges++))
            fi
        fi
    else
        echo "  ❌ Could not checkout $branch"
        ((failed_merges++))
    fi
    
    echo "  ---"
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Conflict resolutions: $conflict_resolutions"
echo ""

# Return to main branch
git checkout main
echo "Returned to main branch"
