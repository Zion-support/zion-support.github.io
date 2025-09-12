#!/bin/bash

# Netlify Build Monitor Script
# Usage: ./scripts/monitor-netlify-build.sh

SITE_ID="ziontechgroup"  # Update with your actual site ID
COMMIT_SHA="8ab605f8d00c"    # The commit we just pushed

echo "🔍 Monitoring Netlify build for commit: $COMMIT_SHA"
echo "📊 Site: $SITE_ID"
echo "⏰ Started: $(date)"
echo "=========================================="

# Function to check build status
check_build_status() {
    echo "🔄 Checking build status..."
    
    # Note: This requires NETLIFY_ACCESS_TOKEN environment variable
    if [ -z "$NETLIFY_ACCESS_TOKEN" ]; then
        echo "⚠️  NETLIFY_ACCESS_TOKEN not set - using public status check"
        echo "📱 Manual check: https://app.netlify.com/sites/$SITE_ID/deploys"
        return
    fi
    
    # Get latest deploy info via API
    response=$(curl -s -H "Authorization: Bearer $NETLIFY_ACCESS_TOKEN" \
        "https://api.netlify.com/api/v1/sites/$SITE_ID/deploys?per_page=1")
    
    if echo "$response" | grep -q "error"; then
        echo "❌ API Error: $response"
        return
    fi
    
    # Parse response (requires jq for full parsing)
    if command -v jq > /dev/null; then
        deploy_state=$(echo "$response" | jq -r '.[0].state')
        deploy_url=$(echo "$response" | jq -r '.[0].deploy_url')
        commit_ref=$(echo "$response" | jq -r '.[0].commit_ref')
        
        echo "📋 Deploy State: $deploy_state"
        echo "🔗 Deploy URL: $deploy_url" 
        echo "📝 Commit: $commit_ref"
        
        case $deploy_state in
            "ready")
                echo "✅ BUILD SUCCESSFUL! 🎉"
                echo "🌐 Site is live at: $deploy_url"
                return 0
                ;;
            "building")
                echo "🔨 Build in progress..."
                return 1
                ;;
            "error")
                echo "❌ BUILD FAILED!"
                echo "🔍 Check logs: https://app.netlify.com/sites/$SITE_ID/deploys"
                return 2
                ;;
            *)
                echo "⏳ Status: $deploy_state"
                return 1
                ;;
        esac
    else
        echo "📋 Raw response: $response"
        echo "💡 Install 'jq' for better output parsing"
    fi
}

# Monitor loop
echo "🚀 Starting build monitoring..."
while true; do
    if check_build_status; then
        echo "🎯 Monitoring complete!"
        break
    fi
    
    echo "⏳ Waiting 30 seconds before next check..."
    sleep 30
done

echo "=========================================="
echo "✅ Netlify build monitoring finished"
echo "🕐 Completed: $(date)" 