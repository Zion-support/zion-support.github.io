#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing semicolon issues in JSX...');

// Function to fix semicolon issues in JSX
function fixSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix semicolons in JSX props
    const fixes = [
      // Fix semicolons in JSX props
      {
        pattern: /(\w+)=\{([^}]+)\};/g,
        replacement: '$1={$2}'
      },
      // Fix semicolons in JSX attributes
      {
        pattern: /(\w+)="([^"]+)";/g,
        replacement: '$1="$2"'
      },
      // Fix semicolons in JSX key props
      {
        pattern: /key=\{([^}]+)\};/g,
        replacement: 'key={$1}'
      },
      // Fix semicolons in JSX className props
      {
        pattern: /className="([^"]+)";/g,
        replacement: 'className="$1"'
      },
      // Fix semicolons in JSX onClick props
      {
        pattern: /onClick=\{([^}]+)\};/g,
        replacement: 'onClick={$1}'
      },
      // Fix semicolons in JSX to props
      {
        pattern: /to=\{([^}]+)\};/g,
        replacement: 'to={$1}'
      },
      // Fix semicolons in JSX href props
      {
        pattern: /href=\{([^}]+)\};/g,
        replacement: 'href={$1}'
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
      console.log(`✅ Fixed semicolons in: ${filePath}`);
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
    if (fixSemicolons(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully fixed semicolons in ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to fix semicolons in ${errorCount} files`);
  }
  
  // Try to build the project to check if errors are resolved
  console.log('🔨 Testing build after semicolon fixes...');
  try {
    const { execSync } = require('child_process');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful! All semicolon issues resolved.');
  } catch (buildError) {
    console.log('❌ Build still has issues. Some semicolon issues may remain.');
  }
  
} catch (error) {
  console.error('❌ Error during semicolon fixing:', error.message);
  process.exit(1);
}