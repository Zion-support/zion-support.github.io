const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Fix malformed component structures where export default function appears inside another function
  const lines = content.split('\n');
  const newLines = [];
  let inFunction = false;
  let braceCount = 0;
  let skipUntilClosingBrace = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're starting a function
    if (line.trim().startsWith('const ') && line.includes('React.FC') && line.includes('=')) {
      inFunction = true;
      braceCount = 0;
    }
    
    // Count braces
    if (inFunction) {
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
    }
    
    // Check for malformed export default function inside another function
    if (inFunction && line.trim().startsWith('export default function') && braceCount > 0) {
      // Skip this line and mark to skip until we close the current function
      skipUntilClosingBrace = true;
      continue;
    }
    
    // If we're skipping until closing brace, continue until we close the function
    if (skipUntilClosingBrace && inFunction) {
      if (braceCount === 0) {
        skipUntilClosingBrace = false;
        inFunction = false;
      }
      continue;
    }
    
    // Reset function tracking when we close a function
    if (inFunction && braceCount === 0) {
      inFunction = false;
    }
    
    newLines.push(line);
  }

  const newContent = newLines.join('\n');
  
  // Additional cleanup for specific patterns
  let cleanedContent = newContent;
  
  // Remove duplicate function declarations
  cleanedContent = cleanedContent.replace(/const \w+:\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\}\s*\n\s*export default function \w+\(\)\s*\{/g, (match) => {
    return match.replace(/const \w+:\s*React\.FC<[^>]*>\s*=\s*\([^)]*\)\s*=>\s*\{[\s\S]*?\}\s*\n\s*/, '');
  });
  
  // Fix malformed export statements
  cleanedContent = cleanedContent.replace(/export default \w+;\s*$/gm, '');
  
  // Clean up multiple empty lines
  cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (cleanedContent !== content) {
    fs.writeFileSync(file, cleanedContent, 'utf8');
    console.log(`Fixed malformed component in: ${file}`);
    modified = true;
  }
});

console.log('Malformed component cleanup completed');