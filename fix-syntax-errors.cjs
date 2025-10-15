const fs = require('fs');
const path = require('path');

// Function to fix HTML entities back to normal quotes
function fixHtmlEntities(content) {
  return content
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

// Function to fix unused imports more carefully
function fixUnusedImports(content) {
  // Only remove imports that are clearly unused and safe to remove
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is a lucide-react import line
    if (line.includes("from 'lucide-react'") || line.includes('from "lucide-react"')) {
      // Extract the import statement and check what's actually used
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        
        // Check which imports are actually used in the file
        const usedImports = imports.filter(imp => {
          const importName = imp.trim();
          // Skip if it's a default import or has spaces (complex destructuring)
          if (importName.includes(' ') || importName.includes('as ')) {
            return true;
          }
          
          // Check if this import is used in the file content
          const usageRegex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = content.match(usageRegex);
          return matches && matches.length > 1; // More than just the import statement
        });
        
        if (usedImports.length === 0) {
          // Remove the entire import line if no imports are used
          continue;
        } else if (usedImports.length !== imports.length) {
          // Replace with only used imports
          newLines.push(`import { ${usedImports.join(', ')} } from 'lucide-react';`);
          continue;
        }
      }
    }
    
    newLines.push(line);
  }
  
  return newLines.join('\n');
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Fix HTML entities first
    content = fixHtmlEntities(content);
    
    // Fix unused imports
    content = fixUnusedImports(content);
    
    // Remove console statements
    content = removeConsoleStatements(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
for (const file of files) {
  if (processFile(file)) {
    modifiedCount++;
  }
}

console.log(`\nProcessed ${files.length} files, modified ${modifiedCount} files.`);