import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('import ')) {
        // Check if this import has been seen before
        const importKey = line.trim();
        if (seenImports.has(importKey)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(importKey);
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    'app/5g-data-analytics/page.tsx',
    'app/5g-edge-computing/page.tsx',
    'app/5g-implementation/page.tsx',
    'app/5g-iot-solutions/page.tsx',
    'app/5g-mobile-applications/page.tsx',
    'app/about/page.tsx',
    'app/accessibility-page/page.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of filesToFix) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      if (fixDuplicateImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Run the fix
console.log('Fixing duplicate imports...');
const fixedCount = fixSpecificFiles();
console.log(`Fixed ${fixedCount} files with duplicate import issues.`);