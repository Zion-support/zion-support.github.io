const path = require('path');
const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, '..', '..', relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'pipe', encoding: 'utf8' });
  return { status: res.status || 0, stdout: res.stdout || '', stderr: res.stderr || '' };
}

exports.config = {
  schedule: '7 */12 * * *',
};

exports.handler = async function() {
  try {
    console.log('Starting auto-deps-maintainer...');
    
    // Run dependency upgrade
    const depsResult = runNode('automation/deps-auto-upgrade.cjs');
    console.log('Deps upgrade result:', depsResult);
    
    // Run git sync
    const gitResult = runNode('automation/advanced-git-sync.cjs');
    console.log('Git sync result:', gitResult);
    
    // Commit and push changes
    const { execSync } = require('child_process');
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(deps): auto-upgrade dependencies [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    
    return { 
      statusCode: 200, 
      body: JSON.stringify({ 
        ok: true, 
        task: 'auto-deps-maintainer',
        depsResult,
        gitResult
      }) 
    };
  } catch (e) {
    console.error('Error in auto-deps-maintainer:', e);
    return { 
      statusCode: 200, 
      body: JSON.stringify({ 
        ok: false, 
        error: String(e) 
      }) 
    };
  }
};