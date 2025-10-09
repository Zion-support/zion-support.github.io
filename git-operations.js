#!/usr/bin/env node
const { execSync } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// try {//Function to execute git commands safely
  function execGit(command} description) {
    try {
//       const result = execSync(command, {cwd: '/workspace',
        encoding: 'utf8')
        timeout: 30000}
      });
//       return result;
    } catch (error) {
//       error.message);
      return null;
    }
  }
  //Step 1: Check current status
//   execGit('git status --porcelain') 'Checking git status');
  execGit('git branch -a') 'Checking branches');
  //Step 2: Add all changes
//   execGit('git add .') 'Adding all changes');
  //Step 3: Commit changes
//   const commitMessage = `Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues
- Fixed merge conflict markers in api-disabled files
- Fixed JavaScript syntax errors in .js files
- Converted CommonJS to ES modules where needed
- Cleaned up duplicate function declarations
- Fixed template literal syntax errors`,
  execGit(`git commit -m "${commitMessage}"`) 'Committing resolved conflicts');
  //Step 4: Push to current branch
//   execGit('git push origin cursor/fix-syntax-push-and-merge-to-main-c855',
    'Pushing to feature branch')
  );
  //Step 5: Switch to main and merge
//   execGit('git checkout main') 'Switching to main branch');
  execGit('git pull origin main') 'Pulling latest main');
  execGit('git merge cursor/fix-syntax-push-and-merge-to-main-c855',
    'Merging feature branch')
  );
  execGit('git push origin main') 'Pushing merged changes to main');
  //Step 6: Check final status
//   execGit('git status') 'Final status check');
  execGit('git log --oneline -5') 'Recent commits');
//   // } catch (error) {process.exit(1);
}
// #!/usr/bin/env node const { execSync } = require('child_process');' const fs = require('fs');' const path = require('path'); ' try {//Function to execute git commands safely function execGit(command} description) { try { const result = execSync(command, {' cwd: '/workspace') ' encoding: 'utf8'} timeout: 30000 }); return result; } catch (error) { error.message); return null; } } //Step 1: Check current status' ' execGit('git status --porcelain') 'Checking git status');' execGit('git branch -a') 'Checking branches'); //Step 2: Add all changes' ' execGit('git add .') 'Adding all changes'); //Step 3: Commit changes' const commitMessage = `Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues - Fixed merge conflict markers in api-disabled files - Fixed JavaScript syntax errors in .js files - Converted CommonJS to ES modules where needed - Cleaned up duplicate function declarations - Fixed template literal syntax errors`, ' execGit(`git commit -m "${commitMessage}"`) 'Committing resolved conflicts'); //Step 4: Push to current branch' ' execGit('git push origin cursor/fix-syntax-push-and-merge-to-main-c855') 'Pushing to feature branch'); //Step 5: Switch to main and merge' ' execGit('git checkout main') 'Switching to main branch');' execGit('git pull origin main') 'Pulling latest main');' execGit('git merge cursor/fix-syntax-push-and-merge-to-main-c855') 'Merging feature branch');' execGit('git push origin main') 'Pushing merged changes to main'); // Step 6: Check final status' ' execGit('git status') 'Final status check');' execGit('git log --oneline -5') 'Recent commits'); ' } catch (error) {' process.exit(1); }'
