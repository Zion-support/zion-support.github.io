import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix structural issues in a file
function fixStructuralIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove misplaced imports in the middle of files
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*\n/g;
    const imports = content.match(importRegex) || [];
    
    // Find the first import block at the top
    const firstImportIndex = content.indexOf('import ');
    if (firstImportIndex !== -1) {
      const firstImportEnd = content.indexOf('\n', firstImportIndex);
      const firstImportBlock = content.substring(firstImportIndex, firstImportEnd + 1);
      
      // Remove all other imports
      content = content.replace(importRegex, '');
      
      // Add back the first import block if it was removed
      if (!content.includes('import ')) {
        content = firstImportBlock + content;
      }
    }

    // Remove duplicate function declarations
    const functionRegex = /const\s+\w+Page:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g;
    const functions = content.match(functionRegex) || [];
    
    if (functions.length > 1) {
      // Keep only the first function declaration
      const firstFunctionIndex = content.indexOf(functions[0]);
      const firstFunctionEnd = content.indexOf('};', firstFunctionIndex);
      
      if (firstFunctionEnd !== -1) {
        const firstFunction = content.substring(firstFunctionIndex, firstFunctionEnd + 2);
        const beforeFirstFunction = content.substring(0, firstFunctionIndex);
        const afterFirstFunction = content.substring(firstFunctionEnd + 2);
        
        // Remove all other function declarations
        const cleanedAfter = afterFirstFunction.replace(functionRegex, '');
        content = beforeFirstFunction + firstFunction + cleanedAfter;
        modified = true;
      }
    }

    // Remove duplicate export statements
    const exportRegex = /export\s+default\s+\w+Page;?\s*\n/g;
    const exports = content.match(exportRegex) || [];
    
    if (exports.length > 1) {
      // Keep only the last export statement
      const lastExportIndex = content.lastIndexOf('export default');
      const lastExportEnd = content.indexOf('\n', lastExportIndex);
      
      if (lastExportEnd !== -1) {
        const beforeLastExport = content.substring(0, lastExportIndex);
        const lastExport = content.substring(lastExportIndex, lastExportEnd + 1);
        const afterLastExport = content.substring(lastExportEnd + 1);
        
        // Remove all other export statements
        const cleanedBefore = beforeLastExport.replace(exportRegex, '');
        content = cleanedBefore + lastExport + afterLastExport;
        modified = true;
      }
    }

    // Remove content after the last export statement
    const lastExportIndex = content.lastIndexOf('export default');
    if (lastExportIndex !== -1) {
      const lastExportEnd = content.indexOf('\n', lastExportIndex);
      if (lastExportEnd !== -1) {
        const beforeExport = content.substring(0, lastExportEnd + 1);
        const afterExport = content.substring(lastExportEnd + 1);
        
        // Check if there's any meaningful content after export
        const meaningfulContent = afterExport.trim().replace(/\s+/g, '');
        if (meaningfulContent.length > 0) {
          content = beforeExport;
          modified = true;
        }
      }
    }

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed structural issues in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

for (const file of tsxFiles) {
  fixStructuralIssues(file);
}

console.log('Finished fixing structural issues');