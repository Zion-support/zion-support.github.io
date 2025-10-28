const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Fix missing closing braces in forEach loops and other blocks
  const lines = content.split('\n');
  const newLines = [];
  let braceCount = 0;
  let inFunction = false;
  let inForEach = false;
  let forEachBraceCount = 0;
  let inIf = false;
  let ifBraceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're starting a forEach loop
    if (line.includes('.forEach(') || line.includes('.map(') || line.includes('.filter(')) {
      inForEach = true;
      forEachBraceCount = 0;
    }
    
    // Check if we're starting a function
    if (line.trim().startsWith('const ') && line.includes('=') && line.includes('(')) {
      inFunction = true;
      braceCount = 0;
    }
    
    // Check if we're starting an if statement
    if (line.trim().startsWith('if (') && line.includes('{')) {
      inIf = true;
      ifBraceCount = 0;
    }
    
    // Count braces
    if (inFunction || inForEach || inIf) {
      for (const char of line) {
        if (char === '{') {
          if (inForEach) forEachBraceCount++;
          if (inFunction) braceCount++;
          if (inIf) ifBraceCount++;
        }
        if (char === '}') {
          if (inForEach) forEachBraceCount--;
          if (inFunction) braceCount--;
          if (inIf) ifBraceCount--;
        }
      }
    }
    
    newLines.push(line);
    
    // Check if we need to add missing closing braces
    if (inForEach && forEachBraceCount === 0 && line.includes('});')) {
      inForEach = false;
    }
    
    if (inFunction && braceCount === 0 && (line.includes('});') || line.includes('}'))) {
      inFunction = false;
    }
    
    if (inIf && ifBraceCount === 0 && line.includes('}')) {
      inIf = false;
    }
    
    // Add missing closing braces for forEach loops
    if (inForEach && forEachBraceCount > 0 && i === lines.length - 1) {
      for (let j = 0; j < forEachBraceCount; j++) {
        newLines.push('    }');
      }
      newLines.push('  });');
      inForEach = false;
    }
  }

  const newContent = newLines.join('\n');
  
  // Additional cleanup for specific patterns
  let cleanedContent = newContent;
  
  // Fix missing closing braces in forEach loops
  cleanedContent = cleanedContent.replace(/(\s+)([^}]+)\s*$/gm, (match, indent, content) => {
    if (content.includes('.forEach(') && !content.includes('});')) {
      return match + '\n' + indent + '  });';
    }
    return match;
  });
  
  // Fix missing closing braces in general
  const openBraces = (cleanedContent.match(/\{/g) || []).length;
  const closeBraces = (cleanedContent.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missingBraces = openBraces - closeBraces;
    cleanedContent += '\n' + '}'.repeat(missingBraces);
    modified = true;
  }
  
  // Fix extra closing braces
  if (openBraces < closeBraces) {
    const extraBraces = closeBraces - openBraces;
    cleanedContent = cleanedContent.replace(/\}/g, (match, offset) => {
      if (offset < extraBraces) return '';
      return match;
    });
    modified = true;
  }
  
  // Clean up multiple empty lines
  cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (cleanedContent !== content) {
    fs.writeFileSync(file, cleanedContent, 'utf8');
    console.log(`Fixed syntax errors in: ${file}`);
    modified = true;
  }
});

console.log('Final syntax error cleanup completed');