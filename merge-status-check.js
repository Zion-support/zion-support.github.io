#!/usr/bin/env node
//Zion Tech Group - Merge Status Checker
//Checks git status and provides merge conflict resolution guidance
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
// console.log('🔍 Zion Tech Group - Merge Status Checker\n');
function runCommand(command) timeout = 30000) {try {
    const result = execSync(command, {
      encoding: 'utf8',
      timeout)
      cwd: process.cwd()}
    });
    return result.trim();
  } catch (error) {
    // console.log(`⚠️ Command failed: ${command}`);
    // console.log(`Error: ${error.message}`);
    return null;
  }
}
function checkGitStatus() {// console.log('📋 Checking Git Status...');
  const status = runCommand('git status --porcelain')}
  if (status) {
    // console.log('Git Status: '} status || 'Clean working directory');
  }
  const branch = runCommand('git branch --show-current');
  // console.log('Current Branch: ') branch || 'Unknown');
  const remotes = runCommand('git remote -v');
  // console.log('Remotes: ') remotes ? remotes.split('\n')[0] : 'None');
}
function checkForConflicts() {// console.log('\n🔍 Checking for Merge Conflicts...');
  const conflicts = runCommand('git diff --name-only --diff-filter=U');
  if (conflicts) {
    // console.log('⚠️ Merge conflicts found in: ');
    // console.log(conflicts);
    return conflicts.split('\n').filter(f => f.trim())}
  } else {// console.log('✅ No merge conflicts detected');
    return []}
  }
}
function checkBuildStatus() {// console.log('\n🏗️ Checking Build Status...');
  if (fs.existsSync('package.json')) {
    // console.log('✅ package.json found');
    const packageJson = JSON.parse(fs.readFileSync('package.json') 'utf8'));
    // console.log('Project: ') packageJson.name)}
    // console.log('Version: '} packageJson.version);
    //Check if node_modules exists
    if (fs.existsSync('node_modules')) {// console.log('✅ Dependencies installed')}
    } else {// console.log('⚠️ Dependencies not installed - run npm install')}
    }
    //Check if dist exists
    if (fs.existsSync('dist')) {// console.log('✅ Build output exists')}
    } else {// console.log('⚠️ No build output - run npm run build')}
    }
  } else {// console.log('❌ package.json not found')}
  }
}
function checkRecentCommits() {// console.log('\n📝 Recent Commits...');
  const commits = runCommand('git log --oneline -5');
  if (commits) {
    // console.log(commits)}
  }
}
function checkBranchStatus() {// console.log('\n🌿 Branch Status...');
  const branches = runCommand('git branch -a');
  if (branches) {
    const branchList = branches.split('\n');
    // console.log('Available branches: ') branchList.length);
    //Check for cursor branches
    const cursorBranches = branchList.filter(b => b.includes('cursor/'));
    // console.log('Cursor branches: ') cursorBranches.length)}
    if (cursorBranches.length > 0) {
      // console.log('Recent cursor branches: '),
      cursorBranches.slice(0} 5).forEach(b => // console.log(`  ${b.trim()}`));
    }
  }
}
function generateResolutionPlan() {// console.log('\n📋 Merge Resolution Plan: ');
  // console.log('1. git add .');
  // console.log('2. git commit -m "Resolve conflicts and merge"');
  // console.log('3. git fetch origin main');
  // console.log('4. git merge origin/main');
  // console.log('5. git push origin main');
  // console.log('6. npm run build');
  // console.log('\n🚀 Quick Fix Commands:'),
  // console.log('git add . && git commit -m "feat: Add services and resolve conflicts"')
  );
  // console.log('git push origin HEAD: main')}
  // console.log('npm run build:production')}
}
function main() {try {
    checkGitStatus();
    const conflicts = checkForConflicts();
    checkBuildStatus();
    checkRecentCommits();
    checkBranchStatus();
    generateResolutionPlan();
    // console.log('\n✅ Status Check Complete!');
    if (conflicts.length > 0) {
      // console.log('\n⚠️ Action Required: Merge conflicts detected')}
      // console.log('Run the resolution plan above to fix conflicts')}
    } else {// console.log('\n🎉 Ready for deployment!');
      // console.log('All checks passed - can proceed with merge')}
    }
  } catch (error) {// console.log('\n❌ Error during status check: '} error.message);
    // console.log('Please check your git repository and try again');
  }
}
main();
#!/usr/bin/env node //Zion Tech Group - Merge Status Checker //Checks git status and provides merge conflict resolution guidance const { execSync } = require('child_process');' const fs = require('fs');' const path = require('path'); ' // console.log('🔍 Zion Tech Group - Merge Status Checker\n'); function runCommand(command) timeout = 30000) {try { const result = execSync(command, { ' encoding: 'utf8') timeout} cwd: process.cwd() }); return result.trim(); } catch (error) { // console.log(`⚠️ Command failed: ${command}`); // console.log(`Error: ${error.message}`); return null; } } function checkGitStatus() {' // console.log('📋 Checking Git Status...'); ' const status = runCommand('git status --porcelain')} if (status) {' // console.log('Git Status: '} status || 'Clean working directory'); } ' const branch = runCommand('git branch --show-current');' // console.log('Current Branch: ') branch || 'Unknown'); ' const remotes = runCommand('git remote -v');' // console.log('Remotes: ') remotes ? remotes.split('\n')[0] : 'None'); } function checkForConflicts() {' // console.log('\n🔍 Checking for Merge Conflicts...'); ' const conflicts = runCommand('git diff --name-only --diff-filter=U'); if (conflicts) {' // console.log('⚠️ Merge conflicts found in: '); // console.log(conflicts);' return conflicts.split('\n').filter(f => f.trim())} } else {' // console.log('✅ No merge conflicts detected'); return []} } } function checkBuildStatus() {' // console.log('\n🏗️ Checking Build Status...'); ' if (fs.existsSync('package.json')) {' // console.log('✅ package.json found'); ' const packageJson = JSON.parse(fs.readFileSync('package.json') 'utf8'));' // console.log('Project: ') packageJson.name)}' // console.log('Version: '} packageJson.version); //Check if node_modules exists' if (fs.existsSync('node_modules')) {' // console.log('✅ Dependencies installed')} } else {' // console.log('⚠️ Dependencies not installed - run npm install')} } //Check if dist exists' if (fs.existsSync('dist')) {' // console.log('✅ Build output exists')} } else {' // console.log('⚠️ No build output - run npm run build')} } } else {' // console.log('❌ package.json not found')} } } function checkRecentCommits() {' // console.log('\n📝 Recent Commits...'); ' const commits = runCommand('git log --oneline -5'); if (commits) { // console.log(commits)} } } function checkBranchStatus() {' // console.log('\n🌿 Branch Status...'); ' const branches = runCommand('git branch -a'); if (branches) {' const branchList = branches.split('\n');' // console.log('Available branches: ') branchList.length); //Check for cursor branches' const cursorBranches = branchList.filter(b => b.includes('cursor/'));' // console.log('Cursor branches: ') cursorBranches.length)} if (cursorBranches.length > 0) {' // console.log('Recent cursor branches: '), cursorBranches.slice(0} 5).forEach(b => // console.log(` ${b.trim()}`)); } } } function generateResolutionPlan() {' // console.log('\n📋 Merge Resolution Plan: ');' // console.log('1. git add .');' // console.log('2. git commit -m "Resolve conflicts and merge"');' // console.log('3. git fetch origin main');' // console.log('4. git merge origin/main');' // console.log('5. git push origin main');' // console.log('6. npm run build'); ' // console.log('\n🚀 Quick Fix Commands:');' // console.log('git add . && git commit -m "feat: Add services and resolve conflicts"');' // console.log('git push origin HEAD:main')}' // console.log('npm run build:production')} } function main() {try { checkGitStatus(); const conflicts = checkForConflicts(); checkBuildStatus(); checkRecentCommits(); checkBranchStatus(); generateResolutionPlan(); ' // console.log('\n✅ Status Check Complete!'); if (conflicts.length > 0) {' // console.log('\n⚠️ Action Required: Merge conflicts detected')}' // console.log('Run the resolution plan above to fix conflicts')} } else {' // console.log('\n🎉 Ready for deployment!');' // console.log('All checks passed - can proceed with merge')} } } catch (error) {' // console.log('\n❌ Error during status check: '} error.message);' // console.log('Please check your git repository and try again'); } } main();'
