#!/bin/bash
# Rollback script for deployment 20250903-181759

echo "🔄 Rolling back to previous deployment..."

# Find previous deployment
PREVIOUS_DEPLOYMENT=$(ls -t deployments | grep -v "deployment-20250903-181759" | head -1)

if [ -z "$PREVIOUS_DEPLOYMENT" ]; then
    echo "❌ No previous deployment found"
    exit 1
fi

echo "📦 Rolling back to: $PREVIOUS_DEPLOYMENT"

# Restore from backup
if [ -d "backups/deployments/next-$PREVIOUS_DEPLOYMENT" ]; then
    rm -rf .next
    cp -r "backups/deployments/next-$PREVIOUS_DEPLOYMENT" .next
    echo "✅ Build artifacts restored"
fi

if [ -d "backups/deployments/public-$PREVIOUS_DEPLOYMENT" ]; then
    rm -rf public
    cp -r "backups/deployments/public-$PREVIOUS_DEPLOYMENT" public
    echo "✅ Public assets restored"
fi

echo "✅ Rollback completed"
