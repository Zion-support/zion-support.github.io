const fs = require('fs');
const path = require('path');

function checkCodeQuality() {
  const issues = [];
  
  // Check for unused imports
  const files = findFiles(['.tsx', '.ts', '.jsx', '.js'], ['app', 'components', 'pages']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for console.log statements in production code
    if (content.includes('console.log') && !file.includes('test')) {
      issues.push(`Console.log found in ${file}`);
    }
    
    // Check for TODO comments
    const todoMatches = content.match(/TODO|FIXME|HACK/g);
    if (todoMatches) {
      issues.push(`TODO comments found in ${file}: ${todoMatches.length}`);
    }
    
    // Check for long functions (over 50 lines)
    const functions = content.match(/function[^{]*{[sS]*?}/g) || [];
    functions.forEach(func => {
      const lines = func.split('\n').length;
      if (lines > 50) {
        issues.push(`Long function in ${file}: ${lines} lines`);
      }
    });
  });
  
  if (issues.length > 0) {
    console.log('Code quality issues found:');
    issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('✅ No code quality issues found');
  }
  
  return issues;
}

function findFiles(extensions, directories) {
  const files = [];
  
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  directories.forEach(dir => scanDir(dir));
  return files;
}

checkCodeQuality();