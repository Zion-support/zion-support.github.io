const fs = require('fs');
const path = require('path');

// Function to fix malformed JSX files
function fixMalformedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common issues
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');
    
    // Fix malformed closing tags at the end
    const lines = content.split('\n');
    const lastNonEmptyLine = lines.findLastIndex(line => line.trim() !== '');
    
    if (lastNonEmptyLine > 0) {
      const lastLine = lines[lastNonEmptyLine].trim();
      
      // If the last line is just a closing tag without proper structure, fix it
      if (lastLine.match(/^<\/[^>]+>$/)) {
        // Find the proper end of the component
        let properEndIndex = lastNonEmptyLine;
        
        // Look for the closing of the main return statement
        for (let i = lastNonEmptyLine; i >= 0; i--) {
          const line = lines[i].trim();
          if (line === ');' || line === '}' || line === '};') {
            properEndIndex = i;
            break;
          }
        }
        
        // Remove malformed lines after the proper end
        const fixedLines = lines.slice(0, properEndIndex + 1);
        
        // Add proper closing if missing
        if (!fixedLines[fixedLines.length - 1].includes('export default')) {
          const componentName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
          fixedLines.push('');
          fixedLines.push(`export default ${componentName}Page;`);
        }
        
        content = fixedLines.join('\n');
      }
    }
    
    // Ensure proper JSX structure
    if (content.includes('return (') && !content.includes('return (')) {
      content = content.replace(/return\s*\(/g, 'return (');
    }
    
    // Fix missing closing tags for fragments
    const openFragments = (content.match(/<>/g) || []).length;
    const closeFragments = (content.match(/<\/>/g) || []).length;
    
    if (openFragments > closeFragments) {
      // Add missing closing fragment tags
      const missingFragments = openFragments - closeFragments;
      for (let i = 0; i < missingFragments; i++) {
        content += '\n  </>';
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all problematic files
const { execSync } = require('child_process');
const problematicFiles = execSync('find app -name "*.tsx" -exec grep -l "React.Fragment\\|<>" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '');

console.log(`Found ${problematicFiles.length} files to fix`);

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixMalformedFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} files`);