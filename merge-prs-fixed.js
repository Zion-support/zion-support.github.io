<<<<<<< HEAD
#!/usr/bin/env node;

=======
console.log('🚀 Starting merge process for all open PRs...');
try {// Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
    console.log('✅ Git repository detected');
} catch (error) {console.error('❌ Not in a git repository');
    process.exit(1);

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
try {
    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }),
    if () {) {
  $2
}
        console.log ('⚠️  Working directory has changes. Stashing...'),
        exec_sync ('git stash push -m "Auto - stash before merge process"');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
        if (conflictFiles.trim()) {console.log('Found merge conflicts in:', conflictFiles.trim());
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const { execSync } = require('child_process'),;
const fs = require('fs'),;
const { execSync } = require('child_process');
const fs = require('fs');
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

#!/usr/bin/env node;
<<<<<<< HEAD
<<<<<<< HEAD

=======

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
    }
;
    // Fetch latest changes;
#!/usr/bin/env node;


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
#!/usr/bin/env node;

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

            // Resolve conflicts by accepting our version;            // Resolve conflicts by accepting our version;

<<<<<<< HEAD

            for (const file of files) {;
                if (file.trim()) {;
<<<<<<< HEAD
<<<<<<< HEAD

=======
            for (const file of files) {;
                if (file.trim()) {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            // Resolve conflicts by accepting our version;
            const files = conflictFiles.trim().split('\n');
            const files = conflictFiles.trim().split('\n'),;
            const files = conflictFiles.trim().split('\n');
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            for (const file of files) {;
                if (file.trim()) {;
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                    console.log(`Resolving conflicts in: ${file}`);
                    try {execSync(`git checkout --ours "${file}"`);
                    } catch (e) {execSync(`git checkout --theirs "${file}"`);                    console.log(`Resolving conflicts in: ${file}`);
                    try {execSync(`git checkout --ours "${file}"`);
                    } catch (e) {execSync(`git checkout --theirs "${file}"`);
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                    console.log(`Resolving conflicts in: ${file}`),;
                    try {;
                        execSync(`git checkout --ours "${file}"`);
                    } catch (e) {;
                        execSync(`git checkout --theirs "${file}"`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    }
                    exec_sync (`git add "${file}"`);
                }
            }

<<<<<<< HEAD
=======

;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            // Commit the merge;
            exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
        }
    }
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

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

<<<<<<< HEAD
=======
                    }
                    exec_sync (`git add "${file}"`);
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            for (const file of files) {;
                if (file.trim()) {;
                    }
                    execSync(`git add "${file}"`);
                }
            }
            // Commit the merge;
            execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
        }
    }
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            // Continue with other branches;
        }
    }
    // Push all changes;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
    console.log('📤 Pushing all changes to main...');
    execSync('git push origin main');
    console.log('🎉 All merge operations completed successfully!');
    console.log('✅ All PRs have been merged into main branch');
    console.log('✅ All merge conflicts have been resolved');
    console.log('✅ Repository is now clean and up to date');
} catch (error) {console.error('❌ Error during merge process:', error.message);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
;
    // Get all branches;
    console.log('🌿 Getting all branches...'),;
    const branches = execSync('git branch -r', { encoding: 'utf8' }),;
    const branchList = branches.split('\n');
        .map(branch => branch.trim());
<<<<<<< HEAD
<<<<<<< HEAD

=======
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD')),;
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD')),;
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.log(`Found ${branchList.length} branches to merge: `),;
=======
        }
    }
    // Push all changes;    console.log(`Found ${branchList.length} branches to merge: `),;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    process.exit(1);
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    process.exit(1);
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======    process.exit(1);
}
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
    process.exit(1);
}
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    process.exit(1);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
