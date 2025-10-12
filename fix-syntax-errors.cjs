#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting syntax error fixes...');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues
    const fixes = [
      // Fix duplicate className attributes
      {
        pattern: /className="[^"]*"\s+className="[^"]*"/g,
        replacement: (match) => {
          const classes = match.match(/className="([^"]*)"/g);
          if (classes && classes.length > 1) {
            const allClasses = classes.map(c => c.replace('className="', '').replace('"', '')).join(' ');
            return `className="${allClasses}"`;
          }
          return match;
        }
      },
      
      // Fix missing semicolons in JSX
      {
        pattern: /(\w+)\s*=\s*\{[^}]*\}\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(';') && !match.includes('return') && !match.includes('if') && !match.includes('for')) {
            return match + ';';
          }
          return match;
        }
      },
      
      // Fix malformed JSX closing tags
      {
        pattern: /<\/div>\s*<\/div>\s*<\/section>/g,
        replacement: '</div>\n        </div>\n      </section>'
      },
      
      // Fix missing closing braces in object literals
      {
        pattern: /(\w+):\s*'[^']*'\s*$/gm,
        replacement: (match) => {
          if (!match.endsWith(',') && !match.endsWith('}')) {
            return match + ',';
          }
          return match;
        }
      },
      
      // Fix duplicate closing tags
      {
        pattern: /<\/li>\s*<\/li>/g,
        replacement: '</li>'
      },
      
      // Fix malformed interface definitions
      {
        pattern: /}\s*children:\s*ReactNode;/g,
        replacement: '}\n\ninterface Props {\n  children: ReactNode;'
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
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
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
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully fixed syntax errors in ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to fix syntax errors in ${errorCount} files`);
  }
  
  // Try to build the project to check if errors are resolved
  console.log('🔨 Testing build after syntax fixes...');
  try {
    const { execSync } = require('child_process');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful! All syntax errors resolved.');
  } catch (buildError) {
    console.log('❌ Build still has issues. Some syntax errors may remain.');
  }
  
} catch (error) {
  console.error('❌ Error during syntax error fixing:', error.message);
  process.exit(1);
}