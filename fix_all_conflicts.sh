#!/bin/bash

echo "🔍 Finding all files with merge conflicts..."

# Find all files with merge conflict markers
conflict_files=$(grep -r -l "<<<<<<< HEAD\|=======\|>>>>>>> " src/ 2>/dev/null || true)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "Found merge conflicts in:"
echo "$conflict_files"
echo ""

# Process each file
for file in $conflict_files; do
    echo "🔧 Processing: $file"
    
    # Check if file is corrupted beyond repair (has duplicate content or malformed structure)
    if grep -q "=======" "$file" && grep -q ">>>>>>> " "$file"; then
        # Check if the file has duplicate export statements or malformed JSX
        if grep -q "export default.*export default" "$file" || grep -q "import React.*import React" "$file"; then
            echo "❌ File appears corrupted, deleting: $file"
            rm "$file"
            continue
        fi
    fi
    
    # Try to fix merge conflicts by keeping the "ours" version
    echo "  Attempting to resolve conflicts in $file..."
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file line by line
    in_conflict=false
    conflict_resolved=false
    
    while IFS= read -r line; do
        if [[ "$line" == "<<<<<<< HEAD" ]]; then
            in_conflict=true
            conflict_resolved=false
        elif [[ "$line" == "=======" ]]; then
            # Skip the "theirs" section
            continue
        elif [[ "$line" == ">>>>>>> " ]]; then
            in_conflict=false
            conflict_resolved=true
        elif [[ "$in_conflict" == true && "$conflict_resolved" == false ]]; then
            # Keep the "ours" section
            echo "$line" >> "$temp_file"
        elif [[ "$in_conflict" == false ]]; then
            # Normal line, keep it
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "  ✅ Processed: $file"
done

echo ""
echo "🎉 All merge conflicts processed!"
echo ""

# Check for any remaining conflicts
remaining_conflicts=$(grep -r -l "<<<<<<< HEAD\|=======\|>>>>>>> " src/ 2>/dev/null || true)

if [ -z "$remaining_conflicts" ]; then
    echo "✅ All merge conflicts resolved!"
else
    echo "⚠️  Remaining conflicts in:"
    echo "$remaining_conflicts"
fi