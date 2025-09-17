const fs = require('fs');
const path = require('path');

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix motion.div issues
    if (content.includes('motion.div') && !content.includes('</motion.div>')) {
      content = content.replace(/<motion\.div/g, '<div');
      content = content.replace(/<\/motion\.div>/g, '</div>');
      fixed = true;
    }

    // Fix malformed JSX structure
    if (content.includes('Expected closing') || content.includes('Unterminated')) {
      // Remove problematic lines
      const lines = content.split('\n');
      const fixedLines = lines.filter(line => 
        !line.includes('motion.div') && 
        !line.includes('Expected closing') &&
        !line.includes('Unterminated')
      );
      content = fixedLines.join('\n');
      fixed = true;
    }

    // Fix missing closing tags
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      const missingDivs = openDivs - closeDivs;
      content += '\n' + '</div>'.repeat(missingDivs);
      fixed = true;
    }

    // Fix missing closing tags for other elements
    const openP = (content.match(/<p/g) || []).length;
    const closeP = (content.match(/<\/p>/g) || []).length;
    if (openP > closeP) {
      const missingP = openP - closeP;
      content += '\n' + '</p>'.repeat(missingP);
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from src directory
console.log('Starting comprehensive syntax fixes...');
const fixedCount = fixDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files`);