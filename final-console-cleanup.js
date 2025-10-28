import fs from 'fs';
import path from 'path';

function removeRemainingConsoles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      removeRemainingConsoles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove all console statements more aggressively
        const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
        if (consoleRegex.test(content)) {
          content = content.replace(consoleRegex, '');
          modified = true;
        }
        
        // Remove console statements that might be on the same line as other code
        const inlineConsoleRegex = /console\.(log|warn|error|info|debug)\([^)]*\);\s*/g;
        if (inlineConsoleRegex.test(content)) {
          content = content.replace(inlineConsoleRegex, '');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Removed remaining console statements from: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing file ${filePath}:`, error.message);
      }
    }
  });
}

// Start cleaning from the app directory
removeRemainingConsoles('./app');
console.log('Final console cleanup completed!');