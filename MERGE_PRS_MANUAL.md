# Manual PR Merge Instructions

## Open PRs to Merge

Based on the GitHub API response, there are 3 open PRs that need to be merged:

1. **PR #12714**: `cursor/fix-netlify-build-and-merge-to-main-74ad` -> main
2. **PR #12713**: `cursor/fix-netlify-build-and-merge-to-main-9e6a` -> main  
3. **PR #12712**: `cursor/fix-netlify-build-and-merge-to-main-34e4` -> main

## Manual Merge Steps

### Step 1: Ensure you're on main branch
```bash
cd /workspace
git checkout main
git pull origin main
```

### Step 2: Merge each PR branch

#### Merge PR #12714
```bash
git fetch origin cursor/fix-netlify-build-and-merge-to-main-74ad
git merge origin/cursor/fix-netlify-build-and-merge-to-main-74ad --no-ff -m "Merge PR #12714: Fix Netlify build"
```

If conflicts occur:
```bash
# Check for conflicts
git status

# Resolve conflicts (choose the appropriate version)
git checkout --theirs package.json
git checkout --theirs package-lock.json
git add .

# Complete the merge
git commit --no-edit
```

#### Merge PR #12713
```bash
git fetch origin cursor/fix-netlify-build-and-merge-to-main-9e6a
git merge origin/cursor/fix-netlify-build-and-merge-to-main-9e6a --no-ff -m "Merge PR #12713: Fix Netlify build"
```

#### Merge PR #12712
```bash
git fetch origin cursor/fix-netlify-build-and-merge-to-main-34e4
git merge origin/cursor/fix-netlify-build-and-merge-to-main-34e4 --no-ff -m "Merge PR #12712: Fix Netlify build"
```

### Step 3: Push changes
```bash
git push origin main
```

### Step 4: Clean up branches (optional)
```bash
git branch -d cursor/fix-netlify-build-and-merge-to-main-74ad
git branch -d cursor/fix-netlify-build-and-merge-to-main-9e6a
git branch -d cursor/fix-netlify-build-and-merge-to-main-34e4

git push origin --delete cursor/fix-netlify-build-and-merge-to-main-74ad
git push origin --delete cursor/fix-netlify-build-and-merge-to-main-9e6a
git push origin --delete cursor/fix-netlify-build-and-merge-to-main-34e4
```

## Conflict Resolution Strategy

If merge conflicts occur:

1. **package.json**: Use the version with more dependencies (usually the feature branch)
2. **package-lock.json**: Use the version from the feature branch
3. **Source files (.ts, .tsx, .js, .jsx)**: Use the version from the feature branch
4. **Configuration files**: Use the version from the feature branch

## Verification

After merging all PRs:

1. Run the build to ensure everything works:
   ```bash
   npm run build
   ```

2. Run tests to ensure no regressions:
   ```bash
   npm test
   ```

3. Check that all PRs are closed on GitHub

## Automated Scripts

I've created several automated scripts:

- `merge-all-prs.js`: Node.js script for automated merging
- `resolve-and-merge-prs.sh`: Bash script for automated merging
- `run-merge.sh`: Simple execution script

To run the automated process:
```bash
chmod +x run-merge.sh
./run-merge.sh
```