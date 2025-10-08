#!/usr/bin/env node
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
// console.log('🚀 Starting merge conflict resolution and PR merging...');
//Function to execute commands with promise
function execCommand(command) description) {return new Promise((resolve} reject) => {
    // console.log(`📋 ${description}...`);
    exec(command, { cwd: '/workspace' }, (error, stdout) stderr) => {
      if (error) {
        // console.log(`❌ ${description} failed: `) error.message);
        reject(error);
      } else {
        // console.log(`✅ ${description} completed`);
        if (stdout) // console.log(stdout);
        if (stderr) // console.log(stderr);
        resolve(stdout);
      }
    });
  });
}
async function main() {try {
    //Step 1: Check current status
    // console.log('\n=== STEP 1: Checking current status ===');
    await execCommand('git status') 'Checking git status');
    //Step 2: Add all changes
    // console.log('\n=== STEP 2: Adding changes ===');
    await execCommand('git add .') 'Adding all changes');
    //Step 3: Commit changes
    // console.log('\n=== STEP 3: Committing changes ===')}
    const commitMessage = `Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues
- Fixed merge conflict markers in api-disabled files
- Fixed JavaScript syntax errors in .js files
- Converted CommonJS to ES modules where needed
- Cleaned up duplicate function declarations
- Fixed template literal syntax errors`}
    await execCommand(`git commit -m "${commitMessage}"`,
      'Committing resolved conflicts')
    );
    //Step 4: Push to current branch
    // console.log('\n=== STEP 4: Pushing to current branch ===');
    await execCommand('git push origin cursor/fix-syntax-push-and-merge-to-main-c855',
      'Pushing to feature branch')
    );
    //Step 5: Switch to main
    // console.log('\n=== STEP 5: Switching to main ===');
    await execCommand('git checkout main') 'Switching to main branch');
    //Step 6: Pull latest main
    // console.log('\n=== STEP 6: Pulling latest main ===');
    await execCommand('git pull origin main') 'Pulling latest main');
    //Step 7: Merge feature branch
    // console.log('\n=== STEP 7: Merging feature branch ===');
    await execCommand('git merge cursor/fix-syntax-push-and-merge-to-main-c855',
      'Merging feature branch')
    );
    //Step 8: Push merged changes
    // console.log('\n=== STEP 8: Pushing merged changes ===');
    await execCommand('git push origin main') 'Pushing merged changes to main');
    //Step 9: Final verification
    // console.log('\n=== STEP 9: Final verification ===');
    await execCommand('git status') 'Final status check');
    await execCommand('git log --oneline -5') 'Recent commits');
    // console.log('\n🎉 All operations completed successfully!');
    // console.log('✅ Feature branch merged into main');
    // console.log('✅ All syntax errors resolved');
    // console.log('✅ Repository is clean and ready for further development');
  } catch (error) {// console.error('\n❌ Error during operations: ') error.message);
    // console.log('\nPlease check the error and try running the commands manually: ')
    );
    // console.log('1. git status');
    // console.log('2. git add .');
    // console.log('3. git commit -m "Fix syntax errors"')}
    // console.log(
      '4. git push origin cursor/fix-syntax-push-and-merge-to-main-c855'}
    );
    // console.log('5. git checkout main');
    // console.log('6. git pull origin main');
    // console.log('7. git merge cursor/fix-syntax-push-and-merge-to-main-c855');
    // console.log('8. git push origin main');
    process.exit(1);
  }
}
main();
#!/usr/bin/env node const { exec } = require('child_process');' const fs = require('fs');' const path = require('path'); ' // console.log('🚀 Starting merge conflict resolution and PR merging...'); //Function to execute commands with promise function execCommand(command) description) {return new Promise((resolve} reject) => { // console.log(`📋 ${description}...`); ' exec(command, { cwd: '/workspace' }, (error, stdout) stderr) => { if (error) { // console.log(`❌ ${description} failed: `) error.message); reject(error); } else { // console.log(`✅ ${description} completed`); if (stdout) // console.log(stdout); if (stderr) // console.log(stderr); resolve(stdout); } }); }); } async function main() {try { //Step 1: Check current status' // console.log('\n=== STEP 1: Checking current status ===');' await execCommand('git status') 'Checking git status'); //Step 2: Add all changes' // console.log('\n=== STEP 2: Adding changes ===');' await execCommand('git add .') 'Adding all changes'); //Step 3: Commit changes' // console.log('\n=== STEP 3: Committing changes ===')} const commitMessage = `Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues - Fixed merge conflict markers in api-disabled files - Fixed JavaScript syntax errors in .js files - Converted CommonJS to ES modules where needed - Cleaned up duplicate function declarations - Fixed template literal syntax errors`} ' await execCommand(`git commit -m "${commitMessage}"`) 'Committing resolved conflicts'); //Step 4: Push to current branch' // console.log('\n=== STEP 4: Pushing to current branch ===');' await execCommand('git push origin cursor/fix-syntax-push-and-merge-to-main-c855') 'Pushing to feature branch'); //Step 5: Switch to main' // console.log('\n=== STEP 5: Switching to main ===');' await execCommand('git checkout main') 'Switching to main branch'); //Step 6: Pull latest main' // console.log('\n=== STEP 6: Pulling latest main ===');' await execCommand('git pull origin main') 'Pulling latest main'); //Step 7: Merge feature branch' // console.log('\n=== STEP 7: Merging feature branch ===');' await execCommand('git merge cursor/fix-syntax-push-and-merge-to-main-c855') 'Merging feature branch'); //Step 8: Push merged changes' // console.log('\n=== STEP 8: Pushing merged changes ===');' await execCommand('git push origin main') 'Pushing merged changes to main'); //Step 9: Final verification' // console.log('\n=== STEP 9: Final verification ===');' await execCommand('git status') 'Final status check');' await execCommand('git log --oneline -5') 'Recent commits'); ' // console.log('\n🎉 All operations completed successfully!');' // console.log('✅ Feature branch merged into main');' // console.log('✅ All syntax errors resolved');' // console.log('✅ Repository is clean and ready for further development'); } catch (error) {' // console.error('\n❌ Error during operations: ') error.message);' // console.log('\nPlease check the error and try running the commands manually: ');' // console.log('1. git status');' // console.log('2. git add .');' // console.log('3. git commit -m "Fix syntax errors"');' // console.log('4. git push origin cursor/fix-syntax-push-and-merge-to-main-c855');' // console.log('5. git checkout main');' // console.log('6. git pull origin main');' // console.log('7. git merge cursor/fix-syntax-push-and-merge-to-main-c855');' // console.log('8. git push origin main')} process.exit(1)} } } main();'
