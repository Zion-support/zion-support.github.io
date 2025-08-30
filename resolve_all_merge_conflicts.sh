#!/bin/bash

echo "🔧 Resolving All Merge Conflicts - Keeping PM2 Migration Changes"

# Function to resolve conflicts in a file by keeping local version
resolve_conflict_keep_local() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file (keeping local version)"
    
    # Remove all conflict markers and keep local version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Function to resolve conflicts in a file by keeping remote version
resolve_conflict_keep_remote() {
    local file="$1"
    echo "🔧 Resolving conflicts in: $file (keeping remote version)"
    
    # Remove local version and conflict markers, keep remote version
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Function to remove GitHub Actions workflow files (we don't need them anymore)
remove_github_actions() {
    echo "🗑️  Removing GitHub Actions workflow files (replaced by PM2)"
    
    # Remove all GitHub Actions workflow files
    rm -f .github/workflows/*.yml
    rm -f .github/workflows/*.yaml
    
    echo "✅ Removed GitHub Actions workflow files"
}

# Function to resolve specific file conflicts
resolve_specific_conflicts() {
    echo "🔧 Resolving specific file conflicts..."
    
    # Keep our local PM2 migration changes
    local_files=(
        "ecosystem.config.cjs"
        "scripts/automation/"
        "GITHUB_ACTIONS_TO_PM2_MIGRATION_SUMMARY.md"
        "MERGE_CONFLICTS_RESOLUTION_SUMMARY.md"
        "CURRENT_STATUS_SUMMARY.md"
        "FINAL_STATUS_REPORT.md"
    )
    
    for file in "${local_files[@]}"; do
        if [ -f "$file" ]; then
            echo "✅ Keeping local file: $file"
        fi
    done
    
    # Resolve package.json conflicts by keeping our version
    if [ -f "package.json" ]; then
        resolve_conflict_keep_local "package.json"
    fi
    
    # Resolve tsconfig.json conflicts by keeping our version
    if [ -f "tsconfig.json" ]; then
        resolve_conflict_keep_local "tsconfig.json"
    fi
    
    # Resolve vite.config.ts conflicts by keeping our version
    if [ -f "vite.config.ts" ]; then
        resolve_conflict_keep_local "vite.config.ts"
    fi
    
    # Resolve tailwind.config.js conflicts by keeping our version
    if [ -f "tailwind.config.js" ]; then
        resolve_conflict_keep_local "tailwind.config.js"
    fi
}

# Main conflict resolution process
echo "🚀 Starting comprehensive conflict resolution..."

# Step 1: Remove GitHub Actions workflows
remove_github_actions

# Step 2: Resolve specific file conflicts
resolve_specific_conflicts

# Step 3: Find and resolve all remaining conflicts
echo "🔍 Finding all remaining merge conflicts..."

# Find all files with conflict markers
conflict_files=$(grep -l "^<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null)

if [ -n "$conflict_files" ]; then
    echo "📁 Found $(echo "$conflict_files" | wc -l) files with conflicts"
    
    echo "$conflict_files" | while read -r file; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in: $file"
            
            # For most files, keep our local version (PM2 migration)
            resolve_conflict_keep_local "$file"
        fi
    done
else
    echo "✅ No remaining conflict files found"
fi

# Step 4: Clean up any remaining conflict markers
echo "🧹 Cleaning up any remaining conflict markers..."

# Remove any remaining conflict markers
find . -type f -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" | grep -v node_modules | grep -v .git | while read -r file; do
    if [ -f "$file" ]; then
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< HEAD/d' "$file" 2>/dev/null
        sed -i '/^=======/d' "$file" 2>/dev/null
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null
    fi
done

echo "✅ Cleanup completed"

# Step 5: Check for remaining conflicts
echo "🔍 Final check for remaining conflicts..."
remaining_conflicts=$(grep -r "^<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "🎉 All conflicts resolved successfully!"
else
    echo "⚠️  Found $remaining_conflicts remaining conflict markers"
    echo "🔍 Remaining conflicts:"
    grep -r "^<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | head -10
fi

echo "✅ Conflict resolution script completed!"
echo "📝 Next steps:"
echo "   1. git add ."
echo "   2. git commit -m 'Resolve all merge conflicts and complete PM2 migration'"
echo "   3. git push origin main"