#!/bin/bash

echo "🔄 Starting rollback process..."

# Get the previous commit
PREVIOUS_COMMIT=$(git log --oneline -2 | tail -1 | cut -d' ' -f1)

echo "📝 Rolling back to commit: $PREVIOUS_COMMIT"

# Reset to previous commit
git reset --hard $PREVIOUS_COMMIT

# Pull the changes
git push origin main --force

# Rebuild and redeploy
npm ci
npm run build

echo "✅ Rollback completed successfully!"
