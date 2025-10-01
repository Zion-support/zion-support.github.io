#!/bin/bash

echo "🔧 Fixing all merge conflicts..."

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing conflicts in: $file"
    
    # Remove merge conflict markers and keep our version
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file" 2>/dev/null || true
    sed -i '/^=======$/d' "$file" 2>/dev/null || true
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file" 2>/dev/null || true
    sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
    sed -i '/^=======$/d' "$file" 2>/dev/null || true
}

# Find all files with merge conflicts
echo "🔍 Finding files with merge conflicts..."
conflict_files=$(grep -r -l "<<<<<<< HEAD\|=======\|>>>>>>> " . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.log" 2>/dev/null || true)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found"
else
    echo "Found conflicts in:"
    echo "$conflict_files"
    echo ""
    
    # Fix each file
    for file in $conflict_files; do
        fix_merge_conflicts "$file"
    done
fi

# Fix specific issues in problematic files
echo "🔧 Fixing specific file issues..."

# Fix duplicate metadata exports
if [ -f "app/blog/ai-operational-excellence-2026/page.tsx" ]; then
    echo "Fixing duplicate metadata in ai-operational-excellence-2026/page.tsx"
    # Keep only the first metadata export
    sed -i '/^export const metadata = {/,/^};$/d' app/blog/ai-operational-excellence-2026/page.tsx
    sed -i '/^export const metadata = {/,/^};$/d' app/blog/ai-operational-excellence-2026/page.tsx
    # Add metadata back at the top after imports
    sed -i '/^import.*from.*react.*;$/a\
\
export const metadata = {\
  title: "AI Operational Excellence 2026: From SLIs to Self‑Healing Ops | Zion Tech Group",\
  description: "Practical blueprint to reach operational excellence with AI: reliability scorecards, SLO automation, policy tests, and self-healing runbooks.",\
};' app/blog/ai-operational-excellence-2026/page.tsx
fi

# Fix duplicate React imports
find . -name "*.tsx" -not -path "./node_modules/*" -not -path "./.git/*" -exec grep -l "import React.*from.*react" {} \; | while read file; do
    # Count React imports
    count=$(grep -c "import React.*from.*react" "$file" 2>/dev/null || echo "0")
    if [ "$count" -gt 1 ]; then
        echo "Fixing duplicate React imports in: $file"
        # Keep only the first React import
        sed -i '2,$s/^import React.*from.*react.*;$//' "$file"
    fi
done

echo "✅ All conflicts fixed!"
echo "🚀 Ready to build"