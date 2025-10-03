#!/bin/bash

echo "🔧 Starting comprehensive merge conflict resolution..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Check if file exists and has conflicts
    if [[ -f "$file" ]] && grep -q "<<<<<<< HEAD" "$file"; then
        echo "  ⚠️  Found conflicts in $file"
        
        # Create backup
        cp "$file" "${file}.conflict_backup"
        
        # Try to resolve conflicts by keeping the main branch version (HEAD)
        # This is a simple strategy - keep everything between <<<<<<< HEAD and =======
        sed -i '/^<<<<<<< HEAD/,/^=======/{
            /^=======/d
            /^<<<<<<< HEAD/d
        }' "$file"
        
        # Remove the >>>>>>> branch marker and everything after it
        sed -i '/^>>>>>>> .*/d' "$file"
        
        echo "  ✅ Resolved conflicts in $file"
    fi
}

# Get list of files with conflicts
echo "🔍 Finding files with merge conflicts..."
conflict_files=$(grep -r "<<<<<<< HEAD" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l)

if [[ -z "$conflict_files" ]]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Process each file
while IFS= read -r file; do
    resolve_conflicts "$file"
done <<< "$conflict_files"

echo ""
echo "🔍 Verifying conflict resolution..."

# Check if any conflicts remain
remaining_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" | wc -l)

if [[ "$remaining_conflicts" -eq 0 ]]; then
    echo "✅ All conflicts resolved successfully!"
else
    echo "⚠️  $remaining_conflicts conflicts still remain"
    echo "Remaining conflicts:"
    grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -n
fi

echo ""
echo "🧪 Testing build..."
npm run build:no-check

if [[ $? -eq 0 ]]; then
    echo "✅ Build successful after conflict resolution!"
else
    echo "❌ Build failed after conflict resolution"
    exit 1
fi

echo ""
echo "🎉 Merge conflict resolution completed!"