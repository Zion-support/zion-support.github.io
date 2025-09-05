#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning up merge conflict artifacts...');

// Function to clean merge artifacts from a file
function cleanMergeArtifacts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge artifacts
    if (!content.includes('ursor/add-new-services-and-deploy-updates-1b90')) {
      return false;
    }
    
    console.log(`📝 Cleaning artifacts in: ${filePath}`);
    
    // Remove branch name artifacts
    let cleaned = content.replace(/ursor\/add-new-services-and-deploy-updates-1b90/g, '');
    
    // Fix common syntax issues caused by merge artifacts
    cleaned = cleaned.replace(/\s*,\s*$/gm, ','); // Fix trailing commas
    cleaned = cleaned.replace(/\[\s*$/gm, '['); // Fix array opening
    cleaned = cleaned.replace(/\{\s*$/gm, '{'); // Fix object opening
    
    // Fix specific patterns
    cleaned = cleaned.replace(/const\s+\w+\s*=\s*\[\s*$/gm, 'const $1 = ['); // Fix array declarations
    cleaned = cleaned.replace(/const\s+\w+\s*=\s*\{\s*$/gm, 'const $1 = {'); // Fix object declarations
    
    fs.writeFileSync(filePath, cleaned);
    return true;
    
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge artifacts
function findFilesWithArtifacts(dir) {
  const filesWithArtifacts = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {
        try {
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('ursor/add-new-services-and-deploy-updates-1b90')) {
              filesWithArtifacts.push(filePath);
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return filesWithArtifacts;
}

// Main execution
try {
  const filesWithArtifacts = findFilesWithArtifacts('.');
  console.log(`🔍 Found ${filesWithArtifacts.length} files with merge artifacts`);
  
  let cleanedCount = 0;
  for (const file of filesWithArtifacts) {
    if (cleanMergeArtifacts(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`✅ Successfully cleaned ${cleanedCount} files`);
  
  // Check if there are still artifacts
  const remainingArtifacts = findFilesWithArtifacts('.');
  if (remainingArtifacts.length > 0) {
    console.log(`⚠️  ${remainingArtifacts.length} files still have artifacts:`);
    remainingArtifacts.forEach(file => console.log(`   - ${file}`));
  } else {
    console.log('🎉 All merge artifacts cleaned!');
  }
  
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
  process.exit(1);
}