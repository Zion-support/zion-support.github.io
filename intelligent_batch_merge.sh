#!/bin/bash

# Intelligent Batch Merge Script for 2000+ Cursor Branches
# Merges branches in batches with smart conflict resolution

echo "🚀 Starting Intelligent Batch Merge Process..."
echo "=============================================="

# Ensure we're on main
git checkout main
git pull origin main

# Get all cursor branches sorted by most recent
echo "📊 Analyzing branches..."
branches=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | sed 's/origin\///' | tr -d ' ')
total_branches=$(echo "$branches" | wc -l)

echo "Found $total_branches branches to process"
echo ""

# Process in batches
batch_size=50
batch_num=1
successful=0
failed=0
skipped=0
current_batch=0

for branch in $branches; do
    current_batch=$((current_batch + 1))
    
    # Show progress every 10 branches
    if [ $((current_batch % 10)) -eq 0 ]; then
        echo "Progress: $current_batch/$total_branches branches processed..."
    fi
    
    # Check if branch is already merged (fast-forward check)
    if git merge-base --is-ancestor "origin/$branch" HEAD; then
        skipped=$((skipped + 1))
        continue
    fi
    
    # Try to merge
    if git merge --no-ff "origin/$branch" -m "Merge: $branch" --quiet 2>/dev/null; then
        successful=$((successful + 1))
    else
        # Handle conflicts automatically
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null)
        
        if [ -n "$conflicted_files" ]; then
            # Auto-resolve strategy:
            # - Content files: prefer theirs (new content)
            # - Code files: prefer ours (main codebase)
            # - Config files: prefer ours
            
            for file in $conflicted_files; do
                case "$file" in
                    content/*|src/content/*)
                        git checkout --theirs "$file" 2>/dev/null && git add "$file" 2>/dev/null
                        ;;
                    *.md|*.json|*.xml)
                        git checkout --theirs "$file" 2>/dev/null && git add "$file" 2>/dev/null
                        ;;
                    App.tsx|*/App.tsx)
                        git checkout --ours "$file" 2>/dev/null && git add "$file" 2>/dev/null
                        ;;
                    components/*Banner.tsx)
                        git checkout --ours "$file" 2>/dev/null && git add "$file" 2>/dev/null
                        ;;
                    *)
                        git checkout --ours "$file" 2>/dev/null && git add "$file" 2>/dev/null
                        ;;
                esac
            done
            
            if git commit --no-edit --quiet 2>/dev/null; then
                successful=$((successful + 1))
            else
                git merge --abort 2>/dev/null
                failed=$((failed + 1))
            fi
        else
            git merge --abort 2>/dev/null
            failed=$((failed + 1))
        fi
    fi
    
    # Push every batch_size merges to avoid huge local commits
    if [ $((successful % batch_size)) -eq 0 ] && [ $successful -gt 0 ]; then
        echo "📤 Pushing batch $batch_num ($batch_size merges)..."
        if git push origin main --quiet 2>/dev/null; then
            echo "✅ Batch $batch_num pushed successfully"
        else
            echo "⚠️  Batch $batch_num push failed, continuing..."
        fi
        batch_num=$((batch_num + 1))
    fi
done

# Final push
if [ $successful -gt 0 ]; then
    echo ""
    echo "📤 Pushing final changes..."
    git push origin main 2>/dev/null
fi

echo ""
echo "=============================================="
echo "🎯 Merge Complete!"
echo "   Total branches: $total_branches"
echo "   ✅ Successfully merged: $successful"
echo "   ⏭️  Already merged (skipped): $skipped"
echo "   ❌ Failed: $failed"
echo "   📊 Success rate: $(( (successful * 100) / (total_branches - skipped) ))%"
echo "=============================================="
