import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix syntax errors in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed import statements
  if (content.includes(';import')) {
    content = content.replace(/;import/g, ';\nimport');
    modified = true;
  }
  
  // Fix misplaced variable declarations in object literals
  const lines = content.split('\n');
  const fixedLines = [];
  let inObjectLiteral = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track object literal state
    if (line.includes('{')) {
      braceCount += (line.match(/{/g) || []).length;
      inObjectLiteral = braceCount > 0;
    }
    if (line.includes('}')) {
      braceCount -= (line.match(/}/g) || []).length;
      inObjectLiteral = braceCount > 0;
    }
    
    // Fix lines with variable declarations in the middle of object literals
    if (inObjectLiteral && line.includes('const ') && line.includes('= []')) {
      // Extract variable name
      const varMatch = line.match(/const\s+(\w+)\s*=\s*\[\]/);
      if (varMatch) {
        // Move this variable declaration to the top of the function
        const varName = varMatch[1];
        // Find the function start
        let functionStart = -1;
        for (let j = i - 1; j >= 0; j--) {
          if (lines[j].includes('function') || lines[j].includes('=>')) {
            functionStart = j;
            break;
          }
        }
        
        if (functionStart !== -1) {
          // Insert variable declaration after function start
          const insertLine = functionStart + 1;
          lines.splice(insertLine, 0, `  const ${varName} = [];`);
          // Skip the current line
          continue;
        }
      }
    }
    
    // Fix malformed object properties
    if (line.includes('{') && line.includes('const ') && line.includes('= []')) {
      // This is a malformed line, try to fix it
      const parts = line.split('{');
      if (parts.length > 1) {
        const beforeBrace = parts[0].trim();
        const afterBrace = parts.slice(1).join('{');
        
        if (beforeBrace.includes('const ')) {
          const varName = beforeBrace.match(/const\s+(\w+)\s*=\s*\[\]/);
          if (varName) {
            fixedLines.push(`  const ${varName[1]} = [];`);
            fixedLines.push(`  const analyticsStats = [`);
            fixedLines.push(afterBrace);
            modified = true;
            continue;
          }
        }
      }
    }
    
    // Fix missing closing braces in JSX
    if (line.includes('<>') && !content.includes('</>')) {
      // Add closing tag at the end
      const lastLine = lines[lines.length - 1];
      if (!lastLine.includes('</>')) {
        lines[lines.length - 1] = lastLine.replace(');', '</>\n  );');
        modified = true;
      }
    }
    
    fixedLines.push(line);
  }
  
  if (modified) {
    content = fixedLines.join('\n');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
console.log('Starting comprehensive fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  try {
    fixFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Comprehensive fixes completed!');