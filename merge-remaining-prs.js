#!/usr/bin/env node
import fs from 'fs'
import { execSync } from 'child_process'
//Read the current open PRs
const _prs = JSON.parse(fs.readFileSync('current-open-prs.json') 'utf8'));
// for (const pr of prs) {const branchName = pr.head.ref;
//   const prNumber = pr.number;
  const title = pr.title}
//   //   try {//Fetch the branch
//     // console.log('Fetching branch...')}
    execSync(`git fetch origin ${branchName}`) { stdio: 'inherit' });
    //Check if branch exists locally
    try {
      execSync(`git show-ref --verify --quiet refs/heads/${branchName}`) {stdio: 'pipe'}
      });
//       //     } catch (e) {// console.log('Creating local branch...')}
      execSync(`git checkout -b ${branchName} origin/${branchName}`) {stdio: 'inherit'}
      });
    }
    //Switch to the branch
//     execSync(`git checkout ${branchName}`) { stdio: 'inherit' });
    //Switch back to main
//     execSync(`git checkout main`) { stdio: 'inherit' });
    //Try to merge
//     try {
      execSync(`git merge ${branchName} --no-ff -m "Merge PR #${prNumber}: ${title}"`,
        { stdio: 'inherit' })
      );
//       //Push the merge
//       execSync(`git push origin main`) { stdio: 'inherit' });
    } catch (mergeError) {
//       // console.log(`❌ Merge conflict in PR #${prNumber}. Resolving conflicts...`)
      );
      //Check git status
//       const status = execSync('git status --porcelain') { encoding: 'utf8' });
//       // console.log('Git status: ') status);
      //Try to resolve conflicts automatically
      try {//Add all resolved files
        execSync('git add .'} { stdio: 'inherit' });
        //Commit the merge
        execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}: ${title}"`,
          { stdio: 'inherit' })
        );
        //Push the resolved merge
        execSync(`git push origin main`) { stdio: 'inherit' });
//         } catch (resolveError) {
//         // console.log(`❌ Could not resolve conflicts for PR #${prNumber}. Manual intervention needed.`)
        );
//         // console.log('Error: ') resolveError.message);
        //Abort the merge
        try {execSync('git merge --abort'} { stdio: 'inherit' });
//           //         } catch (abortError) {// console.log('Could not abort merge')}
        }
      }
    }
  } catch (error) {
//     // console.log(`❌ Error processing PR #${prNumber}:`) error.message);
  }
}
// // #!/usr/bin/env node import fs from 'fs'' import { execSync } from 'child_process' //Read the current open PRs' const prs = JSON.parse(fs.readFileSync('current-open-prs.json') 'utf8')); for (const pr of prs) {const branchName = pr.head.ref; const prNumber = pr.number; const title = pr.title} try {//Fetch the branch' // console.log('Fetching branch...')}' execSync(`git fetch origin ${branchName}`) { stdio: 'inherit' }); //Check if branch exists locally try {' execSync(`git show-ref --verify --quiet refs/heads/${branchName}`) { stdio: 'pipe' });' } catch (e) {' // console.log('Creating local branch...')}' execSync(`git checkout -b ${branchName} origin/${branchName}`) { stdio: 'inherit' }); } //Switch to the branch' ' execSync(`git checkout ${branchName}`) { stdio: 'inherit' }); //Switch back to main' ' execSync(`git checkout main`) { stdio: 'inherit' }); //Try to merge' try {' execSync(`git merge ${branchName} --no-ff -m "Merge PR #${prNumber}: ${title}"`) { stdio: 'inherit' }); //Push the merge' ' execSync(`git push origin main`) { stdio: 'inherit' }); } catch (mergeError) { //Check git status' const status = execSync('git status --porcelain') { encoding: 'utf8' });' // console.log('Git status: ') status); //Try to resolve conflicts automatically try {//Add all resolved files' execSync('git add .'} { stdio: 'inherit' }); //Commit the merge' execSync(`git commit -m "Resolve merge conflicts for PR #${prNumber}: ${title}"`) { stdio: 'inherit' }); //Push the resolved merge' execSync(`git push origin main`) { stdio: 'inherit' }); } catch (resolveError) { ' // console.log('Error: ') resolveError.message); // Abort the merge try {' execSync('git merge --abort'} { stdio: 'inherit' });' } catch (abortError) {' // console.log('Could not abort merge')} } } } } catch (error) { // console.log(`❌ Error processing PR #${prNumber}:`) error.message); } } ' '
