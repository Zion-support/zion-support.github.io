const fs = require('fs');
const path = require('path');

console.log('🚀 Starting direct merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the latest version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining markers
    content = content.replace(/<<<<<<< [^\n]+/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process a few critical files directly
const criticalFiles = [
  '/workspace/App.tsx',
  '/workspace/src/App.tsx',
  '/workspace/src/index.tsx',
  '/workspace/src/main.tsx',
  '/workspace/vite.config.js',
  '/workspace/package.json',
  '/workspace/netlify.toml',
  '/workspace/tailwind.config.js',
  '/workspace/postcss.config.js',
  '/workspace/tsconfig.json'
];

let resolvedCount = 0;
for (const file of criticalFiles) {
  if (fs.existsSync(file)) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    }
  }
}

console.log(`\n📈 Resolution Summary:`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`📁 Total processed: ${criticalFiles.length} files`);

console.log('\n🎉 Direct merge conflict resolution completed!');