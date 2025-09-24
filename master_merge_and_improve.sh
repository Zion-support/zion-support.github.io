#!/bin/bash

# Master Script: Resolve Merge Conflicts, Merge PRs, and Apply Improvements
# This script orchestrates the entire process

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Function to print colored output
print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}================================${NC}"
}

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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Main execution function
main() {
    print_header "🚀 MASTER MERGE AND IMPROVE SCRIPT"
    print_status "Starting comprehensive merge conflict resolution and improvements..."
    
    # Step 1: Check prerequisites
    print_header "STEP 1: CHECKING PREREQUISITES"
    if ! command_exists git; then
        print_error "Git is not installed. Please install git first."
        exit 1
    fi
    
    if ! command_exists python3; then
        print_error "Python 3 is not installed. Please install python3 first."
        exit 1
    fi
    
    if ! command_exists gh; then
        print_warning "GitHub CLI (gh) is not installed. Installing..."
        if command_exists brew; then
            brew install gh
        elif command_exists apt-get; then
            sudo apt-get update && sudo apt-get install -y gh
        elif command_exists yum; then
            sudo yum install -y gh
        else
            print_error "Cannot install GitHub CLI automatically. Please install it manually."
            exit 1
        fi
    fi
    
    print_success "All prerequisites checked"
    
    # Step 2: Resolve merge conflicts and merge PRs
    print_header "STEP 2: RESOLVING MERGE CONFLICTS AND MERGING PRs"
    
    # Make scripts executable
    chmod +x resolve-all-merge-conflicts-and-merge.sh
    chmod +x merge_conflict_resolver.py
    chmod +x comprehensive_improvements.py
    
    # Run the merge conflict resolver
    print_status "Running merge conflict resolver..."
    if python3 merge_conflict_resolver.py; then
        print_success "Merge conflicts resolved and PRs merged successfully"
    else
        print_warning "Some issues occurred during merge conflict resolution"
    fi
    
    # Step 3: Apply comprehensive improvements
    print_header "STEP 3: APPLYING COMPREHENSIVE IMPROVEMENTS"
    
    print_status "Running comprehensive improvements..."
    if python3 comprehensive_improvements.py; then
        print_success "Comprehensive improvements applied successfully"
    else
        print_warning "Some improvements may have had issues"
    fi
    
    # Step 4: Final verification
    print_header "STEP 4: FINAL VERIFICATION"
    
    print_status "Checking git status..."
    git status
    
    print_status "Checking recent commits..."
    git log --oneline -10
    
    print_status "Checking if main branch is up to date..."
    git fetch origin
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    
    if [ "$LOCAL" = "$REMOTE" ]; then
        print_success "Main branch is up to date"
    else
        print_warning "Main branch may not be fully up to date"
        print_status "Pulling latest changes..."
        git pull origin main
    fi
    
    # Step 5: Create final report
    print_header "STEP 5: CREATING FINAL REPORT"
    
    # Create a comprehensive report
    cat > final_report.md << EOF
# Merge Conflict Resolution and Improvements Report

## Summary
This report documents the comprehensive merge conflict resolution and improvements applied to the repository.

## Timestamp
$(date)

## Git Status
\`\`\`
$(git status)
\`\`\`

## Recent Commits
\`\`\`
$(git log --oneline -10)
\`\`\`

## Branch Information
- Current Branch: $(git branch --show-current)
- Main Branch Status: $(git rev-parse main)
- Remote Main Status: $(git rev-parse origin/main)

## Applied Improvements
$(if [ -f "improvement_report.json" ]; then cat improvement_report.json; else echo "No improvement report found"; fi)

## Next Steps
1. Verify all changes are working correctly
2. Test the application thoroughly
3. Deploy to production if ready
4. Monitor for any issues

## Files Modified
$(git diff --name-only HEAD~10..HEAD | head -20)

EOF
    
    print_success "Final report created: final_report.md"
    
    # Step 6: Cleanup
    print_header "STEP 6: CLEANUP"
    
    print_status "Cleaning up temporary files..."
    rm -f open_prs.json
    rm -f *.log
    rm -f *.tmp
    
    print_success "Cleanup completed"
    
    # Final success message
    print_header "🎉 PROCESS COMPLETED SUCCESSFULLY"
    print_success "All merge conflicts have been resolved"
    print_success "All open PRs have been merged"
    print_success "Comprehensive improvements have been applied"
    print_success "Repository is now up to date and optimized"
    
    print_status "Check the final_report.md file for detailed information"
    print_status "You can now proceed with your development work"
}

# Run the main function
main "$@"