import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
#!/usr/bin/env node





// Function to recursively find all files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules, dist, .git, and other build directories
      if (!['node_modules', 'dist', '.git', '.next', 'out', 'build'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to clean console.log statements
function cleanConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.info, console.debug (but keep console.error)
    const consoleRegex = /^\s*console\.(log|warn|info|debug)\s*\([^)]*\)\s*;?\s*$/gm;
    const newContent = content.replace(consoleRegex, '');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;

    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common TypeScript/React issues
function fixCommonIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix React import issues
    if (content.includes('React.') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix double semicolons
    content = content.replace(/;;+/g, ';');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error fixing issues in ${filePath}:`, error.message);
    return false;
  }
}

// Function to optimize imports
function optimizeImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused React imports if only JSX is used
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // Sort imports
    const importLines = content.match(/^import.*$/gm) || [];
    if (importLines.length > 1) {
      const sortedImports = importLines.sort();
      const otherContent = content.replace(/^import.*$/gm, '');
      content = sortedImports.join('\n') + '\n' + otherContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error optimizing imports in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {

  const files = findFiles('.', ['.ts', '.tsx', '.js', '.jsx'])
    .filter(file => 
      !file.includes('node_modules') && 
      !file.includes('dist') && 
      !file.includes('.git') &&
      !file.includes('corrupted') &&
      !file.includes('backup') &&
      !file.includes('disabled')
    );

  let cleanedCount = 0;
  let fixedCount = 0;
  let optimizedCount = 0;
  
  for (const file of files) {
    try {
      if (cleanConsoleLogs(file)) cleanedCount++;
      if (fixCommonIssues(file)) fixedCount++;
      if (optimizeImports(file)) optimizedCount++;
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }




  // Run linting and formatting

  try {
    execSync('npm run lint:fix', { stdio: 'inherit' });

  } catch (error) {

  }
  
  try {
    execSync('npm run format', { stdio: 'inherit' });

  } catch (error) {

  }

}

main().catch(console.error);