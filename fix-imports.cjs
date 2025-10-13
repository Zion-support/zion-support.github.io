const fs = require('fs');
const path = require('path');

// Common imports that are often missing
const commonImports = {
  'react-helmet-async': ['Helmet', 'HelmetProvider'],
  'react-router-dom': ['Link', 'BrowserRouter', 'Routes', 'Route'],
  'react': ['Suspense', 'lazy'],
  'lucide-react': [
    'ArrowRight', 'Star', 'CheckCircle', 'Users', 'Clock', 'Zap', 'Brain', 
    'Shield', 'Settings', 'Cloud', 'Monitor', 'Code', 'Network', 'Home',
    'Phone', 'Mic', 'Hand', 'Search', 'Database', 'Plus', 'Award', 'Cpu',
    'PieChart', 'MapPin', 'Edit', 'Pause', 'Download', 'Upload', 'Activity',
    'Globe', 'Server', 'Sparkles', 'TrendingUp', 'BarChart3', 'Target',
    'Workflow', 'Lightbulb', 'TrendingDown', 'PenTool', 'Video', 'Bot',
    'AlertCircle', 'Heart', 'Mail', 'Smartphone'
  ],
  'framer-motion': ['motion']
};

// Function to fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has React imports
    const hasReactImport = content.includes("import React");
    const hasReactFromReact = content.includes("import {") && content.includes("} from 'react'");
    
    // Get all used identifiers that might need imports
    const usedIdentifiers = new Set();
    
    // Find all JSX elements and function calls
    const jsxMatches = content.match(/<[A-Z][a-zA-Z0-9]*/g) || [];
    const functionMatches = content.match(/\b[A-Z][a-zA-Z0-9]*\s*\(/g) || [];
    
    jsxMatches.forEach(match => {
      const identifier = match.replace('<', '');
      usedIdentifiers.add(identifier);
    });
    
    functionMatches.forEach(match => {
      const identifier = match.replace(/\s*\(/, '');
      usedIdentifiers.add(identifier);
    });
    
    // Check for specific patterns
    const patterns = [
      /Helmet\s*\./g,
      /BrowserRouter/g,
      /Routes/g,
      /Route/g,
      /Suspense/g,
      /lazy\s*\(/g,
      /motion\./g
    ];
    
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          if (match.includes('Helmet')) usedIdentifiers.add('Helmet');
          if (match.includes('BrowserRouter')) usedIdentifiers.add('BrowserRouter');
          if (match.includes('Routes')) usedIdentifiers.add('Routes');
          if (match.includes('Route')) usedIdentifiers.add('Route');
          if (match.includes('Suspense')) usedIdentifiers.add('Suspense');
          if (match.includes('lazy')) usedIdentifiers.add('lazy');
          if (match.includes('motion')) usedIdentifiers.add('motion');
        });
      }
    });
    
    // Find all lucide-react icons
    const iconPattern = /<[A-Z][a-zA-Z0-9]*\s+className/g;
    const iconMatches = content.match(iconPattern) || [];
    iconMatches.forEach(match => {
      const iconName = match.replace(/<|\s+className/g, '');
      usedIdentifiers.add(iconName);
    });
    
    // Check for duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const existingImports = new Map();
    
    importLines.forEach(line => {
      if (line.includes('from')) {
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const source = match[2];
          if (!existingImports.has(source)) {
            existingImports.set(source, new Set());
          }
          imports.forEach(imp => existingImports.get(source).add(imp));
        }
      }
    });
    
    // Remove duplicate imports
    const newImportLines = [];
    const seenImports = new Set();
    
    importLines.forEach(line => {
      if (line.includes('from')) {
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const source = match[2];
          const uniqueImports = imports.filter(imp => {
            const key = `${source}:${imp}`;
            if (seenImports.has(key)) {
              return false;
            }
            seenImports.add(key);
            return true;
          });
          
          if (uniqueImports.length > 0) {
            newImportLines.push(`import { ${uniqueImports.join(', ')} } from '${source}';`);
          }
        } else {
          newImportLines.push(line);
        }
      } else {
        newImportLines.push(line);
      }
    });
    
    // Add missing imports
    const missingImports = new Map();
    
    usedIdentifiers.forEach(identifier => {
      // Check if already imported
      let alreadyImported = false;
      for (const [source, imports] of existingImports) {
        if (imports.has(identifier)) {
          alreadyImported = true;
          break;
        }
      }
      
      if (!alreadyImported) {
        // Find which source this identifier should come from
        for (const [source, possibleImports] of Object.entries(commonImports)) {
          if (possibleImports.includes(identifier)) {
            if (!missingImports.has(source)) {
              missingImports.set(source, new Set());
            }
            missingImports.get(source).add(identifier);
            break;
          }
        }
      }
    });
    
    // Add missing imports to the file
    if (missingImports.size > 0 || newImportLines.length !== importLines.length) {
      // Remove old import lines
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      
      // Add new imports
      const finalImports = [];
      
      // Add missing imports
      for (const [source, imports] of missingImports) {
        const importArray = Array.from(imports);
        finalImports.push(`import { ${importArray.join(', ')} } from '${source}';`);
      }
      
      // Add existing non-duplicate imports
      finalImports.push(...newImportLines);
      
      // Sort imports
      finalImports.sort();
      
      // Combine with non-import lines
      const finalContent = [...finalImports, ...nonImportLines].join('\n');
      
      fs.writeFileSync(filePath, finalContent);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let modifiedCount = 0;
files.forEach(file => {
  if (fixImports(file)) {
    modifiedCount++;
    console.log(`Fixed imports in: ${file}`);
  }
});

console.log(`\nFixed imports in ${modifiedCount} files.`);