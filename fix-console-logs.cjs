#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to replace console.log with proper logging
function replaceConsoleLogs(content, filePath) {
  // Skip if it's a logger file itself
  if (filePath.includes('logger.ts') || filePath.includes('logger.js')) {
    return content;
  }

  let modified = content;
  let hasChanges = false;

  // Replace console.log with logger.info
  const consoleLogRegex = /console\.log\(/g;
  if (consoleLogRegex.test(modified)) {
    modified = modified.replace(consoleLogRegex, 'logger.info(');
    hasChanges = true;
  }

  // Replace console.error with logger.error
  const consoleErrorRegex = /console\.error\(/g;
  if (consoleErrorRegex.test(modified)) {
    modified = modified.replace(consoleErrorRegex, 'logger.error(');
    hasChanges = true;
  }

  // Replace console.warn with logger.warn
  const consoleWarnRegex = /console\.warn\(/g;
  if (consoleWarnRegex.test(modified)) {
    modified = modified.replace(consoleWarnRegex, 'logger.warn(');
    hasChanges = true;
  }

  // Add logger import if we made changes and it doesn't exist
  if (hasChanges && !modified.includes("import { logger }")) {
    // Find the last import statement
    const importRegex = /^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
    const imports = modified.match(importRegex);
    
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = modified.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      modified = modified.slice(0, insertIndex) + 
        "\nimport { logger } from './utils/logger';" + 
        modified.slice(insertIndex);
    } else {
      // No imports found, add at the top
      modified = "import { logger } from './utils/logger';\n" + modified;
    }
  }

  return modified;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const modified = replaceConsoleLogs(content, filePath);
    
    if (modified !== content) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✅ Fixed console statements in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔧 Starting console.log cleanup...\n');

  // Find all TypeScript and JavaScript files in the app directory
  const patterns = [
    'app/**/*.ts',
    'app/**/*.tsx',
    'app/**/*.js',
    'app/**/*.jsx'
  ];

  let totalFiles = 0;
  let modifiedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: __dirname });
    
    files.forEach(file => {
      totalFiles++;
      const fullPath = path.join(__dirname, file);
      
      // Skip certain files
      if (file.includes('node_modules') || 
          file.includes('.next') || 
          file.includes('logger.ts') ||
          file.includes('logger.js')) {
        return;
      }
      
      if (processFile(fullPath)) {
        modifiedFiles++;
      }
    });
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${modifiedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - modifiedFiles}`);

  if (modifiedFiles > 0) {
    console.log('\n✅ Console.log cleanup completed successfully!');
  } else {
    console.log('\n✨ No console.log statements found to fix.');
  }
}

main().catch(console.error);