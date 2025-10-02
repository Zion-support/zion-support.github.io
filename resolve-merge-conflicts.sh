#!/bin/bash

echo "🔧 Resolving merge conflicts in all files..."

# Function to resolve merge conflicts by keeping HEAD version
resolve_conflicts() {
    local file="$1"
    echo "🔧 Resolving conflicts in $file..."
    
    # Create a temporary file
    local temp_file=$(mktemp)
    
    # Process the file line by line
    local in_conflict=false
    local keep_lines=true
    
    while IFS= read -r line; do
        if [[ "$line" =~ ^"<<<<<<< HEAD" ]]; then
            in_conflict=true
            keep_lines=true
            continue
        elif [[ "$line" =~ ^"=======" ]]; then
            keep_lines=false
            continue
        elif [[ "$line" =~ ^">>>>>>> " ]]; then
            in_conflict=false
            keep_lines=true
            continue
        fi
        
        # Only keep lines when we're not in conflict or when keeping HEAD
        if [[ "$in_conflict" == false ]] || [[ "$keep_lines" == true ]]; then
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    echo "✅ Resolved conflicts in $file"
}

# Find all files with merge conflicts
conflicted_files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$conflicted_files" ]; then
    echo "✅ No merge conflicts found"
    exit 0
fi

echo "📋 Found merge conflicts in:"
echo "$conflicted_files"
echo ""

# Resolve conflicts in each file
for file in $conflicted_files; do
    resolve_conflicts "$file"
done

echo ""
echo "✅ All merge conflicts resolved!"

# Verify no more conflicts exist
remaining_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$remaining_conflicts" ]; then
    echo "✅ Verification passed: No remaining merge conflicts"
else
    echo "⚠️  Warning: Still found conflicts in:"
    echo "$remaining_conflicts"
fi