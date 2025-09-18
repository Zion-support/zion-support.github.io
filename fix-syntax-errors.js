import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing closing brackets for arrays
  fixed = fixed.replace(/(\s+};\s*)$/gm, '\n  }\n];');
  
  // Fix missing closing brackets for objects
  fixed = fixed.replace(/(\s+};\s*)$/gm, '\n  }\n};');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*,/g, '$1: "$2",');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\s+}\s*)(\s*{)/g, '$1,$2');
  
  // Fix missing commas in objects
  fixed = fixed.replace(/(\s+}\s*)(\s*[a-zA-Z])/g, '$1,$2');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Fix specific patterns for different file types
    if (filePath.includes('data/')) {
      // Fix array syntax issues
      if (fixed.includes('export const') && fixed.includes('[] = [')) {
        // Ensure proper array closing
        const lines = fixed.split('\n');
        let inArray = false;
        let braceCount = 0;
        let fixedLines = [];
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes('[] = [')) {
            inArray = true;
            braceCount = 0;
          }
          
          if (inArray) {
            // Count braces
            braceCount += (line.match(/{/g) || []).length;
            braceCount -= (line.match(/}/g) || []).length;
            
            // If we're at the end of the file and still in array, add closing bracket
            if (i === lines.length - 1 && inArray && braceCount === 0) {
              fixedLines.push(line);
              fixedLines.push('];');
            } else {
              fixedLines.push(line);
            }
          } else {
            fixedLines.push(line);
          }
        }
        
        fixed = fixedLines.join('\n');
      }
    }
    
    // Apply general fixes
    fixed = fixSyntaxErrors(fixed);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files
function getAllTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules')) {
      files.push(...getAllTsFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const srcDir = path.join(__dirname, 'src');
const tsFiles = getAllTsFiles(srcDir);

let fixedCount = 0;
for (const file of tsFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);