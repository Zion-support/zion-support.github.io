const fs = require('fs');
const path = require('path');

// Function to fix file structure issues
function fixFileStructure(content) {
  const lines = content.split('\n');
  const fixedLines = [];
  let inFunction = false;
  let functionName = '';
  let braceCount = 0;
  let parenCount = 0;
  let returnFound = false;
  let exportFound = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Track function declarations
    if (trimmedLine.startsWith('export default function ') || trimmedLine.startsWith('function ')) {
      if (inFunction && !returnFound) {
        // Previous function was incomplete, close it
        fixedLines.push('  return null;');
        fixedLines.push('}');
      }
      inFunction = true;
      functionName = trimmedLine.match(/function\s+(\w+)/)?.[1] || 'Anonymous';
      returnFound = false;
      exportFound = trimmedLine.startsWith('export default');
    }
    
    // Track braces and parentheses
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;
    }
    
    // Track return statements
    if (trimmedLine.startsWith('return ')) {
      returnFound = true;
    }
    
    // Check for incomplete function structure
    if (inFunction && braceCount === 0 && parenCount === 0 && returnFound) {
      // Function is complete
      inFunction = false;
      returnFound = false;
    }
    
    // Fix missing closing braces/parentheses
    if (inFunction && returnFound && braceCount > 0 && i === lines.length - 1) {
      // Add missing closing braces
      for (let j = 0; j < braceCount; j++) {
        fixedLines.push('}');
      }
      inFunction = false;
    }
    
    fixedLines.push(line);
  }
  
  // If we're still in a function at the end, close it
  if (inFunction && returnFound) {
    while (braceCount > 0) {
      fixedLines.push('}');
      braceCount--;
    }
  }
  
  return fixedLines.join('\n');
}

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importMatch = line.match(/import\s+(.+?)\s+from\s+['"](.+?)['"]/);
      if (importMatch) {
        const [, imports, source] = importMatch;
        const key = `${source}:${imports}`;
        
        if (!seenImports.has(key)) {
          seenImports.add(key);
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix duplicate imports first
    content = fixDuplicateImports(content);
    
    // Fix file structure
    content = fixFileStructure(content);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
const problemFiles = [
  '/workspace/app/about/page.tsx',
  '/workspace/app/ad-management/page.tsx',
  '/workspace/app/advanced-security-suite/page.tsx',
  '/workspace/app/ai-analytics-dashboard-pro/page.tsx',
  '/workspace/app/ai-analytics-dashboard/page.tsx'
];

console.log(`Processing ${problemFiles.length} problem files`);

for (const file of problemFiles) {
  processFile(file);
}

console.log('Done fixing file structure!');