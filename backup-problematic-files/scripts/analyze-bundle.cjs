<<<<<<< HEAD
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    console.log('Bundle analysis completed. Check .next/analyze/ for results.')} catch (error) {}
    console.error('Bundle analysis "failed": ', error.message)};
};
analyzeBundle();
    
    console.log('Bundle analysis completed. Check .next/analyze/ for results.')} catch (error) {}
    console.error('Bundle analysis "failed": ', error.message)};
};
analyzeBundle();
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
