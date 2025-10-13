import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 'use client' directive placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      content = content.replace(/.*'use client';.*\n/g, '');
      content = "'use client';\n" + content;
      modified = true;
    }
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const newLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          newLines.push(line);
        } else {
          modified = true;
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
    }
    
    // Fix export default function syntax issues
    if (content.includes('export default function') && !content.includes('const ')) {
      // This is likely a React component, ensure proper structure
      const lines = content.split('\n');
      let inFunction = false;
      let braceCount = 0;
      let functionStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('export default function')) {
          functionStart = i;
          inFunction = true;
        }
        
        if (inFunction) {
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;
          
          if (braceCount === 0 && line.trim() === '}') {
            // End of function
            break;
          }
        }
      }
    }
    
    // Remove any remaining merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n.*?\n>>>>>>> [^\n]+\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixIssues(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix issues in app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = findAndFixIssues(appDir);

console.log(`Fixed syntax issues in ${fixedCount} files`);