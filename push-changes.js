import { execSync } from 'child_process';

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    return { error: error.message, stdout: error.stdout, stderr: error.stderr };
  }
}

function main() {
  console.log('🚀 Pushing changes to main branch...');
  
  try {
    // Push with force-with-lease
    console.log('📤 Pushing to origin/main...');
    const pushResult = runCommand('git push --force-with-lease origin main');
    
    if (pushResult.error) {
      console.log('❌ Error pushing:', pushResult.stderr);
      
      // Try regular push as fallback
      console.log('🔄 Trying regular push...');
      const fallbackResult = runCommand('git push origin main');
      
      if (fallbackResult.error) {
        console.log('❌ Fallback push also failed:', fallbackResult.stderr);
        return false;
      }
    }
    
    console.log('✅ Successfully pushed to main branch');
    
    // Check final status
    console.log('📊 Final status:');
    const statusResult = runCommand('git status');
    console.log(statusResult);
    
    console.log('🎉 All changes successfully pushed to main!');
    return true;
    
  } catch (error) {
    console.log('❌ Error pushing changes:', error.message);
    return false;
  }
}

main();