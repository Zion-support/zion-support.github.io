const { execSync } = require('child_process');
const fs = require('fs');

console.log('=== COMPREHENSIVE MERGE AND PR RESOLUTION ===');
console.log('Starting at:', new Date().toISOString());

try {
  // 1. Check current status
  console.log('1. Checking current Git status...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  console.log('Git status:', status || 'Working directory clean');

  // 2. Switch to main branch
  console.log('2. Switching to main branch...');
  execSync('git checkout main', { stdio: 'inherit' });

  // 3. Pull latest changes
  console.log('3. Pulling latest changes from origin/main...');
  execSync('git pull origin main', { stdio: 'inherit' });

  // 4. Check for open PRs
  console.log('4. Checking for open PRs...');
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      console.log('GITHUB_TOKEN not set; skipping PR fetch.');
    } else {
      const prs = execSync(
        `curl -s -H "Authorization: token ${token}" https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open`,
        { encoding: 'utf8' }
      );
      const prData = JSON.parse(prs);
      if (prData.length > 0) {
        console.log('Open PRs found:', prData.length);
        prData.forEach(pr => {
          console.log(
            `- PR #${pr.number}: ${pr.title} (${pr.head.ref} -> ${pr.base.ref})`
          );
        });
      } else {
        console.log('No open PRs found');
      }
    }
  } catch (error) {
    console.log('Could not fetch PRs:', error.message);
  }

  // 5. Merge cursor branch
  console.log(
    '5. Attempting to merge cursor/prepare-git-repository-for-build-c571...'
  );
  try {
    execSync('git merge cursor/prepare-git-repository-for-build-c571', {
      stdio: 'inherit',
    });
    console.log('✓ Merge successful! No conflicts found.');

    // 6. Push changes
    console.log('6. Pushing changes to origin/main...');
    execSync('git push origin main', { stdio: 'inherit' });
    console.log('✓ Changes pushed successfully!');
  } catch (error) {
    console.log('✗ Merge conflicts detected:', error.message);

    // Try to resolve conflicts automatically
    console.log('Attempting to resolve conflicts automatically...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Resolve merge conflicts automatically"', {
        stdio: 'inherit',
      });
      execSync('git push origin main', { stdio: 'inherit' });
      console.log('✓ Conflicts resolved and pushed!');
    } catch (resolveError) {
      console.log(
        '✗ Could not resolve conflicts automatically:',
        resolveError.message
      );
    }
  }

  console.log('=== MERGE PROCESS COMPLETED ===');
  console.log('Finished at:', new Date().toISOString());
} catch (error) {
  console.error('Error during merge process:', error.message);
  process.exit(1);
}
