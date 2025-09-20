#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing all remaining syntax errors...');

// Function to fix all syntax errors in a file
function fixAllSyntaxErrors(content, filePath) {
  let fixed = content;
  let hasChanges = false;

  // Fix missing semicolon after array closing bracket before useEffect
  fixed = fixed.replace(/\]\);?\s*useEffect/g, (match) => {
    hasChanges = true;
    return ']);\n\n  useEffect';
  });

  // Fix missing semicolon after array closing bracket before const
  fixed = fixed.replace(/\]\);?\s*const /g, (match) => {
    hasChanges = true;
    return ']);\n\n  const ';
  });

  // Fix missing semicolon after object closing bracket before const
  fixed = fixed.replace(/}\);?\s*const /g, (match) => {
    hasChanges = true;
    return '});\n\n  const ';
  });

  // Fix missing semicolon after object closing bracket before function calls
  fixed = fixed.replace(/}\);?\s*([a-zA-Z_][a-zA-Z0-9_]*)\(/g, (match, funcName) => {
    hasChanges = true;
    return `});\n\n    ${funcName}(`;
  });

  // Fix semicolon instead of comma in switch cases
  fixed = fixed.replace(/case '([^']+)': return ([^,;]+),/g, (match, caseValue, returnValue) => {
    hasChanges = true;
    return `case '${caseValue}': return ${returnValue};`;
  });

  // Fix comma instead of semicolon at end of function return
  fixed = fixed.replace(/return ([^;]+),\s*}/g, (match, returnValue) => {
    hasChanges = true;
    return `return ${returnValue};\n  }`;
  });

  // Fix comma instead of semicolon in object method closing
  fixed = fixed.replace(/\),\s*};/g, (match) => {
    hasChanges = true;
    return ');\n  };';
  });

  // Fix TypeScript function syntax
  fixed = fixed.replace(/\(\) : any =>/g, (match) => {
    hasChanges = true;
    return '() =>';
  });

  fixed = fixed.replace(/\(([^)]+) : any =>/g, (match, params) => {
    hasChanges = true;
    return `(${params} =>`;
  });

  // Fix unterminated string at end of export
  fixed = fixed.replace(/export default (\w+);?'/g, (match, componentName) => {
    hasChanges = true;
    return `export default ${componentName};`;
  });

  // Fix trailing comma in return statement
  fixed = fixed.replace(/\),\s*};?\s*$/gm, (match) => {
    hasChanges = true;
    return ');\n};';
  });

  return { content: fixed, hasChanges };
}

// Function to process all TypeScript/JavaScript files
function processAllFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules, .git, and other common directories
            if (!['node_modules', '.git', '.next', 'out', 'dist', 'build'].includes(item)) {
              traverse(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
              files.push(fullPath);
            }
          }
        } catch (error) {
          console.log(`⚠️ Skipping ${fullPath}: ${error.message}`);
        }
      }
    } catch (error) {
      console.log(`⚠️ Cannot read directory ${currentDir}: ${error.message}`);
    }
  }
  
  traverse(dir);
  return files;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, hasChanges } = fixAllSyntaxErrors(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
try {
  const sourceDir = process.cwd();
  const sourceFiles = processAllFiles(sourceDir);
  
  console.log(`📁 Found ${sourceFiles.length} source files to process...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    try {
      if (processFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📁 Total files processed: ${sourceFiles.length}`);
  
  console.log('\n🎉 All syntax fixes completed!');
  
} catch (error) {
  console.error('💥 Fatal error:', error.message);
  process.exit(1);
}