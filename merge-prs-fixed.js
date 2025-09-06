<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:merge-prs-fixed.js
#!/usr/bin/env node;

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
#!/usr / bin / env node;
const { exec_sync } = require ('child_process'),
const fs = require ('fs'),
console.log ('🚀 Starting merge process for all open PRs...'),
try {
    // Check if we're in a git repository;
    exec_sync ('git rev - parse --git - dir', { stdio: 'pipe' }),
    console.log ('✅ Git repository detected');
} catch (error) {
    console.error ('❌ Not in a git repository'),
    process.exit (1);
}
try {
    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }),
    if () {) {
  $2
}
        console.log ('⚠️  Working directory has changes. Stashing...'),
        exec_sync ('git stash push -m "Auto - stash before merge process"');
=======
#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
;
console.log('🚀 Starting merge process for all open PRs...');
;
try {;
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio:'pipe' });
    console.log('✅ Git repository detected');
} catch (error) {;
    console.error('❌ Not in a git repository');
    process.exit(1);
}
;
try {;
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding:'utf8' });
    if (status.trim()) {;
        console.log('⚠️  Working directory has changes. Stashing...');
        execSync('git stash push -m "Auto-stash before merge process"');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
;
    // Fetch latest changes;
<<<<<<< HEAD
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
<<<<<<<< HEAD:merge-prs-fixed.js

=======
#!/usr/bin/env node;

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
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
try {// Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {console.log('⚠️  Working directory has changes. Stashing...');
        execSync('git stash push -m "Auto-stash before merge process"');
    }
    // Fetch latest changes;
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');
    // Switch to main branch;
    console.log('🔄 Switching to main branch...');
    execSync('git checkout main');
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...');
    try {execSync('git pull origin main');
    } catch (error) {console.log('⚠️  Merge conflicts detected. Resolving...');
        // Find files with merge conflicts;
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        if (conflictFiles.trim()) {console.log('Found merge conflicts in:', conflictFiles.trim());
const { execSync } = require('child_process'),;
const fs = require('fs'),;
const { execSync } = require('child_process');
const fs = require('fs');
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
console.log('🚀 Starting merge process for all open PRs...'),;
try {;
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' }),;
    console.log('✅ Git repository detected');
} catch (error) {;
    console.error('❌ Not in a git repository'),;
    process.exit(1);
}
;
try {;
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),;
    if (status.trim()) {;
        console.log('⚠️  Working directory has changes. Stashing...'),;
        execSync('git stash push -m "Auto-stash before merge process"');
    }
;
    // Fetch latest changes;
    console.log('📥 Fetching latest changes...'),;
    execSync('git fetch --all --prune'),;
    // Switch to main branch;
    console.log('🔄 Switching to main branch...'),;
    execSync('git checkout main'),;
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...'),;
    try {;
        execSync('git pull origin main');
    } catch (error) {;
        console.log('⚠️  Merge conflicts detected. Resolving...'),;
        // Find files with merge conflicts;
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),;
        if (conflictFiles.trim()) {;
            console.log('Found merge conflicts in:', conflictFiles.trim()),;
<<<<<<< HEAD
<<<<<<< HEAD

            // Resolve conflicts by accepting our version;

<<<<<<< HEAD
            for (const file of files) {;
                if (file.trim()) {;

=======

            for (const file of files) {;
                if (file.trim()) {;

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            // Resolve conflicts by accepting our version;
            const files = conflictFiles.trim().split('\n');
            const files = conflictFiles.trim().split('\n'),;
            const files = conflictFiles.trim().split('\n');
            for (const file of files) {;
                if (file.trim()) {;
                    console.log(`Resolving conflicts in: ${file}`);
                    try {execSync(`git checkout --ours "${file}"`);
                    } catch (e) {execSync(`git checkout --theirs "${file}"`);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    console.log(`Resolving conflicts in: ${file}`),;
                    try {;
                        execSync(`git checkout --ours "${file}"`);
                    } catch (e) {;
                        execSync(`git checkout --theirs "${file}"`);
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
                    }
                    exec_sync (`git add "${file}"`);
=======
    console.log('📥 Fetching latest changes...');
    execSync('git fetch --all --prune');
;
    // Switch to main branch;
    console.log('🔄 Switching to main branch...');
    execSync('git checkout main');
;
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...');
    try {;
        execSync('git pull origin main');
    } catch (error) {;
        console.log('⚠️  Merge conflicts detected. Resolving...');
        ;
        // Find files with merge conflicts;
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding:'utf8' });
        if (conflictFiles.trim()) {;
            console.log('Found merge conflicts in:', conflictFiles.trim());
            ;
            // Resolve conflicts by accepting our version;
            const files = conflictFiles.trim().split('\n');
            for (const file of files) {;
                if (file.trim()) {;
                    console.log(`Resolving conflicts in:${file}`);
                    try {;
                        execSync(`git checkout --ours "${file}"`);
                    } catch (e) {;
                        execSync(`git checkout --theirs "${file}"`);                    }
                    execSync(`git add "${file}"`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                }
            }
<<<<<<<< HEAD:merge-prs-fixed.js

<<<<<<< HEAD
=======

;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
            ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
            // Commit the merge;
<<<<<<< HEAD
            exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
=======
            execSync('git commit -m "feat:resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
    }
<<<<<<<< HEAD:merge-prs-fixed.js

<<<<<<< HEAD
=======
========
;
    // Get all branches;
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
    console.log ('🌿 Getting all branches...'),
    const branches = exec_sync ('git branch -r', { encoding: 'utf8' }),
    const branch_list = branches.split ('\n');
        .map (branch => branch.trim ());
        .filter (branch => branch && !branch.includes ('origin / main') && !branch.includes ('origin / HEAD')),
    console.log (`Found ${branch_list.length} branches to merge: `),
    branch_list.for_each (branch => console.log (`  - ${branch}`)),
    // Merge each branch;
    for (const branch of branch_list) {
        try {
            const branch_name = branch.replace ('origin/', ''),
            console.log (`\n🔄 Merging branch: ${branch_name}`),
            // Checkout the branch;
            exec_sync (`git checkout ${branch_name}`),
            // Merge into main;
            exec_sync ('git checkout main'),
            exec_sync (`git merge ${branch_name} --no - ff -m "feat: merge ${branch_name} into main\n\n- Integrated changes from ${branch_name}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`),
            console.log (`✅ Successfully merged ${branch_name}`);
        } catch (error) {
            console.log (`⚠️  Error merging ${branch}: ${error.message}`),
<<<<<<<< HEAD:merge-prs-fixed.js

========
=======
    console.log('🌿 Getting all branches...');
    const branches = execSync('git branch -r', { encoding:'utf8' });
    const branchList = branches.split('\n');
        .map(branch => branch.trim());
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
;
    console.log(`Found ${branchList.length} branches to merge:`);
    branchList.forEach(branch => console.log(`  - ${branch}`));
;
    // Merge each branch;
    for (const branch of branchList) {;
        try {;
            const branchName = branch.replace('origin/', '');
            console.log(`\n🔄 Merging branch:${branchName}`);
            ;
            // Checkout the branch;
            execSync(`git checkout ${branchName}`);
            ;
            // Merge into main;
            execSync('git checkout main');
            execSync(`git merge ${branchName} --no-ff -m "feat:merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);
            ;
            console.log(`✅ Successfully merged ${branchName}`);
        } catch (error) {;
            console.log(`⚠️  Error merging ${branch} ${error.message}`);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
            // Continue with other branches;
        }
    }
;
    // Push all changes;
<<<<<<<< HEAD:merge-prs-fixed.js


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    }
                    execSync(`git add "${file}"`);
                }
            }
;
            // Commit the merge;
            execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
        }
    }
    // Get all branches;
    console.log('🌿 Getting all branches...');
    const branches = execSync('git branch -r', { encoding: 'utf8' });
    const branchList = branches.split('\n');
        .map(branch => branch.trim());
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
    console.log(`Found ${branchList.length} branches to merge: `);
    branchList.forEach(branch => console.log(`  - ${branch}`));
    // Merge each branch;
    for (const branch of branchList) {try {;
            const branchName = branch.replace('origin/', '');
            console.log(`\n🔄 Merging branch: ${branchName}`);
            // Checkout the branch;
            execSync(`git checkout ${branchName}`);
            // Merge into main;
            execSync('git checkout main');
            execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);
            console.log(`✅ Successfully merged ${branchName}`);
        } catch (error) {console.log(`⚠️  Error merging ${branch}: ${error.message}`);
            // Continue with other branches;
        }
    }
    // Push all changes;
    console.log('📤 Pushing all changes to main...');
    execSync('git push origin main');
    console.log('🎉 All merge operations completed successfully!');
    console.log('✅ All PRs have been merged into main branch');
    console.log('✅ All merge conflicts have been resolved');
    console.log('✅ Repository is now clean and up to date');
} catch (error) {console.error('❌ Error during merge process:', error.message);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
;
    // Get all branches;
    console.log('🌿 Getting all branches...'),;
    const branches = execSync('git branch -r', { encoding: 'utf8' }),;
    const branchList = branches.split('\n');
        .map(branch => branch.trim());
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD')),;
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    console.log(`Found ${branchList.length} branches to merge: `),;
    branchList.forEach(branch => console.log(`  - ${branch}`)),;
    // Merge each branch;
    for (const branch of branchList) {;
        try {;
            const branchName = branch.replace('origin/', ''),;
            console.log(`\n🔄 Merging branch: ${branchName}`),;
            // Checkout the branch;
            execSync(`git checkout ${branchName}`),;
            // Merge into main;
            execSync('git checkout main'),;
            execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`),;
            console.log(`✅ Successfully merged ${branchName}`);
        } catch (error) {;
            console.log(`⚠️  Error merging ${branch}: ${error.message}`),;
            // Continue with other branches;
        }
    }
;
    // Push all changes;
    console.log('📤 Pushing all changes to main...'),;
    execSync('git push origin main'),;
    console.log('🎉 All merge operations completed successfully!'),;
    console.log('✅ All PRs have been merged into main branch'),;
    console.log('✅ All merge conflicts have been resolved'),;
    console.log('✅ Repository is now clean and up to date');
} catch (error) {;
    console.error('❌ Error during merge process:', error.message),;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    process.exit(1);
}
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-prs-fixed.js
    console.log ('📤 Pushing all changes to main...'),
    exec_sync ('git push origin main'),
    console.log ('🎉 All merge operations completed successfully!'),
    console.log ('✅ All PRs have been merged into main branch'),
    console.log ('✅ All merge conflicts have been resolved'),
    console.log ('✅ Repository is now clean and up to date');
} catch (error) {
    console.error ('❌ Error during merge process:', error.message),
    process.exit (1);
}
=======
    console.log('📤 Pushing all changes to main...');
    execSync('git push origin main');
;
    console.log('🎉 All merge operations completed successfully!');
    console.log('✅ All PRs have been merged into main branch');
    console.log('✅ All merge conflicts have been resolved');
    console.log('✅ Repository is now clean and up to date');
;
} catch (error) {;
    console.error('❌ Error during merge process:', error.message);
    process.exit(1);}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    process.exit(1);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
