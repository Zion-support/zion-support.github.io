import path from 'path');
const { spawnSync } = require('child_process');

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

exports.config = {
  schedule: '*/20 * * * *',
  // every 20 minutes







};

exports.handler = async () => {
  const logStep(name, fn) {
    logs.push(`\n=== ${name} ===`);
    const { status, stdout, stderr } = fn();
    if (stdout) logs.push(stdout);
    if (stderr) logs.push(stderr);
    logs.push(`exit=${status}`);

  process.env.CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';

  logStep('sitemap:run', () => runNode('automation/sitemap-runner.cjs'));
  logStep('links:crawl', () => runNode('automation/site-link-crawler.cjs'));
  logStep('links:fix', () => runNode('automation/site-link-fixer.cjs'));
  logStep('external-link:check', () => runNode('automation/external-link-check.cjs'));
  logStep('homepage:update', () => runNode('automation/homepage-updater.cjs'));
  logStep('homepage:advertise', () => runNode('automation/homepage-auto-advertiser.cjs'));

