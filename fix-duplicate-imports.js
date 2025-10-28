import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { glob } from 'glob';

async function fixDuplicateImports() {
  try {
    const files = await glob('**/*.tsx', { cwd: '/workspace/app' });
    
    for (const file of files) {
      const filePath = path.join('/workspace/app', file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has duplicate React imports
      const lines = content.split('\n');
      const cleanedLines = [];
      const seenImports = new Set();
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip duplicate imports
        if (line.startsWith('import ') && seenImports.has(line)) {
          continue;
        }
        
        // Track imports
        if (line.startsWith('import ')) {
          seenImports.add(line);
          cleanedLines.push(lines[i]);
        } else {
          cleanedLines.push(lines[i]);
        }
      }
      
      const newContent = cleanedLines.join('\n');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed duplicate imports in ${file}`);
      }
    }
    
    console.log('All duplicate imports fixed');
  } catch (error) {
    console.error('Error fixing duplicate imports:', error);
  }
}

fixDuplicateImports();
=======
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
>>>>>>> 87c6cd40b012dd3702d84b18085574d3b52981fb
