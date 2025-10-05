# Manual Execution Guide for PR Merge Resolution

## Overview
This guide provides step-by-step instructions for manually executing the PR merge resolution process when terminal access is restored or for use via GitHub web interface.

## Prerequisites
- Access to the repository
- Git command line tools
- Node.js and npm installed
- GitHub access for web-based operations

## Execution Options

### Option 1: Automated Script Execution (Recommended)

#### Step 1: Execute Primary Merge Script
```bash
cd /workspace
chmod +x immediate_pr_resolution.sh
./immediate_pr_resolution.sh
```

#### Step 2: If Primary Script Fails, Use Rapid Merge
```bash
chmod +x rapid_pr_merge.sh
./rapid_pr_merge.sh
```

#### Step 3: For Comprehensive Solution
```bash
node complete_pr_merge_solution.cjs
```

### Option 2: Manual Git Operations

#### Step 1: Check Current Status
```bash
cd /workspace
git status
git branch --show-current
```

#### Step 2: Switch to Main Branch
```bash
git checkout main
git pull origin main
```

#### Step 3: Merge Each PR Branch
```bash
# Merge PR #24703
git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-44c4 --no-ff -m "Merge PR #24703"

# Merge PR #24702
git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f3e7 --no-ff -m "Merge PR #24702"

# Merge PR #24701
git merge origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d21e --no-ff -m "Merge PR #24701"

# Merge PR #24866
git merge origin/cursor/fix-errors-and-merge-to-main-de0a --no-ff -m "Merge PR #24866"

# Merge PR #24960 (check the actual branch name)
git merge origin/[branch-name] --no-ff -m "Merge PR #24960"
```

#### Step 4: Resolve Conflicts (if any)
```bash
# Check for conflicts
git status

# For TypeScript/React files, use main branch changes
git checkout --ours src/components/SomeComponent.tsx
git add src/components/SomeComponent.tsx

# For JSON files, use PR branch changes
git checkout --theirs package.json
git add package.json

# Commit the merge
git commit --no-edit
```

#### Step 5: Push Changes
```bash
git push origin main
```

### Option 3: GitHub Web Interface

#### Step 1: Access Repository
1. Go to https://github.com/Zion-Holdings/zion.app
2. Click on "Pull requests" tab
3. Review open PRs

#### Step 2: Merge Each PR
1. Click on each open PR
2. If conflicts exist, click "Resolve conflicts"
3. Use the web editor to resolve conflicts
4. Click "Mark as resolved" for each file
5. Click "Commit merge"
6. Click "Merge pull request"

#### Step 3: Delete Branches
1. After merging, delete the feature branches
2. This helps keep the repository clean

## Conflict Resolution Strategies

### File Type-Specific Strategies

#### TypeScript/React Files (.tsx, .ts, .jsx, .js)
- **Strategy**: Use main branch changes
- **Reason**: Preserve main branch stability
- **Command**: `git checkout --ours <file>`

#### JSON Files (.json)
- **Strategy**: Use PR branch changes
- **Reason**: Accept configuration updates
- **Command**: `git checkout --theirs <file>`

#### Configuration Files (.config.js, .env, etc.)
- **Strategy**: Merge both changes
- **Reason**: Combine improvements
- **Manual**: Edit file to include both changes

#### Documentation Files (.md, .txt)
- **Strategy**: Use PR branch changes
- **Reason**: Accept documentation improvements
- **Command**: `git checkout --theirs <file>`

## Post-Merge Actions

### Step 1: Run Code Quality Checks
```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run type checking
npm run type-check

# Run tests
npm test
```

### Step 2: Build Verification
```bash
# Fast build
npm run build:fast

# Full build
npm run build
```

### Step 3: Run Improvements
```bash
# Execute comprehensive improvements
node comprehensive_improvements.cjs
```

## Troubleshooting

### Common Issues

#### 1. Merge Conflicts
- **Symptom**: Git reports merge conflicts
- **Solution**: Use the conflict resolution strategies above
- **Prevention**: Pull latest changes before merging

#### 2. Build Failures
- **Symptom**: npm run build fails
- **Solution**: Check for syntax errors and fix them
- **Prevention**: Run type checking before merging

#### 3. Linting Errors
- **Symptom**: ESLint reports errors
- **Solution**: Run npm run lint:fix
- **Prevention**: Use pre-commit hooks

#### 4. Permission Issues
- **Symptom**: Cannot push to main branch
- **Solution**: Check repository permissions
- **Prevention**: Use proper authentication

### Error Recovery

#### If Merge Fails
```bash
# Abort the merge
git merge --abort

# Check status
git status

# Try again with different strategy
git merge origin/branch-name --strategy-option=ours
```

#### If Push Fails
```bash
# Pull latest changes
git pull origin main

# Resolve any conflicts
git status

# Push again
git push origin main
```

## Verification Checklist

### Pre-Merge
- [ ] All open PRs identified
- [ ] Current branch is main
- [ ] Latest changes pulled
- [ ] Backup created (optional)

### During Merge
- [ ] Each PR merged successfully
- [ ] Conflicts resolved appropriately
- [ ] Changes committed
- [ ] No build errors

### Post-Merge
- [ ] Changes pushed to main
- [ ] Linting passes
- [ ] Type checking passes
- [ ] Build succeeds
- [ ] Tests pass
- [ ] Documentation updated

## Success Criteria

### Merge Success
- ✅ All open PRs merged into main
- ✅ No merge conflicts remaining
- ✅ All changes pushed to remote
- ✅ Repository is in clean state

### Code Quality Success
- ✅ Linting passes without errors
- ✅ Type checking passes
- ✅ Build completes successfully
- ✅ Tests pass (if available)
- ✅ No new warnings or errors

## Final Steps

### 1. Clean Up
```bash
# Delete merged branches
git branch -d feature-branch-name

# Clean up remote tracking branches
git remote prune origin
```

### 2. Update Documentation
- Update CHANGELOG.md
- Update README.md if needed
- Document any breaking changes

### 3. Notify Team
- Inform team of completed merges
- Share any important changes
- Update project status

## Emergency Procedures

### If Something Goes Wrong
1. **Stop**: Don't continue if errors persist
2. **Assess**: Determine the scope of the problem
3. **Rollback**: Use `git reset --hard HEAD~1` if needed
4. **Report**: Document the issue and solution
5. **Retry**: Attempt the process again with fixes

### Backup Strategy
```bash
# Create backup branch before starting
git checkout -b backup-before-merge
git push origin backup-before-merge

# Switch back to main
git checkout main
```

## Conclusion

This manual execution guide provides comprehensive instructions for completing the PR merge resolution process. Choose the appropriate execution option based on your access level and preferences. The automated scripts are recommended for efficiency, but manual operations provide more control and visibility into the process.

**Remember**: Always test the merge process in a development environment first if possible, and maintain backups of important changes.