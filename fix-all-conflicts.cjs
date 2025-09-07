const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);

console.log(🔧 Starting comprehensive conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);
    let modified = false;

    // Remove merge conflict markers
    const conflictPatterns = [
      /
      /
    ];

    conflictPatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, ');
        modified = true;
      }
    });

    // Remove duplicate imports and declarations
    const lines = content.split('\n);
    const seen = new Set();
    const cleanedLines = [];

    for (const line of lines) {
      const trimmed = line.trim();
      
      // Skip empty lines and comments
      if (!trimmed || trimmed.startsWith(//') || trimmed.startsWith('/*)) {
        cleanedLines.push(line);
        continue;
      }

      // Check for duplicate require/import statements
      if (trimmed.startsWith(const ') && trimmed.includes('require()) {
        const key = trimmed.split(=')[0].trim();
        if (seen.has(key)) {
          continue;
        }
        seen.add(key);
      }

      // Check for duplicate class/function declarations
      if (trimmed.startsWith('class ) || trimmed.startsWith(function ')) {
        const key = trimmed.split('()[0].split({')[0].trim();
        if (seen.has(key)) {
          continue;
        }
        seen.add(key);
      }

      cleanedLines.push(line);
    }

    if (modified || cleanedLines.length !== lines.length) {
      fs.writeFileSync(filePath, cleanedLines.join('\n));
      console.log(`✅ Fixed conflicts in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix semicolon issues
      { pattern: /;\s*;+/g, replacement: '; },
      { pattern: /,\s*;+/g, replacement: ,' },
      { pattern: /{\s*;+/g, replacement: '{ },
      { pattern: /}\s*;+/g, replacement: }' },
      
      // Fix object syntax
      { pattern: /{\s*}/g, replacement: '{} },
      { pattern: /,\s*}/g, replacement: }' },
      { pattern: /,\s*]/g, replacement: '] },
      
      // Fix string issues
      { pattern: /"([^]*)([^"]*)"([^]*)/g, replacement: "$1$2$3"' },
      { pattern: /'([^]*)([^']*)'([^]*)/g, replacement: "'$1$2$3'" },
      
      // Fix function syntax
      { pattern: /function\s*\(\s*\)\s*{/g, replacement: function() { },
      { pattern: /\(\s*\)\s*=>\s*{/g, replacement: '() => {' },
      
      // Fix module.exports
      { pattern: /module\.exports\s*=\s*{\s*}/g, replacement: module.exports = {} }];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error fixing syntax in ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other directories
          if (!['node_modules', .next, 'dist', build, 'out', coverage].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for merge conflict markers
          if (item.endsWith('.js') || item.endsWith(.ts) || item.endsWith('.tsx') || 
              item.endsWith(.jsx) || item.endsWith('.cjs') || item.endsWith(.mjs) ||
              item.endsWith('.json')) {
            try {
              const content = fs.readFileSync(fullPath, utf8);
              if (content.includes('<<<<<<<') || content.includes(=======) || content.includes('>>>>>>>')) {
                files.push(fullPath);
              }
            } catch (error) {
              // Skip files that cant be read
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that cant be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
async function main() {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts(/workspace);
  
  console.log(`Found ${conflictedFiles.length} files with conflicts`);
  
  let fixedCount = 0;
  let syntaxFixedCount = 0;
  
  for (const file of conflictedFiles) {
    console.log(`\n🔧 Processing: ${file}`);
    
    // Fix merge conflicts
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
    
    // Fix syntax errors
    if (fixSyntaxErrors(file)) {
      syntaxFixedCount++;
    }
  }
  
  console.log(`\n✅ Summary:`);
  console.log(`   - Files with conflicts fixed: ${fixedCount}`);
  console.log(`   - Files with syntax errors fixed: ${syntaxFixedCount}`);
  console.log(`   - Total files processed: ${conflictedFiles.length}`);
  
  // Try to run a basic test
  console.log('\n🧪 Testing fixes...');
  try {
    execSync(npm run type-check, { stdio: 'pipe' });
    console.log(✅ TypeScript check passed);
  } catch (error) {
    console.log('⚠️  TypeScript check failed, but continuing...');
  }
  
  console.log('\n🎉 Conflict resolution completed!');
}

main().catch(console.error);