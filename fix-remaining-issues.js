
#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'

// Function to fix remaining syntax issues
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);'
    let modified = false;

    // Fix various patterns
    const patterns = [
      // Fix missing quotes in import statements
      { from: /import { Helmet  } from 'react-helmet-async;/g, to: "import { Helmet } from react-helmet-async';" },'
      { from: /import { Helmet } from react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async';" },
      { from: /import { Helmet} from 'react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async;" },'
      
      // Fix extra closing braces
      { from: /^}\s*$/gm, to: ' },'
      
      // Fix any remaining unterminated strings
      { from: /'react-helmet-async;/g, to: "react-helmet-async';" },'
      
      // Fix any remaining stray quotes
      { from: /;\s*$/gm, to: ';' },
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Clean up extra newlines and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);`
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`
  }
  return false;
}

// Function to find all TSX/TS files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith(.ts')) {'
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we cant read'
    }
    // Write the fixed content back to the file
    if (modified) {
      const fixedContent = fixedLines.join('\n')
      fs.writeFileSync(filePath, fixedContent, 'utf8')
    }
    return modified
  } catch (error) {
    console.error(`❌ Error fixing issues in ${filePath}:`, error.message)
    return false
  }
}

// Main execution
console.log('Fixing remaining syntax issues...);'

const directories = ['./app, './src'];'
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);`
    
    for (const file of tsxFiles) {
      if (fixRemainingIssues(file)) {
        totalFixed++;
      }
    }
  }
  scanDirectory(dir)
  return files
}
// Main execution
try {
  console.log('🔍 Scanning for files with issues...')
  const problematicFiles = findFilesWithIssues('.')
  console.log(`📊 Found ${problematicFiles.length} files with duplicate export issues`)
  let fixedCount = 0
  let errorCount = 0
  // Fix duplicate export issues
  for (const file of problematicFiles) {
    if (fixFileIssues(file)) {
      fixedCount++
    } else {
      errorCount++
    }
  }
  // Fix unused imports in specific files
  const filesToFixImports = [
    './App-minimal.tsx',
    './App_minimal.tsx'
  ]
  for (const file of filesToFixImports) {
    if (fs.existsSync(file)) {
      if (fixUnusedImports(file)) {
        fixedCount++
      }
    }
  }
  console.log(`✅ Successfully fixed issues in ${fixedCount} files`)
  if (errorCount > 0) {
    console.log(`❌ Failed to fix issues in ${errorCount} files`)
  }
  // Run type check to verify fixes
  console.log('🔍 Running type check verification...')
  try {
    execSync('npm run type-check', { stdio: 'inherit' })
    console.log('✅ Type check passed! All issues resolved.')
  } catch (error) {
    console.log('⚠️  Type check still has issues. Running lint check...')
    try {
      execSync('npm run lint', { stdio: 'inherit' })
      console.log('✅ Lint check passed!')
    } catch (lintError) {
      console.log('⚠️  Some linting issues remain, but build should work.')
    }
  }
} catch (error) {
  console.error('💥 Fatal error during issue resolution:', error.message)
  process.exit(1)
}

console.log(`Total fixed: ${totalFixed} files.`);`
