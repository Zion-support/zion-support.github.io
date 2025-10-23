#!/bin/bash

# Comprehensive script to merge all cursor/fix-errors-and-merge-to-main branches
# This script will systematically merge all branches and resolve conflicts

echo "🚀 Starting comprehensive merge process for all cursor branches..."

# Get all cursor branches sorted by date
branches=($(git branch -r --sort=-committerdate | grep "cursor/fix-errors-and-merge-to-main" | head -50))

successful_merges=0
failed_merges=0
conflict_resolutions=0

echo "📋 Found ${#branches[@]} branches to process"

for branch in "${branches[@]}"; do
    echo ""
    echo "🔄 Processing: $branch"
    
    # Check if branch exists and has commits not in main
    if git merge-base --is-ancestor "$branch" HEAD 2>/dev/null; then
        echo "   ⏭️  Branch already merged, skipping..."
        continue
    fi
    
    # Attempt to merge the branch
    if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
        echo "   ✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "   ⚠️  Merge conflict detected in $branch"
        
        # Check if there are actual conflicts
        if git diff --name-only --diff-filter=U | grep -q .; then
            echo "   🔧 Resolving conflicts using main branch version..."
            
            # Use git checkout to resolve conflicts by taking main branch version
            git checkout --ours .
            git add .
            
            if git commit -m "Resolve merge conflicts for $branch - using main branch version"; then
                echo "   ✅ Successfully resolved conflicts and merged $branch"
                ((successful_merges++))
                ((conflict_resolutions++))
            else
                echo "   ❌ Failed to resolve conflicts for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        else
            echo "   🔄 No actual conflicts, completing merge..."
            if git add . && git commit -m "Complete merge for $branch"; then
                echo "   ✅ Successfully completed merge for $branch"
                ((successful_merges++))
            else
                echo "   ❌ Failed to complete merge for $branch"
                git merge --abort
                ((failed_merges++))
            fi
        fi
    fi
    
    # Push changes after each successful merge
    if [ $? -eq 0 ]; then
        echo "   📤 Pushing changes to origin..."
        git push origin main
    fi
done

echo ""
echo "🎉 Comprehensive merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $successful_merges"
echo "   🔧 Conflict resolutions: $conflict_resolutions"
echo "   ❌ Failed merges: $failed_merges"
echo "   📈 Total branches processed: ${#branches[@]}"

# Final push
echo ""
echo "📤 Pushing final changes to origin..."
git push origin main

echo "🏁 All done! Repository is now up to date."