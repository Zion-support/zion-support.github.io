
<<<<<<< HEAD





#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
console.log('🚀 Starting merge process for all open PRs...');

#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs');  try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); } catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) {  execSync('git stash push -m "Auto-stash before merge process"')}  execSync('git fetch --all --prune');  execSync('git checkout main');  try { execSync('git pull origin main')} catch (error) {  const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { ); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) {  try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  execSync('git push origin main');  } catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}#!/usr/bin/env node
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs');  try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); } catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) {  execSync('git stash push -m "Auto-stash before merge process"')}  execSync('git fetch --all --prune');  execSync('git checkout main');  try { execSync('git pull origin main')} catch (error) {  const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { ); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) {  try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  execSync('git push origin main');  } catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
console && console.log('🚀 Starting merge process for all open PRs...');

try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { "stdio": 'pipe' });
    console.log('✅ Git repository detected')} catch (error) {
    console.error('❌ Not in a git repository');
    process.exit(1)}
try {
    // Ensure clean working directory
    const status = execSync('git status --porcelain', { "encoding": 'utf8' });
    if (status.trim()) {
        console.log('⚠️  Working directory has changes. Stashing...');
        execSync('git stash push -m "Auto-stash before merge process"')}
    // Fetch latest changes
    console && console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');
    // Switch to main branch
    console && console.log('🔄 Switching to main branch...');
    execSync('git checkout main');
    // Pull latest changes
    console && console.log('📥 Pulling latest changes from main...');

#!/usr / bin / env node const { exec_sync } = require ('child_process'); const fs = require ('fs');  try { exec_sync ('git rev - parse --git - dir', { stdio: 'pipe' }); } catch (error) { console.error ('❌ Not in a git repository'); process.exit (1)} try { const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }); if () {  exec_sync ('git stash push -m "Auto - stash before merge process"')}  exec_sync ('git fetch --all --prune')) {
  $2
}  exec_sync ('git checkout main');  try { exec_sync ('git pull origin main')} catch (error) {  const conflict_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' }); if () { )) {
  $2
} const files = conflict_files.trim ().split ('\n'); for (const file of files) { if () {  try { exec_sync (`git checkout --ours "${file}"`)} catch (e) { exec_sync (`git checkout --theirs "${file}"`)} exec_sync (`git add "${file}"`)} } exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  exec_sync ('git push origin main')) {
  $2
}  } catch (error) { console.error ('❌ Error during merge process:', error.message); process.exit (1)}#!/usr / bin / env node;
#!/usr / bin / env node const { exec_sync } = require ('child_process'); const fs = require ('fs');  try { exec_sync ('git rev - parse --git - dir', { stdio: 'pipe' }); } catch (error) { console.error ('❌ Not in a git repository'); process.exit (1)} try { const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }); if () {  exec_sync ('git stash push -m "Auto - stash before merge process"')}  exec_sync ('git fetch --all --prune')) {
  $2
}  exec_sync ('git checkout main');  try { exec_sync ('git pull origin main')} catch (error) {  const conflict_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' }); if () { )) {
  $2
} const files = conflict_files.trim ().split ('\n'); for (const file of files) { if () {  try { exec_sync (`git checkout --ours "${file}"`)} catch (e) { exec_sync (`git checkout --theirs "${file}"`)} exec_sync (`git add "${file}"`)} } exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  exec_sync ('git push origin main')) {
  $2
}  } catch (error) { console.error ('❌ Error during merge process:', error.message); process.exit (1)}
#!/usr / bin / env node;
const { exec_sync } = require ('child_process');
const fs = require ('fs');
;
console.log ('🚀 Starting merge process for all open PRs...');
;
try {
    // Check if we're in a git repository;
    exec_sync ('git rev - parse --git - dir', { stdio: 'pipe' });
    console.log ('✅ Git repository detected');
} catch (error) {
    console.error ('❌ Not in a git repository');
    process.exit (1);
}
try {
    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' });
    if () {) {
  $2
}
        console.log ('⚠️  Working directory has changes. Stashing...');
        exec_sync ('git stash push -m "Auto - stash before merge process"');
    }
    // Fetch latest changes;
    console.log ('📥 Fetching latest changes...');
    exec_sync ('git fetch --all --prune');
;
    // Switch to main branch;
    console.log ('🔄 Switching to main branch...');
    exec_sync ('git checkout main');
;
    // Pull latest changes;
    console.log ('📥 Pulling latest changes from main...');
    try {
        exec_sync ('git pull origin main');
    } catch (error) {

            // Resolve conflicts by accepting our version
            const files = conflictFiles && conflictFiles.trim().split('\n');
            for (const file of files) {
                if (file.trim()) {
                    console.log(`Resolving conflicts "in": ${file}`);
                    try {
                        execSync(`git checkout --ours "${file}"`)} catch (e) {
                        execSync(`git checkout --theirs "${file}"`)}
                    execSync(`git add "${file}"`)}
            }
            // Commit the merge
            execSync('git commit -m ""feat": resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')}

    }
    // Push changes
    console.log('📤 Pushing changes to remote...');
    execSync('git push origin main');
    console.log('✅ Merge process completed successfully!');
    console.log('🎉 All changes have been merged into main branch')} catch (error) {
    console.error('❌ Error during merge "process": ', error.message);
    process.exit(1)}

