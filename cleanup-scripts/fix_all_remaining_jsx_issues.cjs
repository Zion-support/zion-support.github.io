const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragment issues
    if (content.includes('<>') && content.includes('</>') && content.includes('Navigation')) {
      console.log(`Fixing JSX fragments in: ${filePath}`);
      
      // Remove standalone JSX fragments
      content = content.replace(/\s*<>\s*\n\s*\{\/\*.*?\*\/\}\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      content = content.replace(/\s*<>\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      
      modified = true;
    }

    // Fix duplicate export default issues
    if (content.includes('export default function') && (content.match(/export default function/g) || []).length > 1) {
      console.log(`Fixing duplicate exports in: ${filePath}`);
      
      // Keep only the last export default function
      const lines = content.split('\n');
      const fixedLines = [];
      let foundFirstExport = false;
      
      for (const line of lines) {
        if (line.includes('export default function') && !foundFirstExport) {
          foundFirstExport = true;
          fixedLines.push(line);
        } else if (line.includes('export default function') && foundFirstExport) {
          // Skip duplicate exports
          continue;
        } else {
          fixedLines.push(line);
        }
      }
      
      content = fixedLines.join('\n');
      modified = true;
    }

    // Fix malformed component structures
    if (content.includes('export default function') && content.includes('return (') && content.includes(');')) {
      // Ensure proper component structure
      const lines = content.split('\n');
      let inComponent = false;
      let componentStart = -1;
      let componentEnd = -1;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('export default function') && !inComponent) {
          inComponent = true;
          componentStart = i;
          braceCount = 0;
        }
        
        if (inComponent) {
          braceCount += (line.match(/{/g) || []).length;
          braceCount -= (line.match(/}/g) || []).length;
          
          if (braceCount === 0 && componentStart !== i) {
            componentEnd = i;
            break;
          }
        }
      }
      
      if (componentStart !== -1 && componentEnd !== -1) {
        // Extract the component and clean it up
        const componentLines = lines.slice(componentStart, componentEnd + 1);
        const componentContent = componentLines.join('\n');
        
        // Remove any stray import/export statements from within the component
        const cleanComponent = componentContent
          .replace(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g, '')
          .replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\};\s*/g, '');
        
        // Rebuild the file with proper structure
        const beforeComponent = lines.slice(0, componentStart);
        const afterComponent = lines.slice(componentEnd + 1);
        
        // Add metadata at the top if it exists
        let metadata = '';
        const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{[^}]*\};/);
        if (metadataMatch) {
          metadata = metadataMatch[0] + '\n\n';
        }
        
        // Add imports at the top
        let imports = '';
        const importMatches = content.match(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g);
        if (importMatches) {
          imports = importMatches.join('\n') + '\n\n';
        }
        
        content = imports + metadata + cleanComponent + '\n' + afterComponent.join('\n');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all problematic files
function findProblematicFiles(dir) {
  const problematicFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('export default function') || content.includes('<>')) {
            problematicFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return problematicFiles;
}

// Main execution
console.log('Finding files with JSX and export issues...');
const problematicFiles = findProblematicFiles('/workspace/app');

console.log(`Found ${problematicFiles.length} files to check:`);
problematicFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('All JSX and export issues have been resolved.');
