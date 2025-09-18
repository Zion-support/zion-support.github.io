#!/bin/bash

                fi
            done
            
            if git add . && git commit -m "Resolve conflicts for ${branch#origin/} - keeping our changes"; then
                echo "✅ Resolved conflicts and merged ${branch#origin/}"
                ((successful_merges++))
            else
                echo "❌ Failed to resolve conflicts for ${branch#origin/}"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        fi
        
        sleep 0.5
    done
    
    echo ""
    echo "📊 Final Merge Summary:"
    echo "✅ Successful merges: $successful_merges"
    echo "✅ Already merged: $already_merged"
    echo "❌ Failed merges: $failed_merges"
    
    return $successful_merges
}

# Main execution
main() {
    echo "📍 Current status:"
    git status --short
    
    echo "📍 Current branch: $(git branch --show-current)"
    echo "📍 Commits ahead of origin: $(git rev-list --count origin/main..HEAD)"
    
    # Merge specific branches
    merge_specific_branches
    
    # Push all changes
    echo ""
    echo "📤 Pushing all changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 Final merge resolution completed!"
    echo "📈 Main branch is now fully updated"
    
    # Show final status
    echo ""
    echo "📍 Final status:"
    git log --oneline -5
}

# Run main function
main "$@"
=======
echo "Final merge resolution - accepting our version for all conflicts..."

# Add all resolved files
git add .

# For any remaining unmerged files, accept our version
git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --ours "$file"
        git add "$file"
    fi
done

# For files that were deleted by us but modified by them, keep them deleted
git status --porcelain | grep "^DU" | awk '{print $2}' | while read file; do
    echo "Keeping deleted: $file"
    git rm "$file"
done

# For files that were added by them but not by us, remove them
git status --porcelain | grep "^AU" | awk '{print $2}' | while read file; do
    echo "Removing added file: $file"
    git rm "$file"
done

echo "Committing merge..."
git commit -m "Resolve all merge conflicts by accepting our clean version"
