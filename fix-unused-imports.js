#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with linting issues
function getLintIssues() {
  try {
    const output = execSync('pnpm run lint 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    return error.stdout || error.stderr || '';
  }
}

// Parse lint output to get files with unused imports
function parseLintOutput(output) {
  const files = new Map();
  const lines = output.split('\n');
  
  for (const line of lines) {
    if (line.includes('warning') && line.includes('is defined but never used')) {
      const match = line.match(/^\/workspace\/([^:]+):(\d+):(\d+)\s+warning\s+'([^']+)' is defined but never used/);
      if (match) {
        const [, filePath, lineNum, colNum, varName] = match;
        if (!files.has(filePath)) {
          files.set(filePath, []);
        }
        files.get(filePath).push({ line: parseInt(lineNum), col: parseInt(colNum), var: varName });
      }
    }
  }
  
  return files;
}

// Remove unused imports from a file
function removeUnusedImports(filePath, unusedVars) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Group unused vars by line
    const unusedByLine = new Map();
    for (const { line, var: varName } of unusedVars) {
      if (!unusedByLine.has(line)) {
        unusedByLine.set(line, []);
      }
      unusedByLine.get(line).push(varName);
    }
    
    // Process each line with unused imports
    for (const [lineNum, vars] of unusedByLine) {
      const lineIndex = lineNum - 1;
      if (lineIndex >= 0 && lineIndex < lines.length) {
        let line = lines[lineIndex];
        
        // Check if this is an import line
        if (line.includes('import') && line.includes('from')) {
          // Parse the import statement
          const importMatch = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
          if (importMatch) {
            const [, imports, source] = importMatch;
            const importList = imports.split(',').map(imp => imp.trim());
            
            // Remove unused imports
            const usedImports = importList.filter(imp => !vars.includes(imp));
            
            if (usedImports.length === 0) {
              // Remove the entire import line
              lines[lineIndex] = '';
            } else {
              // Reconstruct the import line
              lines[lineIndex] = `import { ${usedImports.join(', ')} } from '${source}'`;
            }
          }
        }
      }
    }
    
    // Write back the modified content
    const newContent = lines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Getting lint issues...');
const lintOutput = getLintIssues();
console.log('Parsing lint output...');
const filesWithIssues = parseLintOutput(lintOutput);

console.log(`Found ${filesWithIssues.size} files with unused imports`);

for (const [filePath, unusedVars] of filesWithIssues) {
  const fullPath = path.join('/workspace', filePath);
  if (fs.existsSync(fullPath)) {
    removeUnusedImports(fullPath, unusedVars);
  }
}

console.log('Done fixing unused imports');