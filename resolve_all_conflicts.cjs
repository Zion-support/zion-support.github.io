#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive conflict resolution...\n');

// Get all conflicted files
function getConflictedFiles() {
  const { execSync } = require('child_process');
  try {
    const output = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' });
    return output.trim().split('\n').filter(line => line.trim()).map(line => line.split(' ').pop());
  } catch (error) {
    return [];
  }
}

// Resolve conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all conflict markers and keep the HEAD version (our local changes)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]*\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    
    // Clean up any duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    let lastLine = '';
    
    for (const line of lines) {
      if (line.trim() !== lastLine.trim() || line.trim() === '') {
        cleanedLines.push(line);
        lastLine = line;
      }
    }
    
    content = cleanedLines.join('\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Handle deleted files
function handleDeletedFiles() {
  const deletedFiles = [
    'pages/index.tsx',
    'pages/it-services.tsx', 
    'pages/micro-saas.tsx'
  ];
  
  for (const file of deletedFiles) {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️  Removed deleted file: ${file}`);
      } catch (error) {
        console.error(`❌ Error removing ${file}:`, error.message);
      }
    }
  }
}

// Main execution
function main() {
  console.log('📋 Getting list of conflicted files...');
  const conflictedFiles = getConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No conflicted files found!');
    return;
  }
  
  console.log(`Found ${conflictedFiles.length} conflicted files:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  console.log('');
  
  // Handle deleted files first
  console.log('🗑️  Handling deleted files...');
  handleDeletedFiles();
  console.log('');
  
  // Resolve conflicts
  console.log('🔧 Resolving conflicts...');
  let resolved = 0;
  let failed = 0;
  
  conflictedFiles.forEach(file => {
    if (resolveConflicts(file)) {
      resolved++;
    } else {
      failed++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Resolved: ${resolved}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log(`  📁 Total: ${conflictedFiles.length}`);
  
  if (resolved > 0) {
    console.log('\n🎉 Conflict resolution completed!');
    console.log('Next steps:');
    console.log('  1. Review the resolved files');
    console.log('  2. Run: git add .');
    console.log('  3. Run: git commit -m "resolve: Merge conflicts resolved"');
  }
}

main();