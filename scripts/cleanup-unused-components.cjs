#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to identify and clean up unused components
 */

const componentsDir = path.join(__dirname, '../app/components');
const appDir = path.join(__dirname, '../app');

// Get all component files
const componentFiles = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => file.replace('.tsx', ''));

console.log(`Found ${componentFiles.length} components to analyze`);

// Track usage
const usage = {};

// Search for component usage in the app directory
function searchForUsage(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      searchForUsage(fullPath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        
        // Check for imports and usage
        componentFiles.forEach(component => {
          const importPattern = new RegExp(`import.*${component}.*from`, 'g');
          const usagePattern = new RegExp(`<${component}[\\s>]`, 'g');
          
          if (importPattern.test(content) || usagePattern.test(content)) {
            if (!usage[component]) {
              usage[component] = [];
            }
            usage[component].push(fullPath);
          }
        });
      } catch (error) {
        console.warn(`Error reading ${fullPath}:`, error.message);
      }
    }
  }
}

// Search for usage
searchForUsage(appDir);

// Find unused components
const unusedComponents = componentFiles.filter(component => !usage[component]);

console.log('\n📊 Component Usage Analysis:');
console.log(`✅ Used components: ${componentFiles.length - unusedComponents.length}`);
console.log(`❌ Unused components: ${unusedComponents.length}`);

if (unusedComponents.length > 0) {
  console.log('\n🗑️  Unused components:');
  unusedComponents.forEach(component => {
    console.log(`   - ${component}.tsx`);
  });
  
  // Create a backup directory
  const backupDir = path.join(__dirname, '../backup-unused-components');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Move unused components to backup
  console.log('\n🔄 Moving unused components to backup...');
  unusedComponents.forEach(component => {
    const sourcePath = path.join(componentsDir, `${component}.tsx`);
    const backupPath = path.join(backupDir, `${component}.tsx`);
    
    try {
      fs.copyFileSync(sourcePath, backupPath);
      fs.unlinkSync(sourcePath);
      console.log(`   ✅ Moved ${component}.tsx to backup`);
    } catch (error) {
      console.error(`   ❌ Error moving ${component}.tsx:`, error.message);
    }
  });
  
  console.log(`\n✅ Cleanup completed! Unused components moved to ${backupDir}`);
} else {
  console.log('\n✅ All components are being used!');
}

// Show most used components
const sortedUsage = Object.entries(usage)
  .sort(([,a], [,b]) => b.length - a.length)
  .slice(0, 10);

console.log('\n📈 Most used components:');
sortedUsage.forEach(([component, files]) => {
  console.log(`   ${component}: ${files.length} files`);
});

console.log('\n🎯 Optimization recommendations:');
console.log('1. Consider consolidating similar components');
console.log('2. Use dynamic imports for rarely used components');
console.log('3. Implement tree-shaking for better bundle optimization');
