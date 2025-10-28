#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix syntax errors
function fixSyntaxErrors(content, filePath) {
  let modified = content;
  let hasChanges = false;

  // Fix duplicate export default statements
  const exportDefaultRegex = /export\s+default\s+[^;]+;?\s*export\s+default\s+[^;]+;?/g;
  if (exportDefaultRegex.test(modified)) {
    modified = modified.replace(exportDefaultRegex, (match) => {
      const exports = match.match(/export\s+default\s+[^;]+;?/g);
      if (exports && exports.length > 1) {
        hasChanges = true;
        return exports[exports.length - 1]; // Keep the last one
      }
      return match;
    });
  }

  // Fix missing opening tags in JSX
  const missingOpeningTagRegex = /(\s*)<\/>\s*\);\s*}\s*$/;
  if (missingOpeningTagRegex.test(modified)) {
    modified = modified.replace(missingOpeningTagRegex, (match, indent) => {
      hasChanges = true;
      return `${indent}    </>\n  );\n}`;
    });
  }

  // Fix multiple export default statements (keep only the last one)
  const multipleExports = modified.match(/export\s+default\s+[^;]+;?/g);
  if (multipleExports && multipleExports.length > 1) {
    // Remove all but the last export default
    const lastExport = multipleExports[multipleExports.length - 1];
    modified = modified.replace(/export\s+default\s+[^;]+;?\s*/g, '');
    modified = modified.trim() + '\n\n' + lastExport;
    hasChanges = true;
  }

  // Clean up extra whitespace and empty lines
  if (hasChanges) {
    modified = modified.replace(/\n\s*\n\s*\n/g, '\n\n');
    modified = modified.replace(/\s+$/gm, '');
  }

  return { content: modified, hasChanges };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: modified, hasChanges } = fixSyntaxErrors(content, filePath);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, modified, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
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
  console.log('🔧 Starting syntax error fixes...\n');

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
    console.log('\n✅ Syntax error fixes completed successfully!');
  } else {
    console.log('\n✨ No syntax errors found to fix.');
  }
}

main().catch(console.error);