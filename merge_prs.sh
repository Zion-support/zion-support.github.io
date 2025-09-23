#!/bin/bash

# Script to merge all open PRs from GitHub
REPO="Zion-Holdings/zion.app"
API_BASE="https://api.github.com/repos/$REPO"

echo "Starting PR merge process for $REPO..."

# Get all open PRs
echo "Fetching open PRs..."
PRS_JSON=$(curl -s "$API_BASE/pulls?state=open")

# Extract PR numbers using a more reliable method
PRS=$(echo "$PRS_JSON" | grep -o '"number":[0-9]*' | sed 's/"number"://')

echo "Found PRs: $PRS"

if [ -z "$PRS" ]; then
    echo "No PRs found or failed to extract PR numbers"
    exit 1
fi

for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Get PR details
    PR_INFO=$(curl -s "$API_BASE/pulls/$pr")
    PR_TITLE=$(echo "$PR_INFO" | grep -o '"title":"[^"]*"' | head -1 | cut -d'"' -f4)
    PR_BRANCH=$(echo "$PR_INFO" | grep -o '"ref":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    echo "  Title: $PR_TITLE"
    echo "  Branch: $PR_BRANCH"
    
    # Get files changed in this PR
    echo "  Fetching changed files..."
    FILES_JSON=$(curl -s "$API_BASE/pulls/$pr/files")
    FILES=$(echo "$FILES_JSON" | grep -o '"filename":"[^"]*"' | cut -d'"' -f4)
    
    echo "  Files to process: $FILES"
    
    for file in $FILES; do
        echo "    Processing file: $file"
        
        # Get the content of the file from the PR branch
        CONTENT_URL="$API_BASE/contents/$file?ref=$PR_BRANCH"
        FILE_CONTENT_JSON=$(curl -s "$CONTENT_URL")
        FILE_CONTENT=$(echo "$FILE_CONTENT_JSON" | grep -o '"content":"[^"]*"' | cut -d'"' -f4)
        
        if [ ! -z "$FILE_CONTENT" ]; then
            # Create directory if it doesn't exist
            DIR=$(dirname "$file")
            if [ ! -d "$DIR" ]; then
                mkdir -p "$DIR"
            fi
            
            # Write the file content (base64 decode if needed)
            echo "$FILE_CONTENT" | base64 -d > "$file" 2>/dev/null || echo "$FILE_CONTENT" > "$file"
            echo "      Updated $file"
        else
            echo "      No content found for $file"
        fi
    done
    
    echo "  Completed PR #$pr"
    echo ""
done

echo "PR merge process completed!"