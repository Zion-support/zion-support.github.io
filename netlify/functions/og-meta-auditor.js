// netlify/functions/og-meta-auditor.js
exports.handler = async function() {
  const { execSync } = require('child_process');
  try {
    execSync('node automation/og-meta-auditor.cjs', { stdio: 'inherit' });
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)', { stdio: 'inherit', shell: true });
    return { statusCode: 200, body: 'OG meta audit completed successfully' };
  } catch (error) {
    console.error('Error running OG meta audit:', error);
    return { statusCode: 500, body: 'Error running OG meta audit' };
  }
};
