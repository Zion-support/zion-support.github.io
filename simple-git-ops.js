const { spawn } = require('child_process');

console.log('🚀 Starting git operations...');

function runCommand(command, args = []) {
  return new Promise((resolve, reject) => {
    console.log(`📋 Running: ${command} ${args.join(' ')}`);

    const child = spawn(command, args, {
      cwd: '/workspace',
      stdio: 'inherit',
    });

    child.on('close', code => {
      if (code === 0) {
        console.log(`✅ ${command} completed successfully`);
        resolve();
      } else {
        console.log(`❌ ${command} failed with code ${code}`);
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    child.on('error', err => {
      console.log(`❌ ${command} error:`, err.message);
      reject(err);
    });
  });
}

async function main() {
  try {
    // Step 1: Add all changes
    await runCommand('git', ['add', '.']);

    // Step 2: Commit changes
    await runCommand('git', [
      'commit',
      '-m',
      'Fix syntax errors: resolve merge conflicts and fix JavaScript parsing issues',
    ]);

    // Step 3: Push to current branch
    await runCommand('git', [
      'push',
      'origin',
      'cursor/fix-syntax-push-and-merge-to-main-c855',
    ]);

    // Step 4: Switch to main
    await runCommand('git', ['checkout', 'main']);

    // Step 5: Pull latest main
    await runCommand('git', ['pull', 'origin', 'main']);

    // Step 6: Merge feature branch
    await runCommand('git', [
      'merge',
      'cursor/fix-syntax-push-and-merge-to-main-c855',
    ]);

    // Step 7: Push merged changes
    await runCommand('git', ['push', 'origin', 'main']);

    console.log('🎉 All operations completed successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
