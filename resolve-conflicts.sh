#!/bin/bash
<<<<<<< HEAD
echo "🔧 Resolving merge conflicts automatically..."
CONFLICTED_FILES=$(git status --porcelain | grep -E "^UU |^AA |^DD " | awk '{print $2}')
echo "Found conflicted files:"
echo "$CONFLICTED_FILES"

for file in $CONFLICTED_FILES; do
  echo "Resolving conflicts in: $file"
  git checkout --theirs "$file"
  git add "$file"
  echo "✅ Resolved conflicts in $file"
done

echo "🎉 All conflicts resolved!"
echo "Committing merge..."
git commit -m "Resolve merge conflicts - accept incoming changes"
echo "✅ Merge completed successfully!"
=======

echo "🔧 Resolving merge conflicts automatically..."

# Function to resolve conflicts by choosing incoming changes
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Check if file exists and has conflicts
<<<<<<< HEAD
=======
    if [[ -f "$file" && $(grep -c "" "$file") -gt 0 ]]; then
        # Create backup
        cp "$file" "${file}.backup"
        
        # Use git checkout to take incoming changes (theirs)
        git checkout --theirs "$file"
        git add "$file"
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Get list of conflicted files
conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)

if [[ -z "$conflicted_files" ]]; then
    echo "No conflicted files found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"
echo ""

# Resolve conflicts for each file
while IFS= read -r file; do
    if [[ -n "$file" ]]; then
        resolve_conflicts "$file"
    fi
done <<< "$conflicted_files"

echo "🎉 All conflicts resolved!"
echo "Committing merge..."

git commit -m "Resolve merge conflicts - accept incoming changes

- Automatically resolved all merge conflicts
- Chose incoming changes (our fixes) over existing code
- Maintains lint fixes and improvements
- Ready for deployment"

echo "✅ Merge completed successfully!"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
>>>>>>> origin/main
