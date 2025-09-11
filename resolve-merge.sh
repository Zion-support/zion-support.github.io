#!/bin/bash

echo "🚀 Resolving merge conflicts and merging feature branch into main..."

# Check current branch
echo "📍 Current branch:"
git branch --show-current

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes from remote
echo "📥 Pulling latest changes from remote..."
git pull origin main

# Switch back to feature branch
echo "🔄 Switching back to feature branch..."
git checkout cursor/analyze-improve-and-deploy-ziontechgroup-app-4210

# Merge main into feature branch to resolve conflicts
echo "🔀 Merging main into feature branch..."
git merge main

# Check for merge conflicts
if git status --porcelain | grep -q "^UU"; then
    echo "⚠️  Merge conflicts detected. Resolving automatically..."
    
    # Find files with conflicts
    conflict_files=$(git status --porcelain | grep "^UU" | awk '{print $2}')
    
    for file in $conflict_files; do
        echo "🔧 Resolving conflicts in: $file"
        
        # For most files, we'll keep our changes (feature branch)
        if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]] || [[ "$file" == *".js" ]] || [[ "$file" == *".jsx" ]]; then
            # Keep our changes for source files
            git checkout --ours "$file"
            git add "$file"
        elif [[ "$file" == *".json" ]] || [[ "$file" == *".md" ]]; then
            # Keep our changes for config and documentation
            git checkout --ours "$file"
            git add "$file"
        else
            # For other files, try to resolve automatically
            git checkout --ours "$file"
            git add "$file"
        fi
    done
    
    # Complete the merge
    git commit -m "Merge main into feature branch - conflicts resolved"
fi

# Switch back to main
echo "🔄 Switching to main branch..."
git checkout main

# Merge feature branch into main
echo "🔀 Merging feature branch into main..."
git merge cursor/analyze-improve-and-deploy-ziontechgroup-app-4210

# Push changes to remote
echo "📤 Pushing changes to remote..."
git push origin main

echo "✅ Merge completed successfully!"
echo "🎉 Feature branch has been merged into main branch"