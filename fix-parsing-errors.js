import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix parsing errors in a file
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common parsing errors
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;
      
      // Fix semicolon errors
      if (line.includes('const') && line.includes('=') && !line.includes(';') && !line.includes('{') && !line.includes('[')) {
        line = line.trim() + ';';
        modified = true;
      }
      
      // Fix JSX closing tag errors
      if (line.includes('</div>') && line.includes('Expected corresponding JSX closing tag')) {
        line = '</div>';
        modified = true;
      }
      
      // Fix declaration errors
      if (line.includes('Declaration or statement expected')) {
        // Skip this line
        modified = true;
        continue;
      }
      
      // Fix specific patterns that cause parsing errors
      if (line.includes('const') && line.includes('[') && !line.includes(']')) {
        // This is likely a multi-line array declaration that got broken
        // Skip until we find the closing bracket
        let braceCount = 0;
        let foundOpening = false;
        
        for (let j = i; j < lines.length; j++) {
          const currentLine = lines[j];
          if (currentLine.includes('[')) {
            braceCount++;
            foundOpening = true;
          }
          if (currentLine.includes(']')) {
            braceCount--;
          }
          if (foundOpening && braceCount === 0) {
            i = j; // Skip to the end of this block
            break;
          }
        }
        modified = true;
        continue;
      }
      
      if (line !== originalLine) {
        modified = true;
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed parsing errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.next') {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixParsingErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing files
console.log('Starting to fix parsing errors...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);