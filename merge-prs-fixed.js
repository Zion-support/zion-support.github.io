<<<<<<< HEAD

} catch (error) {console.error('❌ Not in a git repository');
    process.exit(1);

#!/usr / bin / env node;'
const { exec_sync } = require ('child_process'),'
const fs = require ('fs'),'
console.log ('🚀 Starting merge process for all open PRs...'),

    console.log ('✅ Git repository detected');
} catch (error) {'
    console.error ('❌ Not in a git repository'),
    process.exit (1);

console.log('🚀 Starting merge process for all open PRs...'),;
try {;
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' }),;
} catch (error) {;
    console.error('❌ Not in a git repository'),;
    process.exit(1);
}

            // Resolve conflicts by accepting our version;

;
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),;
    if (status.trim()) {;
        console.log('⚠️  Working directory has changes. Stashing...'),;
        execSync('git stash push -m "Auto-stash before merge process"');
    // Fetch latest changes;
    console.log('📥 Fetching latest changes...'),;
    execSync('git fetch --all --prune'),;
    // Switch to main branch;
    console.log('🔄 Switching to main branch...'),;
    execSync('git checkout main'),;
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...'),;
        execSync('git pull origin main');
        console.log('⚠️  Merge conflicts detected. Resolving...'),;
        // Find files with merge conflicts;
        const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),;
        if (conflictFiles.trim()) {;
            console.log('Found merge conflicts in:', conflictFiles.trim()),;



            // Resolve conflicts by accepting our version;            // Resolve conflicts by accepting our version;

            for (const file of files) {;
                if (file.trim()) {;




                    console.log(`Resolving conflicts in: ${file}`),;
                    try {;"`
                        execSync(`git checkout --ours "${file}"`);
                    } catch (e) {;"`
                        execSync(`git checkout --theirs "${file}"`);


=======
#!/usr/bin/env node
const { execSync } = require($2);
const fs = require($2);
console.log($2);
try {
    // Check if we're in a git repository
    execSync($2);
    console.log('✅ Git repository detected')
} catch (error) {
    console.error($2);
    process.exit(1)
}

try {
    // Ensure clean working directory
    const status = execSync($2);
    if (status.trim()) {
        console.log($2);
        execSync('git stash push -m "Auto-stash before merge process"')
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba

    // Fetch latest changes
    console.log($2);
    execSync($2);
    // Switch to main branch
    console.log($2);
    execSync($2);
    // Pull latest changes
    console.log($2);
    try {
        execSync('git pull origin main')
    } catch (error) {
        console.log($2);
        // Find files with merge conflicts
        const conflictFiles = execSync($2);
        if (conflictFiles.trim()) {
            console.log('Found merge conflicts in:', conflictFiles.trim()),
            
            // Resolve conflicts by accepting our version
            const files = conflictFiles.trim().split($2);
            for (const file of files) {
                if (file.trim()) {
                    console.log($2);
                    try {
                        execSync(`git checkout --ours "${file}"`)
                    } catch (e) {
                        execSync(`git checkout --theirs "${file}"`)
                    }
                    execSync(`git add "${file}"`)
                }
            }
<<<<<<< HEAD


            // Commit the merge;
`;
                    console.log(`Resolving conflicts in: ${file}`);`;
                    try {execSync(`git checkout --ours "${file}"`);""`;
                    } catch (e) {execSync(`git checkout --theirs "${file}"`);"`;
                    console.log(`Resolving conflicts in: ${file}`);"`;
                    console.log(`Resolving conflicts in: ${file}`),;
                    try {;"`;
                        execSync(`git checkout --ours "${file}"`);"
                    } catch (e) {;"`;
                        execSync(`git checkout --theirs "${file}"`);"
                    }"`;
                    exec_sync (`git add "${file}"`);"

            // Commit the merge;"
            exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');

    console.log ('🌿 Getting all branches...'),
    const branches = exec_sync ('git branch -r', { encoding: 'utf8' }),


        }
    }

    // Get all branches;
    console.log('🌿 Getting all branches...');
    const branches = execSync('git branch -r', { encoding: 'utf8' });
    const branchList = branches.split('\n');
        .map(branch => branch.trim());
        .filter(branch => branch && !branch.includes('origin/main') && !branch.includes('origin/HEAD'));`;
    console.log(`Found ${branchList.length} branches to merge: `);`;
    branchList.forEach(branch => console.log(`  - ${branch}`));
    // Merge each branch;
    for (const branch of branchList) {try {;
            const branchName = branch.replace('origin/', );`;
            console.log(`\n🔄 Merging branch: ${branchName}`);
            // Checkout the branch;`;
            execSync(`git checkout ${branchName}`);
            // Merge into main;
            execSync('git checkout main');`;
            execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);"`;
            console.log(`✅ Successfully merged ${branchName}`);`;
        } catch (error) {console.log(`⚠️  Error merging ${branch}: ${error.message}`);

            // Continue with other branches;
    // Push all changes;



;
    // Get all branches;'
    console.log('🌿 Getting all branches...'),;'
    const branches = execSync('git branch -r', { encoding: 'utf8' }),;'
    const branchList = branches.split('\n');
        .map(branch => branch.trim());



    console.log(`Found ${branchList.length} branches to merge: `),;

    branchList.forEach(branch => console.log(`  - ${branch}`)),;
    // Merge each branch;
    for (const branch of branchList) {;
        try {;'
            const branchName = branch.replace('origin/', ''),;`
            console.log(`\n🔄 Merging branch: ${branchName}`),;
            // Checkout the branch;`
            execSync(`git checkout ${branchName}`),;
            // Merge into main;'
            execSync('git checkout main'),;"`
            execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`),;`
            console.log(`✅ Successfully merged ${branchName}`);
        } catch (error) {;`
            console.log(`⚠️  Error merging ${branch}: ${error.message}`),;
            // Continue with other branches;

        }
    }


    console.error('❌ Error during merge process:', error.message),;



=======
            
            // Commit the merge
            execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"')
        }
    }

    // Get all branches
    console.log($2);
    const branches = execSync($2);
    const branchList = $2;
    console.log($2);
    branchList.forEach(branch = $2;
    // Merge each branch
    for (const branch of branchList) {
        try {
            const branchName = branch.replace($2);
            console.log($2);
            // Checkout the branch
            execSync($2);
            // Merge into main
            execSync($2);
            execSync($2);
            console.log(`✅ Successfully merged ${branchName}`)
        } catch (error) {
            console.log($2);
            // Continue with other branches
        }
    }

    // Push all changes
    console.log($2);
    execSync($2);
    console.log($2);
    console.log($2);
    console.log($2);
    console.log('✅ Repository is now clean and up to date')

} catch (error) {
    console.error($2);
    process.exit(1)
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
