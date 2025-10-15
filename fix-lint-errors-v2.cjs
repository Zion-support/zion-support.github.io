const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities in text content only
function fixUnescapedEntities(content) {
  // Only fix quotes in text content, not in import statements or JSX attributes
  // Fix unescaped quotes in text content (inside JSX text nodes)
  content = content.replace(/([^\\])"([^"]*)"([^\\])/g, (match, before, text, after) => {
    // Don't replace if it's inside an import statement or JSX attribute
    if (before.includes('import') || before.includes('=') || before.includes('className=') || before.includes('href=')) {
      return match;
    }
    return before + '&ldquo;' + text + '&rdquo;' + after;
  });
  
  // Fix unescaped apostrophes in text content
  content = content.replace(/([^\\])'([^']*)'([^\\])/g, (match, before, text, after) => {
    // Don't replace if it's inside an import statement or JSX attribute
    if (before.includes('import') || before.includes('=') || before.includes('className=') || before.includes('href=')) {
      return match;
    }
    return before + '&apos;' + text + '&apos;' + after;
  });
  
  return content;
}

// Function to remove unused imports more carefully
function removeUnusedImports(content, filePath) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  
  let inImport = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('import ')) {
      inImport = true;
      importLines.push({ line, index: i });
    } else if (inImport && line.trim() === '') {
      // Empty line after imports
      inImport = false;
      otherLines.push({ line, index: i });
    } else {
      otherLines.push({ line, index: i });
    }
  }
  
  // Check which imports are actually used
  const usedImports = new Set();
  const contentToCheck = otherLines.map(l => l.line).join('\n');
  
  for (const { line } of importLines) {
    const importMatch = line.match(/import\s*{([^}]+)}/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      for (const imp of imports) {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        if (contentToCheck.includes(cleanImport)) {
          usedImports.add(imp);
        }
      }
    }
  }
  
  // Rebuild import lines
  const newLines = [];
  for (const { line, index } of importLines) {
    const importMatch = line.match(/import\s*{([^}]+)}/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImportsInLine = imports.filter(imp => usedImports.has(imp));
      if (usedImportsInLine.length > 0) {
        const newImportLine = line.replace(/{[^}]+}/, `{ ${usedImportsInLine.join(', ')} }`);
        newLines.push({ line: newImportLine, index });
      }
    } else {
      newLines.push({ line, index });
    }
  }
  
  // Combine all lines
  const allLines = [...newLines, ...otherLines];
  allLines.sort((a, b) => a.index - b.index);
  
  return allLines.map(l => l.line).join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Only fix unescaped entities in text content
    const newContent = fixUnescapedEntities(content);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Remove unused imports (only for .tsx files)
    if (filePath.endsWith('.tsx')) {
      const newContent = removeUnusedImports(content, filePath);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting lint error fixes (v2)...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  processFile(file);
}

console.log('Lint error fixes completed!');