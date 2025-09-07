const fs = require('fs');
const path = require('path');

function checkAccessibility() {
  const issues = [];
  
  // Check for alt attributes in images
  const imageFiles = findFiles(['.tsx', '.jsx'], ['components', 'app', 'pages']);
  
  imageFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgTags = content.match(/<img[^>]*>/g) || [];
    
    imgTags.forEach(img => {
      if (!img.includes('alt=')) {
        issues.push(`Missing alt attribute in ${file}: ${img}`);
      }
    });
  });
  
  // Check for proper heading hierarchy
  const pageFiles = findFiles(['.tsx', '.jsx'], ['app', 'pages']);
  
  pageFiles.forEach(file => {
    const headings = content.match(/<h[1-6][^>]*>/g) || [];
    
    let lastLevel = 0;
    headings.forEach(heading => {
      const level = parseInt(heading.match(/<h([1-6])/)[1]);
      if (level > lastLevel + 1) {
        issues.push(`Heading hierarchy issue in ${file}: ${heading}`);
      }
      lastLevel = level;
    });
  });
  
  if (issues.length > 0) {
    console.log('Accessibility issues found:');
    issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('✅ No accessibility issues found');
  }
  
  return issues;
}

function findFiles(extensions, directories) {
  const files = [];
  
  function scanDir(dir) {
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
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      scanDir(dir);
    }
  });
  
  return files;
}

checkAccessibility();