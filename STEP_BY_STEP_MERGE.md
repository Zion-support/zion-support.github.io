# Step-by-Step PR Merge Process

## 🚀 Quick Start (Recommended)

Run this single command in your terminal:

```bash
cd /workspace && chmod +x execute-merge.sh && ./execute-merge.sh
```

## 📋 Manual Step-by-Step Process

If you prefer to run commands manually:

### Step 1: Prepare the repository
```bash
# Ensure you're on main branch
git checkout main

# Pull latest changes
git pull origin main

# Fetch all PR references
git fetch origin "+refs/pull/*/head:refs/remotes/origin/pr/*"
```

### Step 2: List available PRs
```bash
# See all available PRs
git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | awk -F/ '{print $3}' | sort -n

# See latest 10 PRs
git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | awk -F/ '{print $3}' | sort -n | tail -n 10
```

### Step 3: Merge each PR (repeat for each PR number)

Replace `PR_NUMBER` with the actual PR number (e.g., 9999):

```bash
# Create merge branch
git checkout -B merge-pr-PR_NUMBER main

# Attempt merge with conflict resolution
git merge -m "Merge PR #PR_NUMBER" -X theirs origin/pr/PR_NUMBER

# If conflicts occur, auto-resolve them:
git checkout --ours -- package-lock.json 2>/dev/null || true
git checkout --ours -- yarn.lock 2>/dev/null || true
git checkout --theirs -- dist/** 2>/dev/null || true
git add -A
git commit -m "Auto-resolve conflicts for PR #PR_NUMBER"

# Merge into main
git checkout main
git merge --no-ff -m "Merge PR #PR_NUMBER" merge-pr-PR_NUMBER

# Push to GitHub
git push origin main

# Clean up
git branch -D merge-pr-PR_NUMBER
```

### Step 4: Verify results
```bash
# Check current status
git status

# See recent commits
git log --oneline -10

# Verify all PRs are merged
git for-each-ref --format='%(refname:short)' refs/remotes/origin/pr | wc -l
```

## 🔧 Troubleshooting

### If you get permission errors:
- Ensure you have push access to the repository
- Check your GitHub authentication

### If merges fail:
- Check for complex conflicts that need manual resolution
- Verify the PR branch exists and is accessible

### If push fails:
- Check your internet connection
- Verify GitHub repository access
- Try pushing individual commits

## ✅ Success Indicators

You'll know the process is successful when:
- All PRs show as merged in GitHub
- No conflicts remain in the main branch
- All changes are pushed to origin/main
- Temporary branches are cleaned up

## 🚀 Next Steps

After successfully merging all PRs:
1. Verify the main branch is stable
2. Run any tests to ensure functionality
3. Deploy to production if needed
4. Proceed with additional improvements

## 📞 Support

If you encounter issues:
1. Check the error messages carefully
2. Verify your git configuration
3. Ensure you have proper permissions
4. Try the manual step-by-step process

The automated script handles most common scenarios, but manual intervention may be needed for complex conflicts.