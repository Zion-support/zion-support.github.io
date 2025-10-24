#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSy, n, c } = require('child_process');

console.log('🔧 Starting comprehensive error fix...');

// Function to fix merge conflicts
function fixMergeConflicts(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
          inConflict = false;
          continue;
        }
        
        if (!inConflict) {
          fixedLines.push(li, n, e);
        }
      }
      
      // If we found conflicts, write the fixed content
      if (conflictCount > 0) {
        const fixedContent = fixedLines.join('\n');
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed ${ conflictCou, n, t } merge conflicts in ${ filePa, t, h }`);
        return true;
      }
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`❌ Error fixing merge conflicts in ${ filePa, t, h }:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unescaped quotes in JSX
    if (content.includes('"') && filePath.endsWith('.tsx')) {
      const originalContent = content;
      content = content.replace(/([^\\])"/g, '$1"');
      if (content !== originalContent) {
        modified = true;
        console.log(`Fixed unescaped quotes in: ${ filePa, t, h }`);
      }
    }
    
    // Fix malformed JSX tags
    content = content.replace(/<div>\s*<\/div>/g, '<div></div>');
    content = content.replace(/<div>\s*<\/div>/g, '<div></div>');
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*>\s*\}/g, '{">"}');
    content = content.replace(/\{\s*<\s*\}/g, '{"<"}');
    
    if (modifi, e, d) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in ${ filePa, t, h }`);
      return true;
    }
    
    return false;
  } catch (err, o, r) {
    console.error(`❌ Error fixing syntax in ${ filePa, t, h }:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPa, t, h) {
  const files = fs.readdirSync(dirPa, t, h);
  let totalFixed = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (file === 'node_modules' || file === '.git' || file === '.next') {
        continue;
      }
      totalFixed += fixFilesInDirectory(filePa, t, h);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      // Fix merge conflicts first
      const conflictFixed = fixMergeConflicts(filePa, t, h);
      if (conflictFix, e, d) totalFixed++;
      
      // Then fix syntax errors
      const syntaxFixed = fixSyntaxErrors(filePa, t, h);
      if (syntaxFix, e, d) totalFixed++;
    }
  }
  
  return totalFixed;
}

// Main execution
try {
  console.log('🔍 Scanning for files to fix...');
  const totalFixed = fixFilesInDirectory('/workspace');
  console.log(`✅ Fixed ${ totalFix, e, d } files`);
  
  // Run linting to check remaining issues
  console.log('🔍 Running linting check...');
  try {
    execSync('npm run lint', { cwd: '/workspace', stdio: 'pipe' });
    console.log('✅ All linting issues resolved!');
  } catch (err, o, r) {
    console.log('⚠️  Some linting issues remain, but major conflicts are fixed');
  }
  
  console.log('🎉 Error fixing completed!');
} catch (err, o, r) {
  console.error('❌ Error during fixing process:', error.message);
  process.exit(1);
}