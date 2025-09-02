#!/bin/bash

# Comprehensive Merge Conflict Resolution Script
# This script resolves all merge conflicts systematically

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

print_status "Starting comprehensive merge conflict resolution..."

# Check if we're in a merge state
if ! git status | grep -q "You have unmerged paths"; then
    print_error "Not in a merge state. Please start a merge first."
    exit 1
fi

# Strategy 1: Resolve modify/delete conflicts by keeping the main branch version (deleting files)
print_status "Resolving modify/delete conflicts by keeping main branch version..."

# Get list of modify/delete conflicts
git status --porcelain | grep "^DU\|^UD" | while read status file; do
    if [[ $status == "DU" ]]; then
        # File was deleted in main, modified in HEAD - keep the deletion
        print_status "Removing file: $file (deleted in main)"
        git rm "$file"
    elif [[ $status == "UD" ]]; then
        # File was modified in main, deleted in HEAD - keep the file
        print_status "Keeping file: $file (modified in main)"
        git add "$file"
    fi
done

# Strategy 2: Resolve content conflicts by taking the main branch version for most files
print_status "Resolving content conflicts by preferring main branch version..."

# Get list of content conflicts
git status --porcelain | grep "^UU" | while read status file; do
    print_status "Resolving content conflict in: $file"
    
    # For most files, take the main branch version (theirs)
    if [[ "$file" == *"package.json"* ]] || [[ "$file" == *"yarn.lock"* ]] || [[ "$file" == *"tsconfig.json"* ]]; then
        # For config files, take main branch version
        git checkout --theirs "$file"
        git add "$file"
        print_success "Resolved $file using main branch version"
    elif [[ "$file" == *"src/"* ]]; then
        # For source files, take main branch version to avoid breaking changes
        git checkout --theirs "$file"
        git add "$file"
        print_success "Resolved $file using main branch version"
    else
        # For other files, take main branch version
        git checkout --theirs "$file"
        git add "$file"
        print_success "Resolved $file using main branch version"
    fi
done

# Strategy 3: Handle special cases
print_status "Handling special cases..."

# Keep our automation files that are unique to our branch
AUTOMATION_FILES=(
    "scripts/automation/enhanced-error-fixing-automation.cjs"
    "ecosystem-comprehensive-automation.config.cjs"
    "start-comprehensive-automation.sh"
    "COMPREHENSIVE_AUTOMATION_README.md"
    "AUTOMATION_IMPLEMENTATION_SUMMARY.md"
)

for file in "${AUTOMATION_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        print_status "Keeping our automation file: $file"
        git add "$file"
    fi
done

# Strategy 4: Clean up any remaining conflicts
print_status "Cleaning up remaining conflicts..."

# Check for any remaining unmerged files
if git status --porcelain | grep -q "^UU\|^DU\|^UD"; then
    print_warning "Some conflicts remain, attempting to resolve automatically..."
    
    # For any remaining conflicts, take main branch version
    git status --porcelain | grep "^UU\|^DU\|^UD" | while read status file; do
        if [[ $status == "UU" ]]; then
            git checkout --theirs "$file"
            git add "$file"
        elif [[ $status == "DU" ]]; then
            git rm "$file"
        elif [[ $status == "UD" ]]; then
            git add "$file"
        fi
    done
fi

# Final check
print_status "Final conflict check..."
if git status --porcelain | grep -q "^UU\|^DU\|^UD"; then
    print_error "Some conflicts could not be resolved automatically:"
    git status --porcelain | grep "^UU\|^DU\|^UD"
    exit 1
fi

print_success "All merge conflicts resolved!"
print_status "Ready to commit the merge..."

# Commit the merge
git commit -m "feat: merge comprehensive error fixing automation with main branch

- Resolved all merge conflicts by preferring main branch version
- Kept unique automation files from error fixing branch
- Integrated comprehensive PM2 automation system
- Maintained project stability while adding new features

Conflicts resolved:
- Modified/delete conflicts: Kept main branch deletions
- Content conflicts: Used main branch version for stability
- Automation files: Preserved unique error fixing automation
- Configuration files: Used main branch versions"

print_success "Merge completed successfully!"
print_status "You can now push to main branch or create a PR"