#!/bin/bash

                fi
            fi
        done
        
        # Add resolved files
        git add .
        
        # Commit the merge
        git commit -m "Resolve merge conflicts for cursor/create-and-deploy-new-content-8032 - $(date)"
        
        echo "✅ Successfully resolved conflicts and merged cursor/create-and-deploy-new-content-8032"
    else
        echo "⚠ Conflict in $branch, resolving..."
        git checkout --ours . 2>/dev/null
        git add . 2>/dev/null
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            echo "✓ Resolved conflicts and merged $branch"
        else
            echo "✗ Failed to merge $branch, aborting..."
            git merge --abort 2>/dev/null
        fi
    fi
done

# Push all changes
echo "Pushing changes..."
git push origin main --force

echo "🎉 Simple merge completed!"
echo "📊 Final status:"
git status --short
=======
echo "Starting simple merge process..."

# Fetch latest changes
git fetch origin

# Add all current changes
git add .

# Commit current changes
git commit -m "Add comprehensive 2034 content and improvements - Ultimate Tech Revolution, Revolutionary Services, and enhanced promotional banners"

# Try to merge recent branches
branches=(
    "origin/cursor/create-and-deploy-new-content-f527"
    "origin/cursor/create-and-deploy-new-content-f495"
    "origin/cursor/create-and-deploy-new-content-f105"
)

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✓ Successfully merged $branch"
    else
        echo "⚠ Conflict in $branch, resolving..."
        git checkout --ours . 2>/dev/null
        git add . 2>/dev/null
        if git commit -m "Merge $branch - resolved conflicts" 2>/dev/null; then
            echo "✓ Resolved conflicts and merged $branch"
        else
            echo "✗ Failed to merge $branch, aborting..."
            git merge --abort 2>/dev/null
        fi
    fi
done

# Push all changes
echo "Pushing changes..."
git push origin main --force

echo "✓ Simple merge process completed!"
