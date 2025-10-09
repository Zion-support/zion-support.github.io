#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining issues in a file
function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused variable declarations
    const lines = content.split('\n');
    const filteredLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip unused variable declarations
      if (line.includes('const _') && line.includes('=') && line.includes(';')) {
        continue;
      }
      
      // Skip unused imports
      if (line.includes('import') && line.includes('{') && line.includes('}')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const variableName = imp.split(' as ')[0].trim();
            return content.includes(variableName) && !line.includes(variableName);
          });
          if (usedImports.length === 0) {
            continue;
          }
        }
      }
      
      // Skip unused function declarations
      if (line.includes('const ') && line.includes('= () =>') && line.includes(';')) {
        const varMatch = line.match(/const\s+(\w+)\s*=/);
        if (varMatch) {
          const varName = varMatch[1];
          if (varName.startsWith('_') || !content.includes(varName)) {
            continue;
          }
        }
      }
      
      filteredLines.push(line);
    }
    
    if (filteredLines.length !== lines.length) {
      content = filteredLines.join('\n');
      modified = true;
    }
    
    // Fix specific parsing errors
    content = content.replace(/export\s+default\s+(\w+);\s*const\s+\1:/g, 'const $1:');
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*const\s+\1:/g, 'const $1:');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix JSX syntax issues
    content = content.replace(/>\s*</g, '><');
    content = content.replace(/\s+className=/g, ' className=');
    
    // Fix specific parsing errors in about page
    if (filePath.includes('about/page.tsx')) {
      content = content.replace(/export\s+default\s+AboutPage;\s*const\s+AboutPage:/g, 'const AboutPage:');
    }
    
    // Fix specific parsing errors in blog pages
    if (filePath.includes('blog/')) {
      content = content.replace(/export\s+default\s+(\w+);\s*const\s+\1:/g, 'const $1:');
    }
    
    // Remove duplicate component definitions
    const componentRegex = /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};/g;
    content = content.replace(componentRegex, (match, componentName) => {
      const parts = match.split('const ' + componentName + ': React.FC = () => {');
      if (parts.length > 1) {
        const firstPart = parts[0];
        const secondPart = parts[1];
        const firstBrace = secondPart.indexOf('{');
        const lastBrace = secondPart.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) {
          const firstDefinition = secondPart.substring(firstBrace, lastBrace + 1);
          return firstPart + 'const ' + componentName + ': React.FC = () => ' + firstDefinition + ';';
        }
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files that need fixing
function findFilesToFix(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting comprehensive fix...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesToFix = findFilesToFix(srcDir);
  
  console.log(`Found ${filesToFix.length} files to check`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesToFix) {
    if (fixAllIssues(filePath)) {
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nFix complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixAllIssues, findFilesToFix };