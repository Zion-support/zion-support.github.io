#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing JSX structural issues...');

// Function to fix JSX structural issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structural issues
    const fixes = [
      // Fix misplaced closing section tags
      {
        pattern: /<section[^>]*>\s*<\/section>\s*<div[^>]*>/g,
        replacement: '<section$1>\n        <div$2>'
      },
      
      // Fix missing opening tags before sections
      {
        pattern: /(\s*)<\/div>\s*<\/div>\s*<\/section>\s*<section[^>]*>\s*<\/section>\s*<div[^>]*>/g,
        replacement: '$1        </div>\n      </section>\n\n      <section$2>\n        <div$3>'
      },
      
      // Fix orphaned closing tags
      {
        pattern: /<\/section>\s*<div[^>]*>\s*<div[^>]*>\s*<h2[^>]*>/g,
        replacement: '<section>\n        <div>\n          <div>\n            <h2>'
      },
      
      // Fix missing opening section tags
      {
        pattern: /(\s*)<div[^>]*>\s*<div[^>]*>\s*<h2[^>]*>([^<]*)<\/h2>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/g,
        replacement: '$1<section>\n        <div>\n          <div>\n            <h2>$2</h2>\n            <p>$3</p>\n          </div>\n        </div>\n      </section>'
      },
      
      // Fix malformed JSX structure
      {
        pattern: /(\s*)<\/div>\s*<\/div>\s*<\/section>\s*<section[^>]*>\s*<\/section>\s*<div[^>]*>\s*<div[^>]*>\s*<h2[^>]*>/g,
        replacement: '$1        </div>\n      </section>\n\n      <section>\n        <div>\n          <div>\n            <h2>'
      },
      
      // Fix duplicate closing tags
      {
        pattern: /<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/section>/g,
        replacement: '</div>\n        </div>\n      </section>'
      },
      
      // Fix missing opening tags
      {
        pattern: /(\s*)<div[^>]*>\s*<div[^>]*>\s*<h2[^>]*>([^<]*)<\/h2>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<\/div>\s*<\/section>\s*<section[^>]*>\s*<\/section>/g,
        replacement: '$1<section>\n        <div>\n          <div>\n            <h2>$2</h2>\n            <p>$3</p>\n          </div>\n        </div>\n      </section>\n\n      <section>'
      }
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const sourceFiles = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(file)) {
          scanDirectory(filePath);
        }
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
        sourceFiles.push(filePath);
      }
    }
  }
  
  scanDirectory('.');
  return sourceFiles;
}

// Main execution
try {
  const sourceFiles = findSourceFiles('.');
  console.log(`🔍 Found ${sourceFiles.length} source files`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    if (fixJSXStructure(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully fixed JSX structure in ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to fix JSX structure in ${errorCount} files`);
  }
  
  // Try to build the project to check if errors are resolved
  console.log('🔨 Testing build after JSX structure fixes...');
  try {
    const { execSync } = require('child_process');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful! All JSX structure issues resolved.');
  } catch (buildError) {
    console.log('❌ Build still has issues. Some JSX structure issues may remain.');
  }
  
} catch (error) {
  console.error('❌ Error during JSX structure fixing:', error.message);
  process.exit(1);
}