
const fs = require('fs');
const path = require('path');

function checkAccessibility() {
  console.log('Checking accessibility...');
  
  // Check for common accessibility issues
  const issues = [];
  
  // Check for missing alt attributes in images
  const imageFiles = findFiles('src', '.tsx');
  imageFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgTags = content.match(/<img[^>]*>/g) || [];
    
    imgTags.forEach(imgTag => {
      if (!imgTag.includes('alt=')) {
        issues.push(`Missing alt attribute in ${file}`);
      }
    });
  });
  
  // Check for proper heading structure
  const pageFiles = findFiles('src/pages', '.tsx');
  pageFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const h1Tags = (content.match(/<h1[^>]*>/g) || []).length;
    const h2Tags = (content.match(/<h2[^>]*>/g) || []).length;
    
    if (h1Tags === 0) {
      issues.push(`Missing h1 tag in ${file}`);
    }
  });
  
  if (issues.length > 0) {
    console.log('Accessibility issues found:');
    issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('No accessibility issues found');
  }
  
  return issues;
}

function findFiles(dir, ext) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, ext));
    } else if (item.endsWith(ext)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

checkAccessibility();
