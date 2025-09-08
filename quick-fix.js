const fs = require('fs');

console.log('🚀 Quick Fix - Resolving critical conflicts...');

// List of critical files to check first
const criticalFiles = [
  '/workspace/package.json',
  '/workspace/package-lock.json',
  '/workspace/netlify.toml',
  '/workspace/vite.config.ts',
  '/workspace/App.tsx',
  '/workspace/src/main.tsx',
  '/workspace/tsconfig.json'
];

function quickFix(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('<<<<<<< HEAD')) return false;
    
    console.log(`🔧 Fixing: ${filePath}`);
    
    // Simple resolution: keep incoming changes
    const lines = content.split('\n');
    const resolved = [];
    let inConflict = false;
    let keepIncoming = false;
    
    for (const line of lines) {
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepIncoming = false;
        continue;
      } else if (line.includes('=======')) {
        keepIncoming = true;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepIncoming = false;
        continue;
      }
      
      if (!inConflict || keepIncoming) {
        resolved.push(line);
      }
    }
    
    const newContent = resolved.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error: ${filePath} - ${error.message}`);
    return false;
  }
}

let fixedCount = 0;
for (const file of criticalFiles) {
  if (quickFix(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} critical files`);

// Create a simple git script
const gitScript = `#!/bin/bash
cd /workspace
git add .
git commit -m "Quick fix: resolve critical merge conflicts" || echo "Nothing to commit"
git push origin main
echo "Quick fix completed!"
`;

fs.writeFileSync('/workspace/quick-git.sh', gitScript);

console.log('✅ Created quick-git.sh script');
console.log('🎉 Quick fix completed!');