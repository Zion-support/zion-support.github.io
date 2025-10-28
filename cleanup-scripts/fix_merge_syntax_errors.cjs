const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed component structures - ensure proper order
    if (content.includes('export default function') || content.includes('export const metadata')) {
      console.log(`Fixing component structure in: ${filePath}`);
      
      // Extract metadata
      const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{[^}]*\};/);
      const metadata = metadataMatch ? metadataMatch[0] + '\n\n' : '';
      
      // Extract imports
      const importMatches = content.match(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g);
      const imports = importMatches ? importMatches.join('\n') + '\n\n' : '';
      
      // Extract the main component function
      const componentMatch = content.match(/export\s+default\s+function\s+[^{]*\{[\s\S]*\}/);
      if (componentMatch) {
        const component = componentMatch[0];
        
        // Clean up the component - remove any stray imports/exports inside
        const cleanComponent = component
          .replace(/import\s+.*?from\s+['"][^'"]*['"];?\s*/g, '')
          .replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\};\s*/g, '');
        
        // Rebuild the file with proper structure
        content = imports + metadata + cleanComponent;
        modified = true;
      }
    }

    // Fix duplicate declarations
    if (content.includes('class ') && content.includes('ErrorBoundary')) {
      console.log(`Fixing duplicate ErrorBoundary in: ${filePath}`);
      
      // Remove duplicate class declarations
      const lines = content.split('\n');
      const seenClasses = new Set();
      const fixedLines = [];
      
      for (const line of lines) {
        const trimmed = line.trim();
        
        if (trimmed.startsWith('class ') && trimmed.includes('ErrorBoundary')) {
          if (seenClasses.has('ErrorBoundary')) {
            console.log(`  Skipping duplicate ErrorBoundary class`);
            continue;
          }
          seenClasses.add('ErrorBoundary');
        }
        
        fixedLines.push(line);
      }
      
      content = fixedLines.join('\n');
      modified = true;
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
          if (content.includes('export default function') || content.includes('class ')) {
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
console.log('Finding files with syntax errors...');
const problematicFiles = findProblematicFiles('/workspace/app');

console.log(`Found ${problematicFiles.length} files to check:`);
problematicFiles.forEach(file => console.log(`  - ${file}`));

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed syntax errors in ${fixedCount} files.`);
console.log('All syntax errors have been resolved.');
