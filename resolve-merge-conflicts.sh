#!/bin/bash

<<<<<<< HEAD
echo "🔧 Starting merge conflict resolution and PR merging process..."

# Set the repository URL
REPO_URL="https://github.com/Zion-Holdings/zion.app.git"

# Check current status
echo "📋 Checking current git status..."
git status

# Add all changes
echo "📦 Adding all changes..."
git add .

# Commit the resolved conflicts
echo "💾 Committing resolved merge conflicts..."
git commit -m "Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues

- Fixed merge conflict markers in api-disabled files
- Fixed JavaScript syntax errors in .js files  
- Converted CommonJS to ES modules where needed
- Cleaned up duplicate function declarations
- Fixed template literal syntax errors"

# Push to current branch
echo "🚀 Pushing changes to current branch..."
git push origin cursor/fix-syntax-push-and-merge-to-main-c855

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "⬇️ Pulling latest changes from main..."
git pull origin main

# Merge the feature branch
echo "🔀 Merging feature branch into main..."
git merge cursor/fix-syntax-push-and-merge-to-main-c855

# Push merged changes
echo "🚀 Pushing merged changes to main..."
git push origin main

# Check for any remaining conflicts
echo "🔍 Checking for remaining conflicts..."
git status

echo "✅ Merge conflict resolution and PR merging completed!"
=======
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(find . -name "*.toml" -o -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> ")

total_files=$(echo "$conflict_files" | wc -l)
echo "Found $total_files files with merge conflicts"

# Counter for progress
count=0

# Process each file
echo "$conflict_files" | while read -r file; do
    if [ -f "$file" ]; then
        count=$((count + 1))
        echo "Processing file $count/$total_files: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Use sed to resolve conflicts by keeping HEAD version
        # Remove conflict markers and keep content between <<<<<<< HEAD and =======
        sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d; />>>>>>> /d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/<<<<<<< HEAD/d; /=======/d; />>>>>>> /d' "$file"
        
        # Check if file is now empty or has issues
        if [ ! -s "$file" ]; then
            echo "Warning: File $file is now empty, restoring from backup"
            mv "$file.backup" "$file"
        fi
    fi
done

echo "Merge conflict resolution completed!"
echo "Checking for remaining conflicts..."

# Check for any remaining conflicts
remaining_conflicts=$(find . -name "*.toml" -o -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " | wc -l)

echo "Remaining conflicts: $remaining_conflicts"

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "All merge conflicts resolved successfully!"
else
    echo "Some conflicts remain, manual review may be needed"
fi
>>>>>>> main
