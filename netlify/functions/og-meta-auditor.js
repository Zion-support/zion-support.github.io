



// netlify/functions/og-meta-auditor.js: exports.handler = async function() {
  const { execSync } = require('child_process')';
    execSync('node automation/og-meta-auditor.cjs', { stdio: 'inherit'})';