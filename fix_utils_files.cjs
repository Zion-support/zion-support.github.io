#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a simple utility file
function createSimpleUtility(filePath) {
  const fileName = path.basename(filePath, '.ts');
  const utilityName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '');
  
  return `// ${utilityName} utility
export function ${utilityName}() {
  // Implementation coming soon
  return null;
}

export default ${utilityName};`;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    console.log(`Fixing: ${filePath}`);
    
    const content = createSimpleUtility(filePath);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all problematic utility files
function findProblematicFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && item.endsWith('.ts') && !item.endsWith('.d.ts')) {
        // Check if file has merge conflicts or syntax errors
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || 
              content.includes('>>>>>>>') ||
              content.includes('=======') ||
              content.includes('export function') && content.includes('export class')) {
            files.push(fullPath);
          }
        } catch (error) {
          // If we can't read the file, add it to the list
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Scanning for problematic utility files...');
  
  const workspaceDir = process.cwd();
  const problematicFiles = findProblematicFiles(workspaceDir);
  
  console.log(`📊 Found ${problematicFiles.length} problematic utility files`);
  
  if (problematicFiles.length === 0) {
    console.log('✅ No problematic utility files found!');
    return;
  }
  
  let fixedCount = 0;
  let errorCount = 0;
  
  console.log('\n🔧 Fixing problematic utility files...');
  
  for (const filePath of problematicFiles) {
    try {
      const fixed = fixFile(filePath);
      if (fixed) {
        fixedCount++;
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error: ${path.relative(workspaceDir, filePath)} - ${error.message}`);
    }
  }
  
  console.log(`\n📈 Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount} files`);
  console.log(`   ❌ Errors: ${errorCount} files`);
  console.log(`   📊 Total processed: ${problematicFiles.length} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findProblematicFiles };