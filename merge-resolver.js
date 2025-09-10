const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(message, color = '') {
  const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    reset: '\x1b[0m'
  };
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    if (content.includes('') || content.includes('>>>>>>>')) {
      log(`🔧 Cleaning conflicts in: ${filePath}`, 'yellow');
      
      // Remove merge conflict markers and keep HEAD version
      content = content.replace(/
      
      // Clean up syntax
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      content = content.replace(/^\s+$/gm, '');
      content = content.replace(/;+;+/g, ';');
      content = content.replace(/''+/g, "'");
      content = content.replace(/""+/g, '"');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        log(`✅ Cleaned conflicts in: ${filePath}`, 'green');
        return true;
      }
    }
    return false;
  } catch (error) {
    log(`❌ Error cleaning ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

// Find files with merge conflicts
function findConflictedFiles() {
  const conflictedFiles = [];
  
  function scanDirectory(dir) {
    try {
      const content = fs.readFileSync(file, 'utf8');
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');