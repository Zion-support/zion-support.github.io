const fs = require('fs');

console.log('🚀 Quick conflict resolution...');

// List of critical files to fix first
const criticalFiles = [
  '/workspace/package.json',
  '/workspace/package-lock.json',
  '/workspace/netlify.toml',
  '/workspace/vite.config.ts',
  '/workspace/App.tsx',
  '/workspace/src/main.tsx',
  '/workspace/tsconfig.json'
];

function fixConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('')) {
      return false;
    }

    console.log(`🔧 Fixing: ${filePath}`);

    // Simple resolution: keep the incoming changes (after )
    const lines = content.split('\n');
    const resolved = [];
    let inConflict = false;
    let keepIncoming = false;

    for (const line of lines) {
      if (line.includes('')) {
        inConflict = true;
        keepIncoming = false;
        continue;
      } else if (line.includes('')) {
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
  if (fixConflictsInFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} critical files`);
console.log('🎉 Quick conflict resolution completed!');