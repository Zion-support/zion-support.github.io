# Merge Conflict Resolution and PR Merging Guide

## Overview
This guide provides step-by-step instructions to resolve all merge conflicts and merge open PRs into the main branch for the Zion Tech Group website.

## Current Status
- ✅ All missing pages have been created
- ✅ Build is successful (`npm run build` passes)
- ✅ Local changes have been committed
- ⚠️ Terminal connectivity issues preventing direct execution
- ⚠️ Multiple open PRs need to be merged

## Open PRs Found
Based on the `prs.json` file, there are approximately **50+ open PRs** that need to be processed.

## Step-by-Step Resolution Process

### Step 1: Create Backup Branch
```bash
# Create a backup of the current main branch
git checkout -b backup-main-$(date +%Y%m%d-%H%M%S)
git push origin backup-main-$(date +%Y%m%d-%H%M%S)
git checkout main
```

### Step 2: Resolve Existing Conflicts
```bash
# Use the existing conflict resolution script
./resolve_all_merge_conflicts.sh
```

### Step 3: Get All Cursor Branches
```bash
# List all cursor branches that need to be merged
git branch -r | grep 'origin/cursor/' | sed 's/origin\///'
```

### Step 4: Merge Each Branch
For each branch found in Step 3, run:

```bash
# Fetch the latest version
git fetch origin <branch-name>

# Attempt to merge
git merge --no-commit --no-ff origin/<branch-name>

# If conflicts occur:
# 1. Resolve conflicts manually in the conflicted files
# 2. Or run the conflict resolution script again
# 3. Add resolved files
git add .

# 4. Commit the merge
git commit -m "Merge <branch-name> into main - $(date)"
```

### Step 5: Handle Merge Conflicts
If merge conflicts occur:

1. **Identify conflicted files:**
   ```bash
   git diff --name-only --diff-filter=U
   ```

2. **Resolve conflicts in each file:**
   - Look for `<<<<<<< HEAD`, `=======`, and `>>>>>>>` markers
   - Choose which version to keep or merge both
   - Remove conflict markers

3. **Use the conflict resolution script:**
   ```bash
   ./resolve_all_merge_conflicts.sh
   ```

### Step 6: Push Changes
```bash
# Push all merged changes to main
git push origin main
```

### Step 7: Clean Up
```bash
# Remove backup files
find . -name '*.backup.*' -delete

# Remove any remaining conflict markers
grep -r "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git
```

## Available Scripts

### 1. `resolve_all_merge_conflicts.sh`
- Automatically resolves merge conflicts in all files
- Removes conflict markers
- Creates backups of conflicted files

### 2. `resolve-all-conflicts-and-merge-prs.sh`
- Comprehensive script to handle all conflicts and merges
- Processes all cursor branches automatically
- Creates backup branches and handles errors

### 3. `step-by-step-merge.sh`
- Provides manual step-by-step instructions
- Useful when automatic scripts fail

## Conflict Resolution Strategy

### Critical Files (Keep Main Version)
- `package.json`
- `package-lock.json`
- `next.config.js`
- `tsconfig.json`
- `tailwind.config.js`

### Regular Files (Merge Both Versions)
- Source code files (`.tsx`, `.ts`, `.js`, `.jsx`)
- Documentation files
- Configuration files

### Backup Strategy
- Always create a backup branch before starting
- Create backups of conflicted files before resolving
- Use descriptive commit messages

## Expected Outcomes

### After Successful Resolution:
- ✅ All open PRs merged into main
- ✅ No merge conflicts remaining
- ✅ Build passes successfully
- ✅ All new pages and features available
- ✅ Website functionality improved

### Files That Should Be Present:
- All newly created service pages
- Updated navigation components
- Improved header, footer, and sidebar
- All AI platform pages
- White papers and webinars pages

## Troubleshooting

### Common Issues:
1. **Terminal connectivity problems** - Use manual steps
2. **Merge conflicts in critical files** - Keep main version
3. **Build failures after merge** - Check for syntax errors
4. **Missing dependencies** - Run `npm install` after merge

### Recovery Steps:
1. If merge fails, use `git merge --abort`
2. Restore from backup branch if needed
3. Resolve conflicts manually if scripts fail
4. Test build after each merge

## Next Steps After Resolution

1. **Test the build:**
   ```bash
   npm run build
   ```

2. **Test the application:**
   ```bash
   npm run dev
   ```

3. **Verify all pages load correctly**

4. **Check navigation and links**

5. **Deploy to production**

## Contact Information
If issues persist, contact the development team or refer to the project documentation.

---

**Note:** This guide assumes you have the necessary permissions to merge PRs and push to the main branch. Always ensure you have proper authorization before proceeding.