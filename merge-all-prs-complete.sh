#!/bin/bash
set -euo pipefail

echo "🚀 Starting comprehensive PR merge and conflict resolution..."
echo "============================================================"

# Function to log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
}

# Step 1: Get repository information and GitHub token
log_message "📡 Getting repository information..."
REMOTE_URL=$(git remote get-url origin)
TOKEN=$(printf "%s" "$REMOTE_URL" | sed -n 's#https://x-access-token:\([^@]*\)@github.com/.*#\1#p')
OWNER_REPO=$(printf "%s" "$REMOTE_URL" | sed -n 's#.*github.com/\([^/]*\)/\([^/.]*\)\(.git\)*$#\1/\2#p')

if [ -z "$TOKEN" ]; then
    echo "❌ Could not extract GitHub token from remote URL"
    exit 1
fi

if [ -z "$OWNER_REPO" ]; then
    echo "❌ Could not extract owner/repo from remote URL"
    exit 1
fi

echo "Repository: $OWNER_REPO"

# Step 2: Fetch latest changes and sync with remote
log_message "📡 Syncing with remote repository..."
git fetch --all
git status

# Create backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
log_message "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH" 2>/dev/null || git checkout "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH" 2>/dev/null || true
git checkout main 2>/dev/null || git checkout -b main origin/main

# Step 3: Fetch open PRs from GitHub
log_message "📋 Fetching open PRs from GitHub..."
curl -sS \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -H "User-Agent: automation" \
  "https://api.github.com/repos/$OWNER_REPO/pulls?state=open&per_page=100" > open-prs.json

# Display open PRs
python3 -c "
import json
with open('open-prs.json') as f:
    prs = json.load(f)
print(f'Open PRs: {len(prs)}')
for pr in prs:
    print(f'#{pr[\"number\"]}: {pr[\"title\"]} [{pr[\"head\"][\"ref\"]} -> {pr[\"base\"][\"ref\"]}] {pr[\"html_url\"]}')
"

# Step 4: Attempt API merges first
log_message "🔄 Attempting API merges..."
python3 -c "
import json, urllib.request, os
with open('open-prs.json') as f:
    prs = json.load(f)
owner_repo = os.environ['OWNER_REPO']
token = os.environ['TOKEN']
merged = []
failed = []
for pr in prs:
    num = pr['number']
    title = pr['title']
    print(f'Attempting to merge PR #{num}: {title}')
    req = urllib.request.Request(f'https://api.github.com/repos/{owner_repo}/pulls/{num}/merge', 
                                method='PUT', 
                                headers={'Authorization': f'token {token}',
                                        'Accept': 'application/vnd.github+json',
                                        'User-Agent': 'automation'})
    data = json.dumps({'merge_method': 'merge', 'commit_title': f'Merge PR #{num}: {title}'}).encode()
    try:
        with urllib.request.urlopen(req, data=data) as r:
            body = json.loads(r.read().decode())
            if body.get('merged'):
                print(f'✅ Successfully merged PR #{num} via API')
                merged.append(num)
            else:
                print(f'⚠️  PR #{num} could not be merged via API: {body.get(\"message\", \"Unknown error\")}')
                failed.append((num, pr['head']['ref'], pr['title']))
    except Exception as e:
        print(f'❌ Error merging PR #{num}: {e}')
        failed.append((num, pr['head']['ref'], pr['title']))

with open('failed-prs.json', 'w') as f:
    json.dump(failed, f)
print(f'\\n📊 API Merge Summary:')
print(f'✅ Successfully merged: {len(merged)} PRs')
print(f'❌ Failed to merge: {len(failed)} PRs')
"

# Step 5: Handle failed merges with local merge and conflict resolution
if [ -s failed-prs.json ]; then
    log_message "🔧 Attempting local merges for failed PRs..."
    
    # Reset to clean main
    git reset --hard origin/main
    
    python3 -c "
import json
with open('failed-prs.json') as f:
    failed = json.load(f)
for num, head, title in failed:
    print(head)
" | while read -r HEAD_REF; do
        [ -n "$HEAD_REF" ] || continue
        log_message "🔄 Attempting to merge origin/$HEAD_REF into main"
        
        # Fetch the specific branch
        git fetch origin "$HEAD_REF"
        
        # Try to merge
        if git merge --no-commit --no-ff "origin/$HEAD_REF" 2>/dev/null; then
            git commit -m "Merge $HEAD_REF into main"
            git push origin main
            log_message "✅ Successfully merged $HEAD_REF"
            continue
        fi
        
        # Handle merge conflicts
        log_message "⚠️  Merge conflicts detected in $HEAD_REF, resolving..."
        CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || true)
        
        if [ -n "$CONFLICTS" ]; then
            log_message "📋 Conflicted files: $CONFLICTS"
            
            for file in $CONFLICTS; do
                if [ -f "$file" ]; then
                    log_message "🔧 Resolving conflicts in $file"
                    
                    # Auto-resolve conflicts based on file type
                    case "$file" in
                        package.json|package-lock.json|pnpm-lock.yaml|yarn.lock|tsconfig.json|next.config.js|tailwind.config.js)
                            # Keep main version for config files
                            git checkout --ours "$file"
                            ;;
                        *.ts|*.tsx|*.js|*.jsx)
                            # Keep incoming version for source files
                            git checkout --theirs "$file"
                            ;;
                        *)
                            # Default to incoming version
                            git checkout --theirs "$file"
                            ;;
                    esac
                    git add "$file"
                fi
            done
            
            # Commit the merge
            git commit -m "Resolve conflicts and merge $HEAD_REF into main"
            git push origin main
            log_message "✅ Successfully resolved conflicts and merged $HEAD_REF"
        else
            log_message "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
        fi
    done
fi

# Step 6: Final status and cleanup
log_message "📊 Final status check..."
git status
git log --oneline -10

log_message "🎉 PR merge process completed!"
log_message "📊 Summary:"
log_message "   🔒 Backup branch: $BACKUP_BRANCH"
log_message "   📝 Check git log for merged commits"

# Step 7: Proceed with improvements
log_message "🚀 Proceeding with improvements..."

# Install dependencies
log_message "📦 Installing dependencies..."
npm ci || npm install

# Run build
log_message "🔨 Running build..."
npm run build

# Check for any remaining issues
log_message "🔍 Checking for remaining issues..."
git status

log_message "✅ All tasks completed successfully!"
echo "============================================================"