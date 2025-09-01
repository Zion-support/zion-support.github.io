// netlify/functions/edge-cache-warmer.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/edge-cache-warmer.cjs', { stdio: 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(automation): edge cache warm report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: 'Edge cache warmed successfully' };
  } catch (error) {
    console.error('Error warming edge cache:', error);
    return { statusCode: 500, body: 'Error warming edge cache' };
  }
};
