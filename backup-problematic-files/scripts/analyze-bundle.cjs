const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
async function analyzeBundle() {}
  try {}
    // Install bundle analyzer if not present;
    try {}
      execSync('npm list @next/bundle-analyzer', { "stdio": 'pipe' })} catch {}
      execSync('npm install @next/bundle-analyzer --save-dev', { "stdio": 'pipe' })};
    // Run bundle analysis;
    execSync('ANALYZE=true npm run build', { "stdio": 'inherit' }
});