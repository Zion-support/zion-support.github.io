import fs from 'fs';
import path from 'path';
#!/usr/bin/env node




// Get all TypeScript and JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let _files = [];
  const _items = fs.readdirSync(dir);
  
  for (const item of items) {
    const _fullPath = path.join(dir, item);
    const _stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, dist, and other build directories
      if (!['node_modules', 'dist', '.next', 'out', '.git'].includes(item)) {
        files = files.concat(getAllFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix console statements by removing them
function fixConsoleStatements(content) {
  // Remove console.log, console.warn, console.error, console.info, console.debug
  content = content.replace(/^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm, '');
  content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);\s*/g, '');
  return content;
}

// Fix unused imports by removing them
function fixUnusedImports(content) {
  const _lines = content.split('\n');
  const _usedIdentifiers = new Set();
  
  // Find all used identifiers
  lines.forEach(line => {
    const _matches = line.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g);
    if (matches) {
      matches.forEach(match => usedIdentifiers.add(match));
    }
  });
  
  // Remove unused import lines
  const filteredLines = lines.filter(line => {
    const _importMatch = line.match(/import\s+.*?\s+from\s+['"][^'"]+['"]/);
    if (importMatch) {
      const _importContent = importMatch[0];
      const _importedItems = importContent.match(/\{([^}]+)\}/);
      if (importedItems) {
        const _items = importedItems[1].split(',').map(item => item.trim());
        const _hasUsedItems = items.some(item => usedIdentifiers.has(item));
        return hasUsedItems;
      }
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// Fix unused variables by prefixing with underscore
function fixUnusedVariables(content) {
  // Only fix obvious unused variable declarations, not function parameters
  content = content.replace(/^\s*(const|let|var)\s+(\w+)\s*=.*?;\s*$/gm, (match, decl, varName) => {
    if (varName.startsWith('_') || varName === 'props' || varName === 'event' || varName === 'index') {
      return match;
    }
    return match.replace(varName, `_${varName}`);
  });

  return content;
}

// Main function
function main() {

  const _files = getAllFiles('.', ['.ts', '.tsx', '.js', '.jsx']);
  let _fixedFiles = 0;
  
  files.forEach(file => {
    try {
      let _content = fs.readFileSync(file, 'utf8');
      const _originalContent = content;
      
      // Apply fixes
      content = fixConsoleStatements(content);
      content = fixUnusedImports(content);
      content = fixUnusedVariables(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');

        fixedFiles++;
      }
    } catch (error) {

    }
  });

}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixConsoleStatements, fixUnusedImports, fixUnusedVariables };