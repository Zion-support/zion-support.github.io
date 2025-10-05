#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing conflicted files...');

// List of known conflicted files
const conflictedFiles = [
  './data/2026-metaverse-digital-reality-services.ts.conflicted',
  './data/real-2026-q3-additions.ts.conflicted',
  './data/real-market-services-extended.ts.conflicted',
  './data/2024-innovative-it-services.ts.conflicted',
  './data/2029-practical-business-solutions.ts.conflicted',
  './data/2024-real-micro-saas-services.ts.conflicted',
  './data/2029-emerging-tech-breakthroughs.ts.conflicted',
  './data/added-2026-q2-services.ts.conflicted',
  './data/real-services-q2-2025.ts.conflicted',
  './data/2027-cutting-edge-innovations.ts.conflicted'
];

function fixConflictedFile(filePath) {
  console.log(`🔍 Processing: ${filePath}`);
  
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    
    // Read the conflicted file
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the .conflicted extension and write to the original file
    const originalPath = filePath.replace('.conflicted', '');
    
    // Write the content to the original file
    fs.writeFileSync(originalPath, content, 'utf8');
    
    // Delete the conflicted file
    fs.unlinkSync(filePath);
    
    console.log(`✅ Fixed: ${originalPath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  let fixedCount = 0;
  
  for (const file of conflictedFiles) {
    if (fixConflictedFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  - Total files processed: ${conflictedFiles.length}`);
  console.log(`  - Successfully fixed: ${fixedCount}`);
  console.log(`  - Failed: ${conflictedFiles.length - fixedCount}`);
  
  console.log('\n✅ Conflicted files cleanup completed!');
}

main().catch(console.error);