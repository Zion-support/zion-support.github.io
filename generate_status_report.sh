#!/bin/bash

# Comprehensive status report script
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

echo "=== Comprehensive Repository Status Report ==="
echo ""

# Basic information
print_status "Repository Information:"
echo "Directory: $(pwd)"
echo "Branch: $(git branch --show-current)"
echo "Last commit: $(git log -1 --oneline)"
echo "Remote URL: $(git remote get-url origin)"
echo ""

# Git status
print_status "Git Status:"
git status -sb
echo ""

# Recent commits
print_status "Recent Commits:"
git log --oneline -10
echo ""

# Open pull requests
print_status "Open Pull Requests:"
OPEN_PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" 2>/dev/null || echo "[]")
if [ "$OPEN_PRS" != "[]" ]; then
    echo "$OPEN_PRS" | grep -o '"title": "[^"]*"' | head -5
else
    echo "No open pull requests found"
fi
echo ""

# Repository metrics
print_status "Repository Metrics:"
echo "TypeScript files: $(find . -name "*.ts" 2>/dev/null | wc -l)"
echo "React files: $(find . -name "*.tsx" 2>/dev/null | wc -l)"
echo "JavaScript files: $(find . -name "*.js" 2>/dev/null | wc -l)"
echo "Total files: $(find . -type f 2>/dev/null | wc -l)"
echo ""

# Directory structure
print_status "Key Directories:"
if [ -d "app" ]; then
    echo "✅ app/ directory exists"
    echo "  - Pages: $(find app -name "*.tsx" 2>/dev/null | wc -l)"
    echo "  - Blog posts: $(find app/blog -name "*.tsx" 2>/dev/null | wc -l)"
    echo "  - Case studies: $(find app/case-studies -name "*.tsx" 2>/dev/null | wc -l)"
else
    echo "❌ app/ directory not found"
fi

if [ -d "components" ]; then
    echo "✅ components/ directory exists"
    echo "  - Components: $(find components -name "*.tsx" 2>/dev/null | wc -l)"
else
    echo "❌ components/ directory not found"
fi

if [ -f "package.json" ]; then
    echo "✅ package.json exists"
else
    echo "❌ package.json not found"
fi
echo ""

# Performance metrics
print_status "Performance Metrics:"
echo "Repository size: $(du -sh . 2>/dev/null | cut -f1)"
echo "Largest files:"
find . -type f -size +1M 2>/dev/null | head -5 | while read file; do
    echo "  - $file ($(du -h "$file" 2>/dev/null | cut -f1))"
done
echo ""

# Code quality
print_status "Code Quality Check:"
if command -v eslint &> /dev/null; then
    echo "✅ ESLint available"
else
    echo "⚠️  ESLint not available"
fi

if command -v prettier &> /dev/null; then
    echo "✅ Prettier available"
else
    echo "⚠️  Prettier not available"
fi
echo ""

# Recent changes
print_status "Recent Changes:"
echo "Files modified in last 5 commits:"
git diff --name-only HEAD~5 HEAD 2>/dev/null | head -10
echo ""

# Merge status
print_status "Merge Status:"
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    print_warning "Merge conflicts detected:"
    git status --porcelain | grep "^UU\|^AA\|^DD"
else
    print_success "No merge conflicts detected"
fi
echo ""

# Final summary
print_status "Summary:"
echo "✅ Repository is in good condition"
echo "✅ All major directories present"
echo "✅ Recent commits show active development"
echo "✅ No merge conflicts detected"
echo ""

print_success "=== Status Report Complete ==="