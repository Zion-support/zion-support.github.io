const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflict markers
const conflictFiles = [
  './types/empty.ts',
  './types/index.ts',
  './App.tsx',
  './scripts/pm2/test-automation.js',
  './scripts/pm2/code-quality-monitor.js',
  './scripts/pm2/dependency-monitor.js',
  './scripts/pm2/health-monitor.js',
  './scripts/pm2/docs-generator.js',
  './scripts/pm2/build-optimizer.js',
  './scripts/pm2/security-scanner.js'
];

function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep our version (the part after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]*\n?/g, '$1');
    
    // Also handle cases where there's no content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n>>>>>>> [^\n]*\n?/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD.*?\n/g, '');
    content = content.replace(/=======.*?\n/g, '');
    content = content.replace(/>>>>>>> .*?\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean all conflict files
conflictFiles.forEach(cleanMergeConflicts);

// Create simple empty files for types
fs.writeFileSync('./types/empty.ts', '// Empty TypeScript file\nexport {};\n');
fs.writeFileSync('./types/index.ts', '// Type definitions index\nexport {};\n');

console.log('Cleaned all merge conflicts');