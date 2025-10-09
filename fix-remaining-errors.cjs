#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate component definitions
    const componentRegex = /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};/g;
    if (componentRegex.test(content)) {
      content = content.replace(componentRegex, (match, componentName) => {
        // Keep only the first definition
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
      modified = true;
    }
    
    // Fix missing closing braces by adding them at the end if needed
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix JSX syntax issues
    content = content.replace(/>\s*</g, '><'); // Remove spaces between JSX tags
    content = content.replace(/\s+className=/g, ' className='); // Fix className spacing
    
    // Remove unused imports and variables
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      // Remove unused variable declarations
      if (line.includes('const _') && line.includes('=') && line.includes(';')) {
        return false;
      }
      // Remove unused imports
      if (line.includes('import') && line.includes('{') && line.includes('}')) {
        const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const variableName = imp.split(' as ')[0].trim();
            return content.includes(variableName) && !line.includes(variableName);
          });
          if (usedImports.length === 0) {
            return false;
          }
        }
      }
      return true;
    });
    
    if (filteredLines.length !== lines.length) {
      content = filteredLines.join('\n');
      modified = true;
    }
    
    // Fix specific parsing errors
    content = content.replace(/export\s+default\s+(\w+);\s*const\s+\1:/g, 'const $1:');
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[\s\S]*?\};\s*const\s+\1:/g, 'const $1:');
    
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

// Function to find files with parsing errors
function findFilesWithParsingErrors(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common parsing issues
          if (content.includes('const _') || 
              (content.match(/\{/g) || []).length !== (content.match(/\}/g) || []).length ||
              content.includes('const ') && content.includes('React.FC') && content.includes('const ')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting parsing error fixes...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const filesWithErrors = findFilesWithParsingErrors(srcDir);
  
  console.log(`Found ${filesWithErrors.length} files with potential parsing errors`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesWithErrors) {
    if (fixParsingErrors(filePath)) {
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

module.exports = { fixParsingErrors, findFilesWithParsingErrors };