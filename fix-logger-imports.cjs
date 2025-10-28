#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix logger import statements
function fixLoggerImports(content, filePath) {
  let modified = content;
  let hasChanges = false;

  // Fix named import to default import
  const namedImportRegex = /import\s+{\s*logger\s*}\s+from\s+['"][^'"]*logger[^'"]*['"];?/g;
  if (namedImportRegex.test(modified)) {
    modified = modified.replace(namedImportRegex, (match) => {
      const pathMatch = match.match(/from\s+['"]([^'"]*)['"]/);
      if (pathMatch) {
        return `import logger from '${pathMatch[1]}';`;
      }
      return match;
    });
    hasChanges = true;
  }

  return { content: modified, hasChanges };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: modified, hasChanges } = fixLoggerImports(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✅ Fixed logger imports in: ${filePath}`);
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
  console.log('🔧 Starting logger import fixes...\n');

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
    console.log('\n✅ Logger import fixes completed successfully!');
  } else {
    console.log('\n✨ No logger imports found to fix.');
  }
}

main().catch(console.error);