#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Starting Simple Cleanup...');

// Simple conflict resolution - just remove all conflict markers
function cleanConflicts(content) {
  return content
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '')
    .replace(/>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< HEAD/g, '')
    .replace(/=======/g, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

// Process only the most critical files
const criticalFiles = [
  'src/utils/performance-optimizer.ts',
  'src/utils/imageOptimization.tsx',
  'src/utils/accessibility-checker.ts',
  'src/utils/seo-optimizer.ts',
  'src/utils/monitoring.ts'
];

let resolvedCount = 0;

for (const file of criticalFiles) {
  try {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        console.log(`🔧 Cleaning: ${file}`);
        
        const cleanedContent = cleanConflicts(content);
        fs.writeFileSync(file, cleanedContent);
        
        resolvedCount++;
        console.log(`✅ Cleaned: ${file}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error: ${file} - ${error.message}`);
  }
}

console.log(`\n✅ Cleaned ${resolvedCount} critical files`);
console.log('🎉 Simple cleanup completed!');