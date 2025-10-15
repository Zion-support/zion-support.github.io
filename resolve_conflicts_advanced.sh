#!/bin/bash

echo "🔧 Advanced conflict resolution script starting..."

# Function to resolve common conflicts
resolve_conflicts() {
    local file="$1"
    echo "🔍 Resolving conflicts in: $file"
    
    # Check if file exists and has conflict markers
    if [ -f "$file" ] && grep -q "" "$file"; then
        echo "  ⚠️  Found conflicts in $file"
        
        # Create backup
        cp "$file" "${file}.backup"
        
        # Try different resolution strategies based on file type
        case "$file" in
            *.tsx|*.ts|*.jsx|*.js)
                echo "  🔧 Resolving TypeScript/JavaScript conflicts..."
                # For JS/TS files, prefer the incoming changes (theirs) for most cases
                # but keep our fixes for critical files
                if [[ "$file" == *"Analytics"* ]] || [[ "$file" == *"ErrorBoundary"* ]] || [[ "$file" == *"Accessibility"* ]]; then
                    echo "  📌 Keeping our fixes for critical file: $file"
                    # Keep our version for critical files
                    git checkout --ours "$file" 2>/dev/null || true
                else
                    echo "  📥 Using incoming changes for: $file"
                    # Use their version for other files
                    git checkout --theirs "$file" 2>/dev/null || true
                fi
                ;;
            *.md|*.txt)
                echo "  📝 Resolving documentation conflicts..."
                # For documentation, prefer the longer/more recent version
                git checkout --theirs "$file" 2>/dev/null || true
                ;;
            *.json)
                echo "  📋 Resolving JSON conflicts..."
                # For JSON files, prefer the incoming version
                git checkout --theirs "$file" 2>/dev/null || true
                ;;
            *)
                echo "  🔄 Using default resolution for: $file"
                # Default: use incoming changes
                git checkout --theirs "$file" 2>/dev/null || true
                ;;
        esac
        
        # Add the resolved file
        git add "$file" 2>/dev/null || true
        echo "  ✅ Resolved conflicts in $file"
    fi
}

# Get list of conflicted files
echo "📋 Finding conflicted files..."
conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")

if [ -z "$conflicted_files" ]; then
    echo "✅ No conflicted files found"
    exit 0
fi

echo "🔍 Found conflicted files:"
echo "$conflicted_files"

# Resolve each conflicted file
echo ""
echo "🔧 Starting conflict resolution..."
while IFS= read -r file; do
    if [ -n "$file" ]; then
        resolve_conflicts "$file"
    fi
done <<< "$conflicted_files"

# Commit the resolved conflicts
echo ""
echo "💾 Committing resolved conflicts..."
if git commit -m "Resolve merge conflicts automatically - prefer incoming changes for most files, keep our fixes for critical components"; then
    echo "✅ Successfully committed resolved conflicts"
else
    echo "⚠️  Some conflicts may still need manual resolution"
fi

echo "🎉 Conflict resolution completed!"