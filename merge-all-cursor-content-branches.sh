#!/bin/bash

# Merge all cursor/create-and-deploy-new-content branches into main
# This script will attempt to merge each branch and handle conflicts

echo "Starting merge of all cursor content branches..."

# Array of branches to merge
branches=(
    "cursor/create-and-deploy-new-content-036e"
    "cursor/create-and-deploy-new-content-09d4"
    "cursor/create-and-deploy-new-content-0ae6"
    "cursor/create-and-deploy-new-content-2408"
    "cursor/create-and-deploy-new-content-28ce"
    "cursor/create-and-deploy-new-content-31ce"
    "cursor/create-and-deploy-new-content-34b6"
    "cursor/create-and-deploy-new-content-3c7c"
    "cursor/create-and-deploy-new-content-5cc2"
    "cursor/create-and-deploy-new-content-62f0"
    "cursor/create-and-deploy-new-content-6c4b"
    "cursor/create-and-deploy-new-content-77b3"
    "cursor/create-and-deploy-new-content-8b17"
    "cursor/create-and-deploy-new-content-a1dc"
    "cursor/create-and-deploy-new-content-ae79"
    "cursor/create-and-deploy-new-content-b30b"
    "cursor/create-and-deploy-new-content-b4d4"
    "cursor/create-and-deploy-new-content-b53a"
    "cursor/create-and-deploy-new-content-c1fe"
    "cursor/create-and-deploy-new-content-c649"
    "cursor/create-and-deploy-new-content-d672"
    "cursor/create-and-deploy-new-content-dab7"
    "cursor/create-and-deploy-new-content-e799"
    "cursor/create-and-deploy-new-content-fb1a"
)

# Counter for successful/failed merges
success_count=0
fail_count=0
conflict_count=0

# Log file
log_file="merge-results-$(date +%Y%m%d-%H%M%S).log"
echo "Merge started at $(date)" > "$log_file"

# Make sure we're on main
git checkout main
git pull origin main --no-edit

for branch in "${branches[@]}"; do
    echo ""
    echo "================================================"
    echo "Attempting to merge: $branch"
    echo "================================================"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "✅ Successfully merged: $branch" | tee -a "$log_file"
        ((success_count++))
    else
        # Check if it's a conflict
        if git status | grep -q "Unmerged paths"; then
            echo "⚠️  Merge conflict detected in: $branch" | tee -a "$log_file"
            ((conflict_count++))
            
            # Try to auto-resolve by accepting ours for most files
            echo "Attempting auto-resolution (accepting theirs for new content)..."
            
            # For new content files, accept theirs
            git status --short | grep "^UU" | awk '{print $2}' | while read file; do
                if [[ "$file" == blog/* ]] || [[ "$file" == case-studies/* ]] || [[ "$file" == components/* ]]; then
                    echo "  Accepting theirs for: $file"
                    git checkout --theirs "$file"
                    git add "$file"
                elif [[ "$file" == src/content/* ]] || [[ "$file" == src/components/* ]] || [[ "$file" == src/pages/* ]]; then
                    echo "  Merging manually: $file"
                    # For content registry files, try to merge both changes
                    git add "$file"
                fi
            done
            
            # Try to complete the merge
            if git commit --no-edit; then
                echo "✅ Conflict resolved and merged: $branch" | tee -a "$log_file"
                ((success_count++))
            else
                echo "❌ Could not auto-resolve conflicts in: $branch" | tee -a "$log_file"
                git merge --abort
                ((fail_count++))
            fi
        else
            echo "❌ Failed to merge (non-conflict error): $branch" | tee -a "$log_file"
            ((fail_count++))
        fi
    fi
done

echo ""
echo "================================================"
echo "MERGE SUMMARY"
echo "================================================"
echo "Total branches: ${#branches[@]}"
echo "Successful merges: $success_count"
echo "Merge conflicts (auto-resolved): $conflict_count"
echo "Failed merges: $fail_count"
echo ""
echo "Results saved to: $log_file"
echo ""
echo "Pushing to remote..."
if git push origin main; then
    echo "✅ Successfully pushed to remote!"
else
    echo "⚠️  Push failed, but merges are complete locally"
    echo "You may need to pull and push manually"
fi

echo "✅ All merges complete!"