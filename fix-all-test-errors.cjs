const fs = require('fs');
const path = require('path');

// Function to completely rewrite malformed test files
function fixTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Clean up the content completely
    const lines = content.split('\n');
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix malformed import statements
      if (line.includes('import') && line.includes('from')) {
        // Extract the import parts
        const importMatch = line.match(/import\s+([^;]+);'?/);
        if (importMatch) {
          line = importMatch[1] + ';';
        }
      }
      
      // Fix malformed describe and test statements
      if (line.includes('describe(') || line.includes('test(')) {
        line = line.replace(/['"];\s*{/g, "', () => {");
        line = line.replace(/}\}/g, "});");
        line = line.replace(/}\s*'/g, "});");
      }
      
      // Fix malformed expect statements
      if (line.includes('expect(')) {
        line = line.replace(/}\)\}/g, "});");
        line = line.replace(/}\)\s*'/g, "});");
      }
      
      // Remove empty lines and malformed lines
      if (line.trim() && !line.match(/^['"]*$/)) {
        cleanedLines.push(line);
      }
    }
    
    const newContent = cleanedLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix test files
function fixTestFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixTestFilesInDirectory(filePath);
    } else if (file.endsWith('.test.js') || file.endsWith('.test.tsx') || file.endsWith('.test.ts')) {
      if (fixTestFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive test file fixes...');
const fixedCount = fixTestFilesInDirectory('./__tests__');
console.log(`Fixed ${fixedCount} test files`);