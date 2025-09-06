#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Function to find all files with merge conflicts
async function findConflictFiles() {
  try {
    const { stdout } = await execAsync('grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.ts" --include="*.tsx" --include="*.json" 2>/dev/null || true');
    if (!stdout) return [];
    
    const files = [...new Set(stdout.split('\n')
      .filter(line => line.includes('<<<<<<< HEAD'))
      .map(line => line.split(':')[0])
      .filter(file => file)
    )];
    
    return files;
  } catch (error) {
    console.error('Error finding conflict files:', error.message);
    return [];
  }
}

// Function to resolve conflicts by taking the newer version (after =======)
function resolveConflicts(content) {
  const lines = content.split('\n');
  const result = [];
  let inConflict = false;
  let skipUntilEquals = false;
  
  for (const line of lines) {
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      skipUntilEquals = true;
      continue;
    }
    
    if (line.startsWith('=======') && inConflict) {
      skipUntilEquals = false;
      continue;
    }
    
    if (line.startsWith('>>>>>>> ') && inConflict) {
      inConflict = false;
      skipUntilEquals = false;
      continue;
    }
    
    if (!skipUntilEquals) {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Main function to clean up conflicts
async function cleanupConflicts() {
  console.log('🔍 Finding files with merge conflicts...');
  
  const conflictFiles = await findConflictFiles();
  
  if (conflictFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📝 Found ${conflictFiles.length} files with merge conflicts`);
  
  let cleaned = 0;
  let errors = 0;
  
  for (const file of conflictFiles) {
    try {
      // Skip if file doesn't exist
      if (!fs.existsSync(file)) {
        continue;
      }
      
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if file still has conflicts
      if (!content.includes('<<<<<<< HEAD')) {
        continue;
      }
      
      const cleanedContent = resolveConflicts(content);
      
      // Only write if content actually changed
      if (cleanedContent !== content) {
        fs.writeFileSync(file, cleanedContent, 'utf8');
        console.log(`✅ Cleaned: ${file}`);
        cleaned++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      errors++;
    }
  }
  
  console.log(`\n🎉 Cleanup complete!`);
  console.log(`   ✅ Files cleaned: ${cleaned}`);
  console.log(`   ❌ Errors: ${errors}`);
  
  if (cleaned > 0) {
    console.log('\n🔧 Running lint fix to clean up any formatting issues...');
    try {
      await execAsync('npm run lint:fix 2>/dev/null || true');
      console.log('✅ Lint fix completed');
    } catch (error) {
      console.log('⚠️  Lint fix had some issues, but continuing...');
    }
  }
}

// Run the cleanup
cleanupConflicts().catch(console.error);