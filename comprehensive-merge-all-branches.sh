#!/bin/bash

# Comprehensive script to merge all remaining branches into main
echo "🚀 Starting comprehensive merge of all remaining branches..."

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get all cursor branches
echo "📋 Fetching all cursor branches..."
git fetch origin

cursor_branches=($(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | head -50))

echo "📊 Found ${#cursor_branches[@]} cursor branches to process"

successful_merges=0
failed_merges=0
conflicts_resolved=0

# Process each branch
for branch in "${cursor_branches[@]}"; do
    echo ""
    echo "🔄 Processing branch: $branch"
    
    # Skip if branch doesn't exist or is already merged
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "   ⚠️  Branch $branch not found, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Check if branch is already merged into main
    if git merge-base --is-ancestor "origin/$branch" "origin/main"; then
        echo "   ✅ Branch $branch is already merged into main, skipping..."
        continue
    fi
    
    # Create temporary branch for merge attempt
    temp_branch="temp-merge-$(echo $branch | tr '/' '-')"
    
    # Checkout the source branch
    if git checkout -b "$temp_branch" "origin/$branch" 2>/dev/null; then
        echo "   📥 Checked out branch $branch"
        
        # Try to merge with main
        if git merge origin/main --no-edit 2>/dev/null; then
            echo "   ✅ Successfully merged with main"
            
            # Switch back to main and merge
            git checkout main
            if git merge "$temp_branch" --no-edit 2>/dev/null; then
                echo "   ✅ Successfully merged into main"
                ((successful_merges++))
            else
                echo "   ❌ Failed to merge into main"
                ((failed_merges++))
            fi
        else
            echo "   ⚠️  Merge conflicts detected, attempting to resolve..."
            
            # Check for conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD\|^AU\|^UA"; then
                echo "   🔧 Resolving conflicts automatically..."
                
                # Strategy: For most conflicts, take the incoming changes (theirs)
                # This preserves the new features from cursor branches
                git checkout --theirs . 2>/dev/null || true
                git add . 2>/dev/null || true
                
                # Commit the resolution
                if git commit --no-edit 2>/dev/null; then
                    echo "   ✅ Conflicts resolved automatically"
                    ((conflicts_resolved++))
                    
                    # Switch back to main and merge
                    git checkout main
                    if git merge "$temp_branch" --no-edit 2>/dev/null; then
                        echo "   ✅ Successfully merged resolved branch into main"
                        ((successful_merges++))
                    else
                        echo "   ❌ Failed to merge resolved branch into main"
                        ((failed_merges++))
                    fi
                else
                    echo "   ❌ Failed to commit conflict resolution"
                    git merge --abort 2>/dev/null || true
                    ((failed_merges++))
                fi
            else
                echo "   ❌ No conflicts detected but merge failed"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
        
        # Clean up temporary branch
        git checkout main
        git branch -D "$temp_branch" 2>/dev/null || true
        
    else
        echo "   ❌ Failed to checkout branch $branch"
        ((failed_merges++))
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

# Push all changes to main
echo ""
echo "📤 Pushing merged changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed all merged changes to main"
else
    echo "❌ Failed to push changes to main"
fi

# Generate summary
echo ""
echo "📊 COMPREHENSIVE MERGE SUMMARY:"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "   🔧 Conflicts resolved: $conflicts_resolved"
echo "   📈 Total branches processed: ${#cursor_branches[@]}"

if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🎉 Successfully merged $successful_merges branches into main!"
fi

if [ $conflicts_resolved -gt 0 ]; then
    echo "🔧 Resolved $conflicts_resolved merge conflicts automatically"
fi

if [ $failed_merges -gt 0 ]; then
    echo ""
    echo "⚠️  $failed_merges branches could not be merged automatically"
fi

echo ""
echo "🏁 Comprehensive merge process completed!"

# Create a report file
cat > /workspace/comprehensive-merge-report.txt << EOF
Comprehensive Branch Merge Report
================================
Timestamp: $(date)
Successful merges: $successful_merges
Failed merges: $failed_merges
Conflicts resolved: $conflicts_resolved
Total branches processed: ${#cursor_branches[@]}

Branches processed:
$(printf '%s\n' "${cursor_branches[@]}")
EOF

echo "📄 Detailed report saved to comprehensive-merge-report.txt"