
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
async function analyzeBundle() {}
  try {}
    // Install bundle analyzer if not present;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23701123c2003b6514f1b91a1b71d5372d66372e
    try {}
      execSync('npm list @next/bundle-analyzer', { "stdio": 'pipe' })} catch {}
      execSync('npm install @next/bundle-analyzer --save-dev', { "stdio": 'pipe' })};
    // Run bundle analysis;
    execSync('ANALYZE=true npm run build', { "stdio": 'inherit' }
});
    
    console.log('Bundle analysis completed. Check .next/analyze/ for results.')} catch (error) {}
    console.error('Bundle analysis "failed": ', error.message)};

};
analyzeBundle();
      


