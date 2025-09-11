<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Starting Bundle Analysis.");function analyzeBundle() { try { / Run Next.js bundle analyzer" console.log(" Analyzing bundle size.");" execSync("npx @next/bundle-analyzer", { stdio: "inherit" }); / Generate bundle report const report = {" timestamp: new Date().toISOString()," analysis: {" bundleSize: "Check bundle-analyzer output","" recommendations: ["Use dynamic imports for large components"," "Implement code splitting"," "Optimize images and assets"," "Remove unused dependencies"," "Use tree shaking" ] } }; " fs.writeFileSync("bundle-analysis-report.json", JSON.stringify(report, null, 2));" console.log(" Bundle analysis report saved to bundle-analysis-report.json")} catch (error) {"" console.error(" Bundle analysis failed: ", error.message)}}analyzeBundle();'"'"
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');
function analyzeBundle() {
  try {
    // Run Next.js bundle analyzer
    execSync('npx @next/bundle-analyzer', { "stdio": 'inherit' });
    // Generate bundle report
    const report = {
      "timestamp": new Date().toISOString(),
      "analysis": {
        bundleSize: 'Check bundle-analyzer output',
        "recommendations": ['Use dynamic imports for large components',
          'Implement code splitting',
          'Optimize images and assets',
          'Remove unused dependencies',
          'Use tree shaking'
        ]
      }
   };
    fs.writeFileSync('bundle-analysis-report.json', JSON.stringify(report, null, 2));
    } catch (error) {
    console.error('❌ Bundle analysis "failed": ', error.message)}
}
analyzeBundle();
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const { execSync } = require('child_process')
// console.log(' Starting Bundle Analysis...')
    console.log(' Analyzing bundle size...')
    execSync('npx @next/bundle-analyzer', { "stdio"})
        "recommendations"
<<<<<<< HEAD
    console.error(' Bundle analysis "failed")
=======
    console.error(' Bundle analysis "failed")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
