const { spawnSync } = require('child_process');

exports.config = {
  schedule: '*/20 * * * *' // every 20 minutes
};

exports.handler = async (event, context) => {
  const logs = [];
  
  const logStep = (name, fn) => {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);
  };
  
  const runNode = (script) => {
    return spawnSync('node', [script], {
      cwd: process.cwd(),
      encoding: 'utf8'
    });
  };
  
  // Set canonical URL if not provided
  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
  
  // Run automation tasks
  logStep('sitemap:run', () => runNode('automation/sitemap-runner.cjs'));
  logStep('links:crawl', () => runNode('automation/site-link-crawler.cjs'));
  logStep('links:fix', () => runNode('automation/site-link-fixer.cjs'));
  logStep('external-link:check', () => runNode('automation/external-link-check.cjs'));
  logStep('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage:advertise', () => runNode('automation/homepage-auto-advertiser.cjs'));
  
  return {
    statusCode: 200,
    body: JSON.stringify({ logs })
  };
};