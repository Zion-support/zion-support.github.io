const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Remove unused imports that are not used in the component
  const lines = content.split('\n');
  const newLines = [];
  const usedImports = new Set();
  
  // First pass: find what's actually used in the JSX
  const jsxContent = content.match(/return\s*\([\s\S]*?\);/)?.[0] || '';
  
  // Check for Navigation and Footer usage
  if (jsxContent.includes('<Navigation') || jsxContent.includes('<Navigation />')) {
    usedImports.add('Navigation');
  }
  if (jsxContent.includes('<Footer') || jsxContent.includes('<Footer />')) {
    usedImports.add('Footer');
  }
  
  // Check for React usage (usually not needed in modern React)
  if (jsxContent.includes('React.') || content.includes('React.createElement')) {
    usedImports.add('React');
  }

  // Process each line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip import lines that are not used
    if (line.trim().startsWith('import ')) {
      const importMatch = line.match(/import\s+(?:React|Navigation|Footer)\s+from/);
      if (importMatch) {
        const importName = importMatch[0].match(/import\s+(\w+)\s+from/)?.[1];
        if (importName && !usedImports.has(importName)) {
          // Skip this import line
          continue;
        }
      }
    }
    
    // Remove unused function declarations
    if (line.trim().startsWith('function Page') || 
        line.trim().startsWith('const Page') ||
        line.trim().startsWith('function ') && line.includes('Page') ||
        line.trim().startsWith('const ') && line.includes('Page') && line.includes('=')) {
      
      // Check if this is the default export
      const nextLine = lines[i + 1];
      if (!nextLine || !nextLine.includes('export default')) {
        // Skip this function/const declaration
        continue;
      }
    }
    
    newLines.push(line);
  }

  const newContent = newLines.join('\n');
  
  // Clean up multiple empty lines
  const cleanedContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (cleanedContent !== content) {
    fs.writeFileSync(file, cleanedContent, 'utf8');
    console.log(`Fixed unused variables in: ${file}`);
    modified = true;
  }
});

console.log('All unused variable cleanup completed');