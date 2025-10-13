const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Common patterns to fix
const fixPatterns = [
  // Remove massive icon imports and replace with minimal ones
  {
    pattern: /import\s*{\s*[^}]+}\s*from\s*['"]lucide-react['"];?\s*$/gm,
    replacement: 'import { ArrowRight, CheckCircle, Star, Brain, Zap, Globe, TrendingUp, Target, Monitor, MessageSquare, Phone } from "lucide-react";'
  },
  // Remove unused variable declarations
  {
    pattern: /^\s*const\s+benefits\s*=\s*\[[\s\S]*?\];\s*$/gm,
    replacement: ''
  },
  // Remove unused variable declarations
  {
    pattern: /^\s*const\s+features\s*=\s*\[[\s\S]*?\];\s*$/gm,
    replacement: ''
  }
];

// Fix a single file
const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply patterns
    fixPatterns.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('🔧 Bulk fixing imports...');
  
  const files = getAllFiles('./app');
  let fixedCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`✅ Fixed ${fixedCount} files`);
};

main();