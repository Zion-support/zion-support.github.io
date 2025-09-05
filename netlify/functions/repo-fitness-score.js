const { execSync } = require('child_process');

exports.handler = async function(event, context) {
  try {
    // Run the repo fitness score automation
    execSync('node automation/repo-fitness-score.cjs', { stdio: 'inherit' });
    
    // Commit and push changes
    execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app" && git add -A && (git commit -m "chore(metrics): update repo fitness score [ci skip]" || true) && (git push origin main || true)', { 
      stdio: 'inherit', 
      shell: true 
    });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Repo fitness score updated successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};