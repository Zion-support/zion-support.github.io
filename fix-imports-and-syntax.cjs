const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix malformed import statements
function fixImports(content) {
  const lines = content.split('\n');
  const fixedLines = [];
  let inImport = false;
  let importLines = [];
  let currentImport = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import')) {
      if (inImport) {
        // Finish previous import
        if (currentImport.trim()) {
          importLines.push(currentImport.trim());
        }
      }
      inImport = true;
      currentImport = line;
    } else if (inImport && (line.trim().startsWith('}') || line.trim().startsWith('from'))) {
      currentImport += ' ' + line.trim();
      if (line.trim().startsWith('from')) {
        // Finish this import
        importLines.push(currentImport.trim());
        inImport = false;
        currentImport = '';
      }
    } else if (inImport && line.trim().startsWith('}')) {
      currentImport += ' ' + line.trim();
    } else if (inImport && line.trim().includes('from')) {
      currentImport += ' ' + line.trim();
      importLines.push(currentImport.trim());
      inImport = false;
      currentImport = '';
    } else if (inImport && line.trim()) {
      currentImport += ' ' + line.trim();
    } else if (inImport && !line.trim()) {
      // Empty line, continue
    } else {
      if (inImport) {
        // Finish previous import
        if (currentImport.trim()) {
          importLines.push(currentImport.trim());
        }
        inImport = false;
        currentImport = '';
      }
      fixedLines.push(line);
    }
  }
  
  // Add any remaining import
  if (inImport && currentImport.trim()) {
    importLines.push(currentImport.trim());
  }
  
  // Clean up import lines
  const cleanedImports = importLines.filter(imp => imp.trim()).map(imp => {
    // Fix common import issues
    imp = imp.replace(/\s+/g, ' ');
    imp = imp.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2";');
    imp = imp.replace(/import\s+([^{][^;]+)\s+from\s*['"]([^'"]+)['"]/g, 'import $1 from "$2";');
    return imp;
  });
  
  // Remove duplicates
  const uniqueImports = [...new Set(cleanedImports)];
  
  // Combine imports and other lines
  return [...uniqueImports, ...fixedLines].join('\n');
}

// Function to fix syntax errors
function fixSyntax(content) {
  // Fix missing semicolons
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  content = content.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  
  // Fix malformed JSX
  content = content.replace(/<>\s*<\s*\/\s*>/g, '<></>');
  content = content.replace(/<\s*\/\s*([^>]+)\s*>/g, '</$1>');
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]*)\s*\}/g, (match, content) => {
    if (content.trim()) {
      return `{ ${content.trim()} }`;
    }
    return '{}';
  });
  
  return content;
}

// Function to fix specific file issues
function fixFileIssues(filePath, content) {
  // Fix specific patterns that cause issues
  content = content.replace(/import\s*{\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2"');
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2";\nimport { $3 } from "$4"');
  
  return content;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if file is empty or has no content
        if (!content.trim()) {
          return;
        }
        
        // Fix imports
        content = fixImports(content);
        
        // Fix syntax
        content = fixSyntax(content);
        
        // Fix file-specific issues
        content = fixFileIssues(filePath, content);
        
        // Write the cleaned content back
        fs.writeFileSync(filePath, content, 'utf8');
        processedFiles++;
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  if (errorFiles > 0) {
    console.log(`Errors in ${errorFiles} files`);
  }
}

// Run the script
processFiles();