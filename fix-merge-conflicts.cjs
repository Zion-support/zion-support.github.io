const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    }
    
    if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    }
    
    if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branches
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to fix common syntax issues
function fixSyntaxIssues(content) {
  // Fix unescaped quotes in JSX
  content = content.replace(/([^\\])'([^']*[^\\])'/g, '$1&apos;$2&apos;');
  content = content.replace(/([^\\])"([^"]*[^\\])"/g, '$1&quot;$2&quot;');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*>/g, 'className="$1">');
  
  // Fix missing semicolons in imports
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix missing semicolons in exports
  content = content.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  
  return content;
}

// Function to clean up unused imports
function cleanUnusedImports(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  const usedImports = new Set();
  
  // Find all used imports by scanning the content
  const importPattern = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = importPattern.exec(content)) !== null) {
    const importStatement = match[0];
    const imports = match[1].split(',').map(imp => imp.trim());
    
    // Check which imports are actually used
    const usedImportsInStatement = imports.filter(imp => {
      const importName = imp.replace(/\s+as\s+\w+/, '').trim();
      return content.includes(importName) && !importStatement.includes(importName);
    });
    
    if (usedImportsInStatement.length > 0) {
      cleanedLines.push(`import { ${usedImportsInStatement.join(', ')} } from '${match[2]}';`);
    }
  }
  
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
        
        // Check if file has merge conflicts
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`Fixing merge conflicts in: ${file}`);
          content = resolveMergeConflicts(content);
        }
        
        // Fix syntax issues
        content = fixSyntaxIssues(content);
        
        // Clean up unused imports
        content = cleanUnusedImports(content);
        
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