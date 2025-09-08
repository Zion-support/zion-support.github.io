#!/bin/bash

echo "🚀 Starting Complete PR Workflow Execution..."

# Make scripts executable
chmod +x comprehensive-pr-merge-solution.js
chmod +x implement-improvements.js
chmod +x complete-pr-workflow.js

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if GitHub CLI is available
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI is not installed. Some features may not work."
    echo "   Install it with: brew install gh (on macOS) or visit https://cli.github.com/"
fi

echo "📋 Executing all tasks in order:"
echo "1. Resolve merge conflicts and merge PR into main"
echo "2. Check GitHub for open PRs and resolve conflicts"
echo "3. Implement improvements"
echo "4. Merge improvements back to main"
echo ""

# Run the complete workflow
node complete-pr-workflow.js

echo ""
echo "🎉 Workflow execution completed!"
echo ""
echo "📋 Next steps:"
echo "1. Review the changes in your repository"
echo "2. Test the application to ensure everything works"
echo "3. Deploy the changes if everything looks good"
echo ""
echo "💡 If you encounter any issues, you can run individual scripts:"
echo "   - node comprehensive-pr-merge-solution.js (for PR management)"
echo "   - node implement-improvements.js (for improvements only)"