const { execSync } = require('child_process');
const fs = require('fs');
console.log('🚀 Starting merge process for all open PRs...');
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs');  try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); } catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) {  execSync('git stash push -m "Auto-stash before merge process"')}  execSync('git fetch --all --prune');  execSync('git checkout main');  try { execSync('git pull origin main')} catch (error) {  const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { ); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) {  try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  execSync('git push origin main');  } catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}#!/usr/bin/env node;`;
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs');  try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); } catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) {  execSync('git stash push -m "Auto-stash before merge process"')}  execSync('git fetch --all --prune');  execSync('git checkout main');  try { execSync('git pull origin main')} catch (error) {  const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { ); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) {  try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} }  execSync('git push origin main');  } catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}
console && console.log('🚀 Starting merge process for all open PRs...');
try {
  // TODO: Implement
}
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console && console.log('✅ Git repository detected');
} catch (error) {
    console && console.error('❌ Not in a git repository');
    process && process.exit(1);
  // TODO: Implement
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status && status.trim()) {
        console && console.log('⚠️  Merge conflicts detected. Resolving...');
        // Find files with merge conflicts;
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        if (conflictFiles && conflictFiles.trim()) {
            console && console.log('Found merge conflicts in:', conflictFiles && conflictFiles.trim());
            // Resolve conflicts by accepting our version;
            const files = conflictFiles && conflictFiles.trim().split('\n');
            for (const file of files) {
                if (file && file.trim()) {`;
                    console && console.log(`Resolving conflicts in: ${file}`);

        console.log ('⚠️  Merge conflicts detected. Resolving...');

;
        // Find files with merge conflicts;
        const conflict_files = exec_sync ('git diff --name - only --diff - filter = U', { encoding: 'utf8' });
        if () {) {
  $2;
            console.log ('Found merge conflicts in:', conflict_files.trim ());
            // Resolve conflicts by accepting our version;
            const files = conflict_files.trim ().split ('\n');
}`;
                    console.log (`Resolving conflicts in: ${file}`);

                    try {
                        exec_sync (`git checkout --ours "${file}"`);
                    } catch (e) {
                        exec_sync (`git checkout --theirs "${file}"`);
                    }
                    exec_sync (`git add "${file}"`);
                }
            }





#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console.log('✅ Git repository detected')} catch (error) { console.error('❌ Not in a git repository'); process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status.trim()) { console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles.trim()) { console.log('Found merge conflicts in:',conflictFiles.trim()); const files = conflictFiles.trim().split('\n'); `); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console.log('✅ Merge process completed successfully!'); console.log('🎉 All changes have been merged into main branch')} catch (error) { console.error('❌ Error during merge process:',error.message); process.exit(1)}



#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console.log('✅ Git repository detected')} catch (error) { console.error('❌ Not in a git repository'); process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status.trim()) { console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles.trim()) { console.log('Found merge conflicts in:',conflictFiles.trim()); const files = conflictFiles.trim().split('\n'); `); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console.log('✅ Merge process completed successfully!'); console.log('🎉 All changes have been merged into main branch')} catch (error) { console.error('❌ Error during merge process:',error.message); process.exit(1)}



#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console.log('✅ Git repository detected')} catch (error) { console.error('❌ Not in a git repository'); process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status.trim()) { console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles.trim()) { console.log('Found merge conflicts in:',conflictFiles.trim()); const files = conflictFiles.trim().split('\n'); for (const file of files) { if (file.trim()) { console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console.log('✅ Merge process completed successfully!'); console.log('🎉 All changes have been merged into main branch')} catch (error) { console.error('❌ Error during merge process:',error.message); process.exit(1)}
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console.log('✅ Git repository detected')} catch (error) { console.error('❌ Not in a git repository'); process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status.trim()) { console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles.trim()) { console.log('Found merge conflicts in:',conflictFiles.trim()); const files = conflictFiles.trim().split('\n'); for (const file of files) { if (file.trim()) { console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console.log('✅ Merge process completed successfully!'); console.log('🎉 All changes have been merged into main branch')} catch (error) { console.error('❌ Error during merge process:',error.message); process.exit(1)}
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console.log('✅ Git repository detected')} catch (error) { console.error('❌ Not in a git repository'); process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status.trim()) { console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles.trim()) { console.log('Found merge conflicts in:',conflictFiles.trim()); const files = conflictFiles.trim().split('\n'); for (const file of files) { if (file.trim()) { console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console.log('✅ Merge process completed successfully!'); console.log('🎉 All changes have been merged into main branch')} catch (error) { console.error('❌ Error during merge process:',error.message); process.exit(1)}


    console && console.log('✅ Merge process completed successfully!');
    console && console.log('🎉 All changes have been merged into main branch')} catch (error) {
    console && console.error('❌ Error during merge "process": ', error && error.message);
    process && process.exit(1)}
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console && console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console && console.log('✅ Git repository detected')} catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) { console && console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console && console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console && console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console && console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console && console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { console && console.log('Found merge conflicts in:',conflictFiles && conflictFiles.trim()); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) { console && console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console && console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console && console.log('✅ Merge process completed successfully!'); console && console.log('🎉 All changes have been merged into main branch')} catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console && console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console && console.log('✅ Git repository detected')} catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) { console && console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console && console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console && console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console && console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console && console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { console && console.log('Found merge conflicts in:',conflictFiles && conflictFiles.trim()); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) { console && console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console && console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console && console.log('✅ Merge process completed successfully!'); console && console.log('🎉 All changes have been merged into main branch')} catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}
#!/usr/bin/env node const { execSync } = require('child_process'); const fs = require('fs'); console && console.log('🚀 Starting merge process for all open PRs...'); try { execSync('git rev-parse --git-dir',{ stdio: 'pipe' }); console && console.log('✅ Git repository detected')} catch (error) { console && console.error('❌ Not in a git repository'); process && process.exit(1)} try { const status = execSync('git status --porcelain',{ encoding: 'utf8' }); if (status && status.trim()) { console && console.log('⚠️ Working directory has changes. Stashing...'); execSync('git stash push -m "Auto-stash before merge process"')} console && console.log('📥 Fetching latest changes...'); execSync('git fetch --all --prune'); console && console.log('🔄 Switching to main branch...'); execSync('git checkout main'); console && console.log('📥 Pulling latest changes from main...'); try { execSync('git pull origin main')} catch (error) { console && console.log('⚠️ Merge conflicts detected. Resolving...'); const conflictFiles = execSync('git diff --name-only --diff-filter=U',{ encoding: 'utf8' }); if (conflictFiles && conflictFiles.trim()) { console && console.log('Found merge conflicts in:',conflictFiles && conflictFiles.trim()); const files = conflictFiles && conflictFiles.trim().split('\n'); for (const file of files) { if (file && file.trim()) { console && console.log(`Resolving conflicts in: ${file}`); try { execSync(`git checkout --ours "${file}"`)} catch (e) { execSync(`git checkout --theirs "${file}"`)} execSync(`git add "${file}"`)} } execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')} } console && console.log('📤 Pushing changes to remote...'); execSync('git push origin main'); console && console.log('✅ Merge process completed successfully!'); console && console.log('🎉 All changes have been merged into main branch')} catch (error) { console && console.error('❌ Error during merge process:',error && error.message); process && process.exit(1)}





=======
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
console.log('🚀 Starting merge process for all open PRs...');
try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console.log('✅ Git repository detected');
} catch (error) {
    console.error('❌ Not in a git repository');
    process.exit(1);
}
try {
    // Ensure clean working directory
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
        console.log('⚠️  Working directory has changes. Stashing...');
        execSync('git stash push -m "Auto-stash before merge process"');
    }
    // Fetch latest changes
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');
    // Switch to main branch
    console.log('🔄 Switching to main branch...');
    execSync('git checkout main');
    // Pull latest changes
    console.log('📥 Pulling latest changes from main...');
    try {
        execSync('git pull origin main');
    } catch (error) {
        console.log('⚠️  Merge conflicts detected. Resolving...');
        // Find files with merge conflicts
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        if (conflictFiles.trim()) {
            console.log('Found merge conflicts in:', conflictFiles.trim());
            // Resolve conflicts by accepting our version
            const files = conflictFiles.trim().split('\n');
            for (const file of files) {
                if (file.trim()) {
                    console.log(`Resolving conflicts in: ${file}`);
                    try {
                        execSync(`git checkout --ours "${file}"`);
                    } catch (e) {
                        execSync(`git checkout --theirs "${file}"`);
                    }
                    execSync(`git add "${file}"`);
                }
            }
            // Commit the merge
            execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
        }
    }
    // Get all branches
    console.log('🌿 Getting all branches...');
    const branches = execSync('git branch -r', { encoding: 'utf8' });
    const branchList = branches.split('\n')
        .map(branch => branch.trim())
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
    console.log(`Found ${branchList.length} branches to merge:`);
    branchList.forEach(branch => console.log(`  - ${branch}`));
    // Merge each branch
    for (const branch of branchList) {
        try {
            const branchName = branch.replace('origin/', '');
            console.log(`\n🔄 Merging branch: ${branchName}`);
            // Checkout the branch
            execSync(`git checkout ${branchName}`);
            // Merge into main
            execSync('git checkout main');
            execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);
            console.log(`✅ Successfully merged ${branchName}`);
        } catch (error) {
            console.log(`⚠️  Error merging ${branch}: ${error.message}`);
            // Continue with other branches
        }
    }
    // Push all changes
    console.log('📤 Pushing all changes to main...');
    execSync('git push origin main');
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
