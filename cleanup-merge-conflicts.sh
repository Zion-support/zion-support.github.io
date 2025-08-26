#!/bin/bash

<<<<<<< HEAD
echo "🚀 Starting comprehensive merge conflict cleanup..."

# Function to clean merge conflicts from a file
clean_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        echo "🧹 Cleaning conflicts in: $file"
        
        # Create backup
        cp "$file" "${file}.cleanup-backup.$(date +%s)"
        
        # Remove all merge conflict markers
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining incomplete markers
        sed -i '/^<<<<<<< HEAD/d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
        
        echo "✅ Cleaned: $file"
    fi
}

echo "📁 Cleaning conflicts in critical files..."

# Clean critical files
clean_conflicts "package.json"
clean_conflicts "package-lock.json"
clean_conflicts "tsconfig.json"
clean_conflicts "next.config.js"
clean_conflicts "tailwind.config.js"
clean_conflicts "vite.config.ts"

echo "📁 Cleaning conflicts in source files..."

# Clean source files
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        clean_conflicts "$file"
    fi
done

echo "📁 Cleaning conflicts in page files..."

# Clean page files
find pages -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" 2>/dev/null | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        clean_conflicts "$file"
    fi
done

echo "📁 Cleaning conflicts in other important files..."

# Clean other important files
find . -maxdepth 1 -name "*.md" -o -name "*.json" -o -name "*.js" -o -name "*.ts" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        clean_conflicts "$file"
    fi
done

echo "🔍 Checking for remaining conflicts..."

# Check if there are any remaining conflicts
remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "✅ All conflicts cleaned!"
    
    echo "📝 Adding cleaned files..."
    git add .
    
    echo "💾 Committing cleaned state..."
    git commit -m "Clean up all merge conflict markers - comprehensive cleanup"
    
    echo "🎉 Successfully cleaned all conflicts!"
else
    echo "⚠️  Still have $remaining_conflicts conflicts to clean"
    echo "Files with remaining conflicts:"
    grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" 2>/dev/null | head -20
fi
=======
echo "🧹 Cleaning up merge conflicts in the Zion Tech Group codebase..."

# Find and remove all merge conflict markers
echo "Removing merge conflict markers..."

# Remove ======= lines
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs sed -i '/^=======$/d'

# Remove <<<<<<< HEAD lines
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs sed -i '/^<<<<<<< HEAD$/d'

# Remove >>>>>>> lines (with branch names)
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs sed -i '/^>>>>>>> .*$/d'

# Remove empty lines that might be left after cleanup
find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs sed -i '/^[[:space:]]*$/d'

echo "✅ Merge conflict markers removed!"
echo "🔍 Checking for remaining issues..."

# Count remaining merge conflict markers
remaining_conflicts=$(grep -r "=======" src/ | wc -l)
remaining_head=$(grep -r "<<<<<<< HEAD" src/ | wc -l)
remaining_branch=$(grep -r ">>>>>>>" src/ | wc -l)

echo "📊 Remaining issues:"
echo "  - ======= markers: $remaining_conflicts"
echo "  - <<<<<<< HEAD markers: $remaining_head"
echo "  - >>>>>>> branch markers: $remaining_branch"

if [ $remaining_conflicts -eq 0 ] && [ $remaining_head -eq 0 ] && [ $remaining_branch -eq 0 ]; then
    echo "🎉 All merge conflicts cleaned up successfully!"
else
    echo "⚠️  Some merge conflicts remain. Manual cleanup may be needed."
fi

echo "🚀 Ready to build!"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
