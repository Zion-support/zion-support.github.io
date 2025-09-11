<<<<<<< HEAD
const { execSync } = require("child_process");"const fs = require("fs")"const path = require("path")async function analyzeBundle() { try { / Install bundle analyzer if not present try {" execSync("npm list @next/bundle-analyzer", { stdio: "pipe" })} catch {"" execSync("npm install @next/bundle-analyzer --save-dev", { stdio: "pipe" })} / Run bundle analysis"" execSync("ANALYZE=true npm run build", { stdio: "inherit" }); " console.log("Bundle analysis completed. Check .next/analyze/ for results.")} catch (error) {"" console.error("Bundle analysis failed: ", error.message)}}analyzeBundle(); """
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
    // Run bundle analysis
    execSync('ANALYZE=true npm run build', { "stdio": 'inherit' });
    } catch (error) {
    console.error('Bundle analysis "failed": ', error.message)}
}
    console.log('Bundle analysis completed. Check .next/analyze/ for results.')} catch (error) {}
    console.error('Bundle analysis "failed": ', error.message)};
};
analyzeBundle();
=======
    
    // Run build with analysis
    execSync('npm run build:analyze', { stdio: 'inherit' });
    
    // Check for large dependencies
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    console.log('\nDependency Analysis:');
    console.log('Total dependencies:', Object.keys(dependencies).length);
    
    // Check for potential optimizations
    const largeDeps = ['react', 'next', 'typescript', 'tailwindcss'];
    const foundLargeDeps = largeDeps.filter(dep => dependencies[dep]);
    
    if (foundLargeDeps.length > 0) {
      console.log('Large dependencies found:', foundLargeDeps.join(', '));
    }
    
    console.log('Bundle analysis completed');
  } catch (error) {
    console.error('Bundle analysis failed:', error.message);
  }
}

analyzeBundle();
      
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
