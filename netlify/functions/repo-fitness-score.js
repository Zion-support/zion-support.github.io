// netlify/functions/repo-fitness-score.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/repo-fitness-score.cjs', { stdio: 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(metrics): update repo fitness score [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: 'Repo fitness score updated successfully' };
  } catch (error) {
    console.error('Error updating repo fitness score:', error);
    return { statusCode: 500, body: 'Error updating repo fitness score' };
  }
};
