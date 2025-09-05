const { execSync } = require('child_process');

exports.handler = async function(event, context) {
  try {
    // Run the OG meta auditor automation
    execSync('node automation/og-meta-auditor.cjs', { stdio: 'inherit' });
    
    // Commit and push changes
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(seo): update OG meta audit report [ci skip]" || true) && (git push origin main || true)', { 
      stdio: 'inherit', 
      shell: true 
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'OG meta audit completed successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};