import fs from 'fs';
import path from 'path';

// Icons that are actually used in the features array
const usedIcons = ['Brain', 'Zap', 'Shield', 'Globe', 'CheckCircle'];

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if the file uses these icons in features array
    if (content.includes('features.map') && content.includes('feature.icon')) {
      // Add the missing imports
      const importLine = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
      
      // Find the first import line and add after it
      const lines = content.split('\n');
      let insertIndex = 0;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("import") && lines[i].includes("from")) {
          insertIndex = i + 1;
          break;
        }
      }
      
      // Check if the import already exists
      if (!content.includes("import { Brain")) {
        lines.splice(insertIndex, 0, importLine);
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix the standards array issue
    if (content.includes('standards.map')) {
      content = content.replace(/standards\.map/g, '[]');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImports(filePath);
    }
  });
}

// Process the app directory
processDirectory('./app');
console.log('Import fixes completed!');