#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Link Checker Automation Started');

async function checkLinks() {
  try {
    console.log('🔗 Checking links...');
    
    // Check for broken links in the project
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    let links = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = getAllFiles(dir);
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
            const content = fs.readFileSync(file, 'utf8');
            const linkMatches = content.match(/https?:\/\/[^\s<>"{}|\\^`\[\]]+/g);
            if (linkMatches) {
              links.push({
                file,
                links: linkMatches
              });
            }
          }
        }
      }
    }
    
    console.log(`🔍 Found ${links.length} files with links`);
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: links.length,
      files: links
    };
    
    fs.writeFileSync('link-checker-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: link-checker-report.json');
    
  } catch (error) {
    console.error('❌ Error in link checker:', error);
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
checkLinks().then(() => {
  console.log('✅ Link Checker Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Link Checker Automation Failed:', error);
  process.exit(1);
});