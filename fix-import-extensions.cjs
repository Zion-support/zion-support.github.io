#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix import extensions
function fixImportExtensions(content, filePath) {
  let modified = content;
  let hasChanges = false;

  // Remove .ts extension from imports
  const tsExtensionRegex = /from\s+['"]([^'"]*)\.ts['"];?/g;
  if (tsExtensionRegex.test(modified)) {
    modified = modified.replace(tsExtensionRegex, (match, importPath) => {
      return `from '${importPath}';`;
    });
    hasChanges = true;
  }

  // Remove .tsx extension from imports
  const tsxExtensionRegex = /from\s+['"]([^'"]*)\.tsx['"];?/g;
  if (tsxExtensionRegex.test(modified)) {
    modified = modified.replace(tsxExtensionRegex, (match, importPath) => {
      return `from '${importPath}';`;
    });
    hasChanges = true;
  }

  return { content: modified, hasChanges };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: modified, hasChanges } = fixImportExtensions(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✅ Fixed import extensions in: ${filePath}`);
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
  console.log('🔧 Starting import extension fixes...\n');

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
          file.includes('.next')) {
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
    console.log('\n✅ Import extension fixes completed successfully!');
  } else {
    console.log('\n✨ No import extensions found to fix.');
  }
}

main().catch(console.error);