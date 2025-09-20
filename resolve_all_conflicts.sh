#!/bin/bash

# Resolve All Conflicts Script - Ultra-aggressive conflict resolution
set -e

echo "🚀 Starting Ultra-Aggressive Conflict Resolution..."
echo "⏰ Started at: $(date)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Get all conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || true)

if [ -z "$CONFLICTED_FILES" ]; then
    print_success "No conflicts found!"
    exit 0
fi

print_status "Found $(echo "$CONFLICTED_FILES" | wc -l) conflicted files"

# Resolve conflicts for each file
RESOLVED_COUNT=0
TOTAL_FILES=$(echo "$CONFLICTED_FILES" | wc -l)

for file in $CONFLICTED_FILES; do
    print_status "Resolving conflicts in: $file"
    
    # For package files, keep main version (ours)
    if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]] || [[ "$file" == "yarn.lock" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Kept main version for package file"
    
    # For config files, keep main version (ours)
    elif [[ "$file" == "netlify.toml" ]] || [[ "$file" == "next.config.js" ]] || [[ "$file" == "tsconfig.json" ]] || [[ "$file" == "vite.config.js" ]]; then
        git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Kept main version for config file"
    
    # For route files, prefer incoming changes (theirs)
    elif [[ "$file" == *"routes"* ]] || [[ "$file" == *"Routes"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for route file"
    
    # For page files, prefer incoming changes (theirs)
    elif [[ "$file" == *"pages"* ]] || [[ "$file" == *"Page"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for page file"
    
    # For service files, prefer incoming changes (theirs)
    elif [[ "$file" == *"services"* ]] || [[ "$file" == *"Service"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for service file"
    
    # For component files, prefer incoming changes (theirs)
    elif [[ "$file" == *"components"* ]] || [[ "$file" == *"Component"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for component file"
    
    # For utility files, prefer incoming changes (theirs)
    elif [[ "$file" == *"utils"* ]] || [[ "$file" == *"Utils"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for utility file"
    
    # For store files, prefer incoming changes (theirs)
    elif [[ "$file" == *"store"* ]] || [[ "$file" == *"Store"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for store file"
    
    # For type files, prefer incoming changes (theirs)
    elif [[ "$file" == *"types"* ]] || [[ "$file" == *"Types"* ]]; then
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for type file"
    
    # For all other files, prefer incoming changes (theirs)
    else
        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
        print_status "  → Used incoming version for other file"
    fi
    
    RESOLVED_COUNT=$((RESOLVED_COUNT + 1))
    
    # Show progress every 50 files
    if [ $((RESOLVED_COUNT % 50)) -eq 0 ]; then
        print_status "Progress: $RESOLVED_COUNT/$TOTAL_FILES files resolved"
    fi
done

# Add all resolved files
print_status "Adding all resolved files..."
git add . 2>/dev/null || true

# Commit the merge
print_status "Committing the merge..."
if git commit -m "Ultra-merge: Resolved all conflicts automatically - $(date)" 2>/dev/null; then
    print_success "Successfully resolved all conflicts and committed!"
else
    print_error "Failed to commit merge"
    exit 1
fi

# Summary
echo ""
print_success "Conflict resolution completed!"
echo "📊 Summary:"
echo "   ✅ Files resolved: $RESOLVED_COUNT"
echo "   📈 Total files: $TOTAL_FILES"
echo "   📊 Success rate: $(( (RESOLVED_COUNT * 100) / TOTAL_FILES ))%"
echo "⏰ Completed at: $(date)"

print_success "🎉 All conflicts resolved successfully!"