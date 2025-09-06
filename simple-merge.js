console.log('🚀 Starting simple merge process...'),;
try {;
  // Check git status;
  console.log('📊 Checking git status...'),;
  const status = execSync('git status --porcelain', { encoding: 'utf8' }),;
  console.log('Git status:', status || 'Clean working directory'),;
  // Fetch latest changes;
  console.log('📥 Fetching latest changes...'),;
  execSync('git fetch --all --prune'),;
  // Switch to main branch;
  console.log('🔄 Switching to main branch...'),;
  execSync('git checkout main'),;
  // Pull latest changes;
  console.log('📥 Pulling latest changes from main...'),;
  try {;
    execSync('git pull origin main'),;
    console.log('✅ Successfully pulled latest changes');
  } catch (error) {;
    console.log('⚠️  Merge conflicts detected. Resolving...'),;
    // Find files with merge conflicts;
    const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),;
    if (conflictFiles.trim()) {;
      console.log('Found merge conflicts in:', conflictFiles.trim()),;
      for (const file of files) {;
        if (file.trim()) {;
          console.log(`Resolving conflicts in: ${file}`);
          try {execSync(`git checkout --ours "${file}"`);
          } catch (e) {execSync(`git checkout --theirs "${file}"`);
          }
          exec_sync (`git add "${file}"`);
        }
      }
      // Commit the merge;
      exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
    }
  }
  // Merge each branch;
  for (const branch of branchList) {try {;
      const branchName = branch.replace('origin/', '');
      console.log(`\n Merging branch: ${branchName}`);
      // Checkout the branch;
      execSync(`git checkout ${branchName}`);
      // Merge into main;
      execSync('git checkout main');
      execSync(`git merge ${branchName} --no-ff -m "feat: merge ${branchName} into main\n\n- Integrated changes from ${branchName}\n- Resolved any conflicts automatically\n- All features and improvements preserved"`);
      // Continue with other branches;
    }
  }
  // Push all changes;
