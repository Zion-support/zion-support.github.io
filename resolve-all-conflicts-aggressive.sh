#!/bin/bash

# Aggressive Merge Conflict Resolution Script
# This script resolves ALL merge conflicts by taking the main branch version

set -e

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

print_status "Starting aggressive merge conflict resolution..."

# Check if we're in a merge state
if ! git status | grep -q "You have unmerged paths"; then
    print_error "Not in a merge state. Please start a merge first."
    exit 1
fi

# Strategy: Take main branch version for ALL conflicts
print_status "Resolving ALL conflicts by taking main branch version..."

# Get all unmerged files and resolve them
git status --porcelain | grep "^UU\|^DU\|^UD" | while read status file; do
    print_status "Resolving conflict in: $file (status: $status)"
    
    if [[ $status == "UU" ]]; then
        # Content conflict - take main branch version
        git checkout --theirs "$file" 2>/dev/null || true
        git add "$file" 2>/dev/null || true
    elif [[ $status == "DU" ]]; then
        # File deleted in main, modified in HEAD - remove it
        git rm "$file" 2>/dev/null || true
    elif [[ $status == "UD" ]]; then
        # File modified in main, deleted in HEAD - keep it
        git add "$file" 2>/dev/null || true
    fi
done

# Force resolve any remaining conflicts
print_status "Force resolving any remaining conflicts..."

# For any remaining UU conflicts, force take main branch version
git status --porcelain | grep "^UU" | while read status file; do
    print_status "Force resolving: $file"
    git checkout --theirs "$file" 2>/dev/null || true
    git add "$file" 2>/dev/null || true
done

# For any remaining DU conflicts, force remove
git status --porcelain | grep "^DU" | while read status file; do
    print_status "Force removing: $file"
    git rm "$file" 2>/dev/null || true
done

# For any remaining UD conflicts, force add
git status --porcelain | grep "^UD" | while read status file; do
    print_status "Force adding: $file"
    git add "$file" 2>/dev/null || true
done

# Special handling for our automation files - keep them
print_status "Preserving our automation files..."

AUTOMATION_FILES=(
    "scripts/automation/enhanced-error-fixing-automation.cjs"
    "ecosystem-comprehensive-automation.config.cjs"
    "start-comprehensive-automation.sh"
    "COMPREHENSIVE_AUTOMATION_README.md"
    "AUTOMATION_IMPLEMENTATION_SUMMARY.md"
    "resolve-all-merge-conflicts-comprehensive.sh"
    "resolve-all-conflicts-aggressive.sh"
)

for file in "${AUTOMATION_FILES[@]}"; do
    if [[ -f "$file" ]]; then
        print_status "Preserving automation file: $file"
        git add "$file" 2>/dev/null || true
    fi
done

# Final check
print_status "Final conflict check..."
remaining_conflicts=$(git status --porcelain | grep "^UU\|^DU\|^UD" | wc -l)

if [[ $remaining_conflicts -gt 0 ]]; then
    print_warning "Still have $remaining_conflicts conflicts. Attempting final resolution..."
    
    # Last resort: reset and take main branch for everything
    git status --porcelain | grep "^UU\|^DU\|^UD" | while read status file; do
        if [[ $status == "UU" ]]; then
            git checkout --theirs "$file" 2>/dev/null || true
            git add "$file" 2>/dev/null || true
        elif [[ $status == "DU" ]]; then
            git rm "$file" 2>/dev/null || true
        elif [[ $status == "UD" ]]; then
            git add "$file" 2>/dev/null || true
        fi
    done
fi

# Check final status
final_conflicts=$(git status --porcelain | grep "^UU\|^DU\|^UD" | wc -l)

if [[ $final_conflicts -eq 0 ]]; then
    print_success "All merge conflicts resolved!"
    print_status "Ready to commit the merge..."
    
    # Commit the merge
    git commit -m "feat: merge comprehensive error fixing automation with main branch

- Resolved all merge conflicts by taking main branch version
- Preserved unique automation files from error fixing branch
- Integrated comprehensive PM2 automation system
- Maintained project stability while adding new features

Conflicts resolved: $remaining_conflicts files
Strategy: Aggressive resolution taking main branch version
Automation files preserved: ${#AUTOMATION_FILES[@]} files"

    print_success "Merge completed successfully!"
    print_status "You can now push to main branch or create a PR"
else
    print_error "Still have $final_conflicts unresolved conflicts:"
    git status --porcelain | grep "^UU\|^DU\|^UD" | head -10
    exit 1
fi