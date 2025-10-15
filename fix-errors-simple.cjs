const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  // Fix unescaped entities in JSX
  content = content.replace(/([^&])'([^']*[^&])'/g, '$1&apos;$2&apos;');
  content = content.replace(/([^&])"([^"]*[^&])"/g, '$1&quot;$2&quot;');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\s*\/\s*([^>]+)\s*>/g, '</$1>');
  
  // Fix missing semicolons in import statements
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix missing semicolons in export statements
  content = content.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*>/g, 'className="$1">');
  content = content.replace(/className\s*=\s*'([^']*)'\s*>/g, 'className="$1">');
  
  // Fix duplicate imports
  const lines = content.split('\n');
  const importLines = lines.filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import'));
  
  // Reconstruct content with unique imports at the top
  content = [...uniqueImports, ...nonImportLines].join('\n');
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  const usedSymbols = new Set();
  
  // Find all used symbols in the content
  const symbolPattern = /\b([A-Z][a-zA-Z0-9]*)\b/g;
  let match;
  while ((match = symbolPattern.exec(content)) !== null) {
    usedSymbols.add(match[1]);
  }
  
  // Process each line
  for (const line of lines) {
    if (line.trim().startsWith('import')) {
      const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = imports.filter(imp => {
          const importName = imp.replace(/\s+as\s+\w+/, '').trim();
          return usedSymbols.has(importName);
        });
        
        if (usedImports.length > 0) {
          cleanedLines.push(`import { ${usedImports.join(', ')} } from '${importMatch[2]}';`);
        }
      } else {
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
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
        
        // Fix syntax errors
        content = fixSyntaxErrors(content);
        
        // Remove unused imports
        content = removeUnusedImports(content);
        
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