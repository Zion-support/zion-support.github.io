#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)}

  getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
    const files = [];
    
    const scanDirectory = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(itemPath)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(itemPath)}
      })};
    
    scanDirectory(dir);
    return files}


        }
      }
      
      content = cleanLines.join('\n')}
    
    // Add proper imports for React components if missing
    if ((fileName.endsWith('.tsx') || fileName.endsWith('.jsx')) && 
        !content.includes('import React') && 
        (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect'))) {
      content = "import React from 'react';\n" + content}
    
    return content}


      }
      
      return fixedCount} catch (error) {
      this.log(`Error during merge conflict fix: ${error.message}`);
      throw error}
  }
}


