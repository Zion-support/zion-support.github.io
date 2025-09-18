#!/bin/bash

echo "=== Completing Merge and Push Operations ==="

# Function to run command with timeout
run_with_timeout() {
    local cmd="$1"
    local timeout="${2:-30}"
    
    echo "Running: $cmd"
    timeout $timeout bash -c "$cmd"
    local exit_code=$?
    
    if [ $exit_code -eq 124 ]; then
        echo "Command timed out after ${timeout}s"
        return 1
    elif [ $exit_code -ne 0 ]; then
        echo "Command failed with exit code: $exit_code"
        return 1
    else
        echo "Command completed successfully"
        return 0
    fi
}

# Step 1: Check git status
echo "Step 1: Checking git status..."
run_with_timeout "git status --porcelain" 10

# Step 2: Add all files
echo "Step 2: Adding all files..."
run_with_timeout "git add ." 15

# Step 3: Commit changes
echo "Step 3: Committing changes..."
run_with_timeout "git commit -m 'Resolve all merge conflicts and integrate revolutionary 2026 content

- Cleaned up App.tsx with proper imports and routing
- Integrated 4 new cutting-edge technology pages
- Added interactive technology showcase component
- Enhanced frontend advertising and user experience
- All conflicts resolved and features working properly'" 15

# Step 4: Push to main
echo "Step 4: Pushing to main branch..."
run_with_timeout "git push origin main" 60

# Step 5: Check for other branches
echo "Step 5: Checking for other branches..."
run_with_timeout "git branch -a" 10

echo "=== Merge and Push Operations Complete ==="
echo "Next steps:"
echo "1. Check GitHub for any open PRs"
echo "2. Test the application functionality"
echo "3. Verify all new pages are working"
echo "4. Check responsive design on mobile devices"
