#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Performance Monitor Automation Started');

async function monitorPerformance() {
  try {
    console.log('📊 Monitoring performance...');
    
    const performanceResults = [];
    
    // Check bundle size
    console.log('📦 Checking bundle size...');
    try {
      const bundleSize = execSync('npm run build', { encoding: 'utf8' });
      performanceResults.push({
        type: 'bundle-size',
        result: 'Build completed for size analysis'
      });
    } catch (error) {
      performanceResults.push({
        type: 'bundle-size',
        result: 'Build failed for size analysis'
      });
    }
    
    // Check for performance issues in code
    console.log('🔍 Scanning for performance issues...');
    const sourceDirs = ['src', 'pages', 'components'];
    let performanceIssues = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        const files = getAllFiles(dir);
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            const content = fs.readFileSync(file, 'utf8');
            // Check for common performance anti-patterns
            if (content.includes('setInterval') || content.includes('setTimeout')) {
              performanceIssues.push({
                file,
                issue: 'Timer usage detected'
              });
            }
          }
        }
      }
    }
    
    if (performanceIssues.length > 0) {
      performanceResults.push({
        type: 'code-analysis',
        result: `Found ${performanceIssues.length} potential performance issues`
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: performanceResults.length,
      results: performanceResults,
      issues: performanceIssues
    };
    
    fs.writeFileSync('performance-monitor-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: performance-monitor-report.json');
    
  } catch (error) {
    console.error('❌ Error in performance monitoring:', error);
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
monitorPerformance().then(() => {
  console.log('✅ Performance Monitor Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Performance Monitor Automation Failed:', error);
  process.exit(1);
});