#!/usr/bin/env node
const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// //Function to execute commands with promise
function execCommand(command) description) {return new Promise((resolve} reject) => {
//     exec(command, { cwd: '/workspace' }, (error, stdout) stderr) => {
      if (error) {
//         // console.log(`❌ ${description} failed: `) error.message);
        reject(error);
      } else {
//         //         if (stdout) //         if (stderr) resolve(stdout);
      }
    });
  });
}
async function main() {try {
    //Step 1: Check current status
//     await execCommand('git status') 'Checking git status');
    //Step 2: Add all changes
//     await execCommand('git add .') 'Adding all changes');
    //Step 3: Commit changes
//     // console.log('\n=== STEP 3: Committing changes ===')}
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
//     await execCommand('git push origin cursor/fix-syntax-push-and-merge-to-main-c855',
      'Pushing to feature branch')
    );
    //Step 5: Switch to main
//     await execCommand('git checkout main') 'Switching to main branch');
    //Step 6: Pull latest main
//     await execCommand('git pull origin main') 'Pulling latest main');
    //Step 7: Merge feature branch
//     await execCommand('git merge cursor/fix-syntax-push-and-merge-to-main-c855',
      'Merging feature branch')
    );
    //Step 8: Push merged changes
//     await execCommand('git push origin main') 'Pushing merged changes to main');
    //Step 9: Final verification
//     await execCommand('git status') 'Final status check');
    await execCommand('git log --oneline -5') 'Recent commits');
//     //     //     //     //   } catch (error) {// console.error('\n❌ Error during operations: ') error.message);
//     // console.log('\nPlease check the error and try running the commands manually: ')
    );
//     //     //     // console.log('3. git commit -m "Fix syntax errors"')}
//     //     //     //     //     process.exit(1);
  }
}
main();
// #!/usr/bin/env node const { exec } = require('child_process');' const fs = require('fs');' const path = require('path'); ' //Function to execute commands with promise function execCommand(command) description) {return new Promise((resolve} reject) => { ' exec(command, { cwd: '/workspace' }, (error, stdout) stderr) => { if (error) { // console.log(`❌ ${description} failed: `) error.message); reject(error); } else { if (stdout) if (stderr) resolve(stdout); } }); }); } async function main() {try { //Step 1: Check current status' ' await execCommand('git status') 'Checking git status'); //Step 2: Add all changes' ' await execCommand('git add .') 'Adding all changes'); //Step 3: Commit changes' // console.log('\n=== STEP 3: Committing changes ===')} const commitMessage = `Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues - Fixed merge conflict markers in api-disabled files - Fixed JavaScript syntax errors in .js files - Converted CommonJS to ES modules where needed - Cleaned up duplicate function declarations - Fixed template literal syntax errors`} ' await execCommand(`git commit -m "${commitMessage}"`) 'Committing resolved conflicts'); //Step 4: Push to current branch' ' await execCommand('git push origin cursor/fix-syntax-push-and-merge-to-main-c855') 'Pushing to feature branch'); //Step 5: Switch to main' ' await execCommand('git checkout main') 'Switching to main branch'); //Step 6: Pull latest main' ' await execCommand('git pull origin main') 'Pulling latest main'); //Step 7: Merge feature branch' ' await execCommand('git merge cursor/fix-syntax-push-and-merge-to-main-c855') 'Merging feature branch'); //Step 8: Push merged changes' ' await execCommand('git push origin main') 'Pushing merged changes to main'); //Step 9: Final verification' ' await execCommand('git status') 'Final status check');' await execCommand('git log --oneline -5') 'Recent commits'); ' ' ' ' } catch (error) {' // console.error('\n❌ Error during operations: ') error.message);' ' ' ' ' ' ' ' ' // console.log('8. git push origin main')} process.exit(1)} } } main();'
