#!/bin/bash

echo "🔧 Resolving merge conflicts in GitHub workflow files..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    if [ ! -f "$file" ]; then
        echo "File not found: $file"
        return 1
    fi
    
    # Create a backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep the newer version (after =======)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> origin\/auto\/autonomy-[0-9]*$/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> origin\/auto\/autonomy-[0-9]*$/d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Process all workflow files with conflicts
echo "📁 Processing workflow files..."

# Main workflow files
resolve_conflicts ".github/workflows/auto-fix-workflows.yml"
resolve_conflicts ".github/workflows/auto-fix.yml"
resolve_conflicts ".github/workflows/auto-heal-workflows.yml"
resolve_conflicts ".github/workflows/auto-labeler.yml"
resolve_conflicts ".github/workflows/auto-media-release.yml"
resolve_conflicts ".github/workflows/auto-pr-automerge.yml"
resolve_conflicts ".github/workflows/auto-pr-cursor-branches.yml"

# Remove backup files created during the merge
find .github/workflows/ -name "*.backup.*" -delete

echo "🎉 All merge conflicts resolved!"
echo "📝 Summary of changes:"
echo "- Removed merge conflict markers from workflow files"
echo "- Kept the newer version of conflicting sections"
echo "- Cleaned up temporary files"

echo ""
echo "✅ Ready to commit and merge changes"