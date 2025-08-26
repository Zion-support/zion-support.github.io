#!/bin/bash

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