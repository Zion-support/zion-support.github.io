import fs from 'fs';
import path from 'path';

function removeConsoleLogs(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      removeConsoleLogs(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove console.log statements
        const consoleLogRegex = /^\s*console\.log\([^)]*\);\s*$/gm;
        if (consoleLogRegex.test(content)) {
          content = content.replace(consoleLogRegex, '');
          modified = true;
        }
        
        // Remove console.warn statements
        const consoleWarnRegex = /^\s*console\.warn\([^)]*\);\s*$/gm;
        if (consoleWarnRegex.test(content)) {
          content = content.replace(consoleWarnRegex, '');
          modified = true;
        }
        
        // Remove console.error statements (but keep error handling)
        const consoleErrorRegex = /^\s*console\.error\([^)]*\);\s*$/gm;
        if (consoleErrorRegex.test(content)) {
          content = content.replace(consoleErrorRegex, '');
          modified = true;
        }
        
        // Remove console.info statements
        const consoleInfoRegex = /^\s*console\.info\([^)]*\);\s*$/gm;
        if (consoleInfoRegex.test(content)) {
          content = content.replace(consoleInfoRegex, '');
          modified = true;
        }
        
        // Remove console.debug statements
        const consoleDebugRegex = /^\s*console\.debug\([^)]*\);\s*$/gm;
        if (consoleDebugRegex.test(content)) {
          content = content.replace(consoleDebugRegex, '');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Cleaned console statements from: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Start cleaning from the app directory
removeConsoleLogs('./app');
console.log('Console log removal completed!');