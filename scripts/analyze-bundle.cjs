<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    
    console.log('Bundle analysis completed. Check .next/analyze/ for results.')} catch (error) {}
    console.error('Bundle analysis "failed": ', error.message)};
};
analyzeBundle();
      
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
