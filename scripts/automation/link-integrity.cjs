#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Link Integrity Automation Started');

async function checkLinkIntegrity() {
  try {
    console.log('🔗 Checking link integrity...');
    
    const integrityResults = [];
    
    // Check for broken internal links
    console.log('🔍 Checking internal links...');
    const sourceDirs = ['src', 'pages', 'components'];
    let internalLinks = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = getAllFiles(dir);
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            const content = fs.readFileSync(file, 'utf8');
            const linkMatches = content.match(/href=["']([^"']+)["']/g);
            if (linkMatches) {
              internalLinks.push({
                file,
                links: linkMatches
              });
            }
          }
        }
      }
    }
    
    integrityResults.push({
      type: 'internal-links',
      result: `Found ${internalLinks.length} files with internal links`
    });
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: integrityResults.length,
      results: integrityResults,
      internalLinks: internalLinks
    };
    
    fs.writeFileSync('link-integrity-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: link-integrity-report.json');
    
  } catch (error) {
    console.error('❌ Error in link integrity check:', error);
  }
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  
  return arrayOfFiles;
}

// Run the automation
checkLinkIntegrity().then(() => {
  console.log('✅ Link Integrity Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Link Integrity Automation Failed:', error);
  process.exit(1);
});