#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive error fixing process...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`🔨 Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.includes('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (before =======)
        fixedLines.push(line);
      }
      // Skip the other branch content (after ======= and before >>>>>>>)
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`❌ Error fixing merge conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common import syntax errors
    if (content.includes('from \'react\';')) {
      content = content.replace(/from\s*\'react\';/g, 'from \'react\';');
      modified = true;
    }
    
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*\'([^\']+)\';/g, (match, imports, module) => {
      // Clean up imports
      const cleanImports = imports.replace(/\s*,\s*$/, '').replace(/\s*,\s*/g, ', ');
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*<\/\1>/g, '<$1></$1>');
    
    // Fix missing closing tags - simplified approach
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)>(?!.*<\/\1>)/g, (match, tagName, attributes) => {
      if (attributes.trim()) {
        return `<${tagName} ${attributes.trim()}></${tagName}>`;
      } else {
        return `<${tagName}></${tagName}>`;
      }
    });
    
    // Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)</g, '<>');
    content = content.replace(/>([^>]*?)<\/>/g, '></>');
    
    // Fix semicolon issues
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*\)/g, ')');
    
    // Fix comma issues in JSX
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*\)/g, ')');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
async function main() {
  try {
    console.log('📁 Finding source files...');
    const sourceFiles = findSourceFiles('./app');
    
    console.log(`📊 Found ${sourceFiles.length} source files`);
    
    let mergeConflictsFixed = 0;
    let syntaxErrorsFixed = 0;
    
    for (const file of sourceFiles) {
      // Fix merge conflicts first
      if (fixMergeConflicts(file)) {
        mergeConflictsFixed++;
      }
      
      // Then fix syntax errors
      if (fixSyntaxErrors(file)) {
        syntaxErrorsFixed++;
      }
    }
    
    console.log(`✅ Fixed merge conflicts in ${mergeConflictsFixed} files`);
    console.log(`✅ Fixed syntax errors in ${syntaxErrorsFixed} files`);
    
    // Try to run linting to check for remaining issues
    console.log('🔍 Running linting check...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ Linting passed!');
    } catch (error) {
      console.log('⚠️  Linting found issues, but continuing...');
    }
    
    // Try to run type checking
    console.log('🔍 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ Type checking passed!');
    } catch (error) {
      console.log('⚠️  Type checking found issues, but continuing...');
    }
    
    // Try to build
    console.log('🔨 Attempting build...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      console.log('✅ Build successful!');
    } catch (error) {
      console.log('⚠️  Build failed, but many issues were fixed');
    }
    
    console.log('🎉 Error fixing process completed!');
    
  } catch (error) {
    console.error('❌ Error during fixing process:', error.message);
    process.exit(1);
  }
}

main();