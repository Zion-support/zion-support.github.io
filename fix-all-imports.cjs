const fs = require('fs');
const path = require('path');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find all import lines
    const importLines = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        importLines.push({ line: lines[i], index: i });
      }
    }
    
    // For each import line, check which imports are actually used
    const newLines = [...lines];
    
    importLines.forEach(({ line, index }) => {
      // Extract imports from the line
      const importMatch = line.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const source = importMatch[2];
        
        // Check which imports are actually used in the file
        const usedImports = imports.filter(imp => {
          // Create a regex to find usage of this import
          const regex = new RegExp(`\\b${imp}\\b`, 'g');
          const matches = content.match(regex);
          // If we find more than just the import line, it's used
          return matches && matches.length > 1;
        });
        
        if (usedImports.length > 0) {
          // Replace the import line with only used imports
          newLines[index] = `import { ${usedImports.join(', ')} } from '${source}';`;
        } else {
          // Remove the entire import line
          newLines[index] = '';
        }
      }
    });
    
    // Write the cleaned content back
    const cleanedContent = newLines.filter(line => line !== '').join('\n');
    fs.writeFileSync(filePath, cleanedContent);
    console.log(`Fixed imports in ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript files in the app directory
const appDir = '/workspace/app';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(appDir);

console.log(`Found ${files.length} TypeScript files to process`);

// Process each file
files.forEach(filePath => {
  removeUnusedImports(filePath);
});

console.log('All import cleanup completed');