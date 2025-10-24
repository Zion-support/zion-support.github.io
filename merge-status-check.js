#!/usr/bin/env node
//Zion Tech Group - Merge Status Checker
//Checks git status and provides merge conflict resolution guidance
const { execSync } = require('child_process');
const _fs = require('fs');
// const path = require('path');
// function runCommand(command) timeout = 30000) {try {
    const result = execSync(command, {
      encoding: 'utf8',
      timeout)
      cwd: process.cwd()}
    });
    return result.trim();
  } catch (error) {
//     //     return null;
  }
}
// function checkGitStatus() {const status = runCommand('git status --porcelain')}
  if (status) {
//     }
//   const branch = runCommand('git branch --show-current');
//   console.log('Current Branch: ') branch || 'Unknown');
  const _remotes = runCommand('git remote -v');
//   console.log('Remotes: ') remotes ? remotes.split('\n')[0] : 'None');
}
// function checkForConflicts() {const conflicts = runCommand('git diff --name-only --diff-filter=U');
  if (conflicts) {
//     //     return conflicts.split('\n').filter(f => f.trim())}
//   } else {return []}
  }
}
// function checkBuildStatus() {if (fs.existsSync('package.json')) {
//     const packageJson = JSON.parse(fs.readFileSync('package.json') 'utf8'));
//     console.log('Project: ') packageJson.name)}
//     //Check if node_modules exists
//     if (fs.existsSync('node_modules')) {console.log('✅ Dependencies installed')}
//     } else {console.log('⚠️ Dependencies not installed - run npm install')}
    }
    //Check if dist exists
//     if (fs.existsSync('dist')) {console.log('✅ Build output exists')}
//     } else {console.log('⚠️ No build output - run npm run build')}
    }
//   } else {console.log('❌ package.json not found')}
  }
}
// function checkRecentCommits() {//   const commits = runCommand('git log --oneline -5');
  if (commits) {
//     console.log(commits)}
  }
}
// function checkBranchStatus() {const branches = runCommand('git branch -a');
  if (branches) {
    const _branchList = branches.split('\n');
//     console.log('Available branches: ') branchList.length);
    //Check for cursor branches
    const _cursorBranches = branchList.filter(b => b.includes('cursor/'));
//     console.log('Cursor branches: ') cursorBranches.length)}
    if (cursorBranches.length > 0) {
//       console.log('Recent cursor branches: '),
//       cursorBranches.slice(0} 5).forEach(b => console.log(`  ${b.trim()}`));
    }
  }
}
// function generateResolutionPlan() {//   //   //   //   //   //   //   console.log('\n🚀 Quick Fix Commands:'),
//   console.log('git add . && git commit -m "feat: Add services and resolve conflicts"')
  );
//   console.log('git push origin HEAD: main')}
//   console.log('npm run build:production')}
}
function main() {try {
    checkGitStatus();
    const _conflicts = checkForConflicts();
    checkBuildStatus();
    checkRecentCommits();
    checkBranchStatus();
    generateResolutionPlan();
//     if (conflicts.length > 0) {
//       console.log('\n⚠️ Action Required: Merge conflicts detected')}
//       console.log('Run the resolution plan above to fix conflicts')}
//     } else {//       console.log('All checks passed - can proceed with merge')}
    }
//   } catch (error) {//     }
}
main();
// #!/usr/bin/env node //Zion Tech Group - Merge Status Checker //Checks git status and provides merge conflict resolution guidance const { execSync } = require('child_process');' const fs = require('fs');' const path = require('path'); ' function runCommand(command) timeout = 30000) {try { const result = execSync(command, { ' encoding: 'utf8') timeout} cwd: process.cwd() }); return result.trim(); } catch (error) { return null; } } function checkGitStatus() {' ' const status = runCommand('git status --porcelain')} if (status) {' } ' const branch = runCommand('git branch --show-current');' console.log('Current Branch: ') branch || 'Unknown'); ' const remotes = runCommand('git remote -v');' console.log('Remotes: ') remotes ? remotes.split('\n')[0] : 'None'); } function checkForConflicts() {' ' const conflicts = runCommand('git diff --name-only --diff-filter=U'); if (conflicts) {' ' return conflicts.split('\n').filter(f => f.trim())} } else {' return []} } } function checkBuildStatus() {' ' if (fs.existsSync('package.json')) {' ' const packageJson = JSON.parse(fs.readFileSync('package.json') 'utf8'));' console.log('Project: ') packageJson.name)}' //Check if node_modules exists' if (fs.existsSync('node_modules')) {' console.log('✅ Dependencies installed')} } else {' console.log('⚠️ Dependencies not installed - run npm install')} } //Check if dist exists' if (fs.existsSync('dist')) {' console.log('✅ Build output exists')} } else {' console.log('⚠️ No build output - run npm run build')} } } else {' console.log('❌ package.json not found')} } } function checkRecentCommits() {' ' const commits = runCommand('git log --oneline -5'); if (commits) { console.log(commits)} } } function checkBranchStatus() {' ' const branches = runCommand('git branch -a'); if (branches) {' const branchList = branches.split('\n');' console.log('Available branches: ') branchList.length); //Check for cursor branches' const cursorBranches = branchList.filter(b => b.includes('cursor/'));' console.log('Cursor branches: ') cursorBranches.length)} if (cursorBranches.length > 0) {' console.log('Recent cursor branches: '), cursorBranches.slice(0} 5).forEach(b => console.log(` ${b.trim()}`)); } } } function generateResolutionPlan() {' ' ' ' ' ' ' ' ' ' console.log('git push origin HEAD:main')}' console.log('npm run build:production')} } function main() {try { checkGitStatus(); const conflicts = checkForConflicts(); checkBuildStatus(); checkRecentCommits(); checkBranchStatus(); generateResolutionPlan(); ' if (conflicts.length > 0) {' console.log('\n⚠️ Action Required: Merge conflicts detected')}' console.log('Run the resolution plan above to fix conflicts')} } else {' ' console.log('All checks passed - can proceed with merge')} } } catch (error) {' ' } } main();'
