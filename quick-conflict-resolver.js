const fs = require('fs');
const path = require('path');

function resolveConflictsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Resolving conflicts in: ${filePath}`);
      
      // Create backup
      fs.writeFileSync(filePath + '.backup', content);
      
      // Remove conflict markers and keep main branch content
      content = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======/g, '')
        .replace(/>>>>>>> [^\n]*/g, '')
        .replace(/^=======$/gm, '');
      
      fs.writeFileSync(filePath, content);
      console.log(`Resolved: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// List of important files to check
const importantFiles = [
  'pages/index.tsx',
  'pages/_app.tsx',
  'components/layout/EnhancedNavigation.tsx',
  'components/layout/EnhancedFooter.tsx',
  'package.json',
  'styles/globals.css'
];

let resolvedCount = 0;

importantFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    }
  }
});

console.log(`\nResolved conflicts in ${resolvedCount} files`);