
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
console.log('🚀 Starting merge process for all open PRs...');
try {// Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console.log('✅ Git repository detected');
} catch (error) {console.error('❌ Not in a git repository');
    process.exit(1);

}
try {
    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }),
    if () {) {
  $2
}
        console.log ('⚠️  Working directory has changes. Stashing...'),
        exec_sync ('git stash push -m "Auto - stash before merge process"');
    }
    // Fetch latest changes;
    console.log ('📥 Fetching latest changes...'),
    exec_sync ('git fetch --all --prune'),
    // Switch to main branch;
    console.log ('🔄 Switching to main branch...'),
    exec_sync ('git checkout main'),
    // Pull latest changes;
    console.log ('📥 Pulling latest changes from main...'),
    try {
        exec_sync ('git pull origin main');
    } catch (error) {
        console.log ('⚠️  Merge conflicts detected. Resolving...'),
        // Find files with merge conflicts;


        const conflict_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' }),
        if () {) {
  $2
}
            console.log ('Found merge conflicts in:', conflict_files.trim ()),
            // Resolve conflicts by accepting our version;
            const files = conflict_files.trim ().split ('\n'),
            for (const file of files) {
                if () {) {
  $2
}
                    console.log (`Resolving conflicts in: ${file}`),
                    try {
                        exec_sync (`git checkout --ours "${file}"`);
                    } catch (e) {
                        exec_sync (`git checkout --theirs "${file}"`);

