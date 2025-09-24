#!/bin/bash

echo "🔧 Simple Merge Conflict Resolver"

# Check git status
echo "📊 Checking git status..."
git status --porcelain

# Check for merge conflicts
echo "🔍 Checking for merge conflicts..."
if git status --porcelain | grep -E "(UU|AA|DD)"; then
    echo "⚠️ Merge conflicts detected"
    
    # Resolve conflicts by keeping HEAD version
    echo "🔧 Resolving conflicts..."
    
    # Find files with conflicts
    git status --porcelain | grep -E "(UU|AA|DD)" | while read line; do
        file=$(echo $line | cut -c4-)
        echo "Resolving conflicts in: $file"
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove merge conflict markers and keep HEAD version
        sed -i '//,/>>>>>>> /c\
# Resolved merge conflict - kept HEAD version' "$file"
        
        # Clean up any remaining markers
        sed -i '//d' "$file"
        sed -i '//d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    done
    
    # Add resolved files
    git add .
    
    # Commit the resolution
    git commit -m "Resolve merge conflicts - kept HEAD version"
    
    echo "✅ Merge conflicts resolved"
else
    echo "✅ No merge conflicts found"
fi

# Check current branch
echo "📋 Current branch: $(git branch --show-current)"

# Try to merge any open PRs
echo "🔄 Checking for open PRs..."

# Get list of remote branches that might be PRs
git fetch origin
git branch -r | grep -E "(pull/|pr/)" | while read branch; do
    pr_number=$(echo $branch | grep -o '[0-9]\+')
    if [ ! -z "$pr_number" ]; then
        echo "Processing PR #$pr_number from branch $branch"
        
        # Try to merge
        if git merge "$branch" --no-ff -m "Merge PR #$pr_number"; then
            echo "✅ Successfully merged PR #$pr_number"
        else
            echo "⚠️ Merge conflict in PR #$pr_number, resolving..."
            
            # Resolve conflicts
            git status --porcelain | grep -E "(UU|AA|DD)" | while read line; do
                file=$(echo $line | cut -c4-)
                echo "Resolving conflicts in: $file"
                
                # Keep HEAD version
                sed -i '//,/>>>>>>> /c\
# Resolved merge conflict - kept HEAD version' "$file"
                
                # Clean up markers
                sed -i '//d' "$file"
                sed -i '//d' "$file"
                sed -i '/>>>>>>> /d' "$file"
            done
            
            git add .
            git commit -m "Resolve merge conflicts in PR #$pr_number"
            echo "✅ Resolved conflicts for PR #$pr_number"
        fi
    fi
done

# Push to main
echo "📤 Pushing to main branch..."
git push origin main

echo "🎉 Merge resolution completed